"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useMessages, useDeleteMessage, Message } from "@/hooks/useMessages";
import { useChannel } from "@/hooks/useChannels";
import { useSocket } from "@/hooks/useSocket";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Send, Wifi, WifiOff, ArrowLeft } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { formatMessageTime, formatDateDivider } from "@/lib/formatDate";

function groupByDate(messages: Message[]) {
  const groups: { date: string; messages: Message[] }[] = [];

  for (const message of messages) {
    const dateKey = new Date(message.createdAt).toDateString();
    const existing = groups.find((g) => g.date === dateKey);

    if (existing) {
      existing.messages.push(message);
    } else {
      groups.push({ date: dateKey, messages: [message] });
    }
  }

  return groups;
}

export default function ChannelPage() {
  const { id } = useParams<{ id: string }>();
  const { data: session, isPending } = authClient.useSession();
  const { data: channel } = useChannel(id);
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useMessages(id);
  const deleteMessage = useDeleteMessage(id);
  const { isConnected, typingUsers, sendMessage, sendTyping } = useSocket(id);

  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Flatten all pages of messages
  const messages = useMemo(() => {
    return data?.pages.flatMap((page) => page.messages) ?? [];
  }, [data]);

  // Group and reverse messages by date, memoized for performance
  const groupedMessages = useMemo(() => {
    console.log(messages.reverse())
    return groupByDate([...messages].reverse());
  }, [messages]);

  // IntersectionObserver for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  function handleSend() {
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    } else {
      sendTyping(session?.user.id ?? "");
    }
  }
  if (isPending) {
    return (
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 flex items-center justify-center overflow-y-auto">
          <p className="text-muted-foreground">Loading chat...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 flex items-center justify-center overflow-y-auto">
          <p className="text-muted-foreground">No active session found.</p>
        </div>
      </div>
    );
  }

  if (!channel) {
    return (
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 flex items-center justify-center overflow-y-auto">
          <p className="text-muted-foreground">Loading channel...</p>
        </div>
      </div>
    );
  }

  const otherMember = channel.members.find(
    (m) => m.user?.id !== session.user.id,
  );

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 h-14 border-b shrink-0">
        <div className="flex items-center gap-3">
          <h2 className="font-semibold text-base">
            {channel.isDM
              ? (otherMember?.user?.name ?? "Direct Message")
              : `# ${channel.name}`}
          </h2>
          <Badge variant="outline" className="text-xs gap-1">
            {channel.members.length} members
          </Badge>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          {isConnected ? (
            <>
              <Wifi className="w-3.5 h-3.5 text-green-500" /> connected
            </>
          ) : (
            <>
              <WifiOff className="w-3.5 h-3.5 text-destructive" /> disconnected
            </>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-muted flex flex-col-reverse">
        {/* Typing indicator (at top of JSX = bottom visually with flex-col-reverse) */}
        {typingUsers.length > 0 && (
          <p className="text-xs text-foreground/70 italic font-medium">
            {typingUsers.length === 1
              ? `Someone is typing...`
              : `${typingUsers.length} people are typing...`}
          </p>
        )}

        {groupedMessages.map((group) => (
          <div key={group.date} className="space-y-3 flex flex-col-reverse">
            {/* Messages for this date */}
            {group.messages.map((message) => {
              const isOwn = message.sender.id === session?.user.id;

              return (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-3 group",
                    isOwn && "flex-row-reverse",
                  )}
                >
                  {/* Avatar */}
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium shrink-0">
                    {message.sender.image ? (
                      <img
                        src={message.sender.image}
                        alt={message.sender.name}
                        className="rounded-full w-8 h-8"
                      />
                    ) : (
                      message.sender.name[0].toUpperCase()
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={cn(
                      "max-w-sm space-y-1 flex items-start flex-col",
                      isOwn && "items-end",
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-foreground font-medium">
                        {message.sender.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {formatMessageTime(message.createdAt)}
                      </span>
                    </div>
                    <div
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm border",
                        isOwn
                          ? "bg-primary text-primary-foreground border-primary rounded-tr-sm"
                          : "bg-card text-card-foreground border-border rounded-tl-sm",
                      )}
                    >
                      {message.content}
                    </div>
                  </div>

                  {/* Delete (own messages only) */}
                  {isOwn && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 w-6 h-6 text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you sure want to delete this message?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete message from our server.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            variant="destructive"
                            onClick={() => deleteMessage.mutate(message.id)}
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </div>
              );
            })}
            {/* Date divider */}
            <div className="flex items-center gap-3 my-3">
              <div className="flex-1 h-px bg-foreground/30" />
              <span className="text-xs text-foreground/80 font-medium">
                {formatDateDivider(group.date)}
              </span>
              <div className="flex-1 h-px bg-foreground/30" />
            </div>
          </div>
        ))}

        {/* Sentinel for infinite scroll */}
        <div ref={sentinelRef} className="h-px" />

        {/* Loading more messages */}
        {isFetchingNextPage && (
          <p className="text-center text-sm text-foreground font-medium">
            Loading older messages...
          </p>
        )}
      </div>

      {/* Input */}
      <div className="px-6 py-4 border-t shrink-0">
        <div className="flex gap-2">
          <Textarea
            placeholder={`Message ${channel.isDM ? "" : `#${channel.name}`}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={!isConnected}
            rows={1}
            className="min-h-10"
          />
          <Button
            size="icon"
            onClick={handleSend}
            disabled={!input.trim() || !isConnected}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
