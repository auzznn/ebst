"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useChannels, useCreateChannel } from "@/hooks/useChannels";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Plus, Users, Search, X } from "lucide-react";
import { UserResult, useUserSearch } from "@/hooks/useUsers";
import { authClient } from "@/lib/auth-client";
import UserAvatar from "./UserAvatar";

export default function ChannelsPage() {
  const router = useRouter();
  const { data: channels, isLoading, error } = useChannels();
  const createChannel = useCreateChannel();

  const [open, setOpen] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<UserResult[]>([]);

  const { data: session } = authClient.useSession();

  const { data: searchResults, isFetching } = useUserSearch(searchQuery);

  function selectUser(user: UserResult) {
    if (selectedUsers.find((u) => u.id === user.id)) return;
    setSelectedUsers((prev) => [...prev, user]);
    setSearchQuery("");
  }

  function removeUser(userId: string) {
    setSelectedUsers((prev) => prev.filter((u) => u.id !== userId));
  }

  function handleCreate() {
    createChannel.mutate(
      {
        name: channelName,
        isDM: 1 + selectedUsers.length <= 2,
        memberIds: selectedUsers.map((u) => u.id),
      },
      {
        onSuccess: () => {
          setOpen(false);
          setChannelName("");
          setSelectedUsers([]);
          setSearchQuery("");
        },
      },
    );
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-14 border-b shrink-0">
        <h1 className="text-base font-semibold">Channels</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="h-8 px-3">
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline ml-1.5">New</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a channel</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-2">
              <div className="space-y-1">
                <label className="text-sm font-medium">Channel name</label>
                <Input
                  placeholder="e.g. general"
                  value={channelName}
                  onChange={(e) => setChannelName(e.target.value)}
                  disabled={selectedUsers.length <= 1}
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Add members</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, username or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>

                {/* Search results dropdown */}
                {searchQuery.length > 1 && (
                  <div className="border rounded-lg overflow-hidden shadow-sm">
                    {isFetching && (
                      <p className="text-xs text-muted-foreground px-3 py-2">
                        Searching...
                      </p>
                    )}
                    {!isFetching && searchResults?.length === 0 && (
                      <p className="text-xs text-muted-foreground px-3 py-2">
                        No users found
                      </p>
                    )}
                    {searchResults?.map((user) => (
                      <button
                        key={user.id}
                        onClick={() => selectUser(user)}
                        className="w-full flex items-center gap-3 px-3 py-2 hover:bg-accent text-left transition-colors"
                      >
                        <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-medium shrink-0">
                          {user.image ? (
                            <img
                              src={user.image}
                              alt={user.name}
                              className="rounded-full w-8 h-8"
                            />
                          ) : (
                            user.name[0].toUpperCase()
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {user.name}{" "}
                            <span className="font-light text-xs">
                              ({user.displayUsername})
                            </span>
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Selected users */}
              {selectedUsers.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedUsers.map((user) => (
                    <Badge
                      key={user.id}
                      variant="secondary"
                      className="gap-1 pr-1"
                    >
                      {user.name}
                      <button
                        onClick={() => removeUser(user.id)}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}

              <Button
                className="w-full"
                onClick={handleCreate}
                disabled={
                  createChannel.isPending ||
                  selectedUsers.length === 0
                }
              >
                {createChannel.isPending ? "Creating..." : "Create channel"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-3 py-3">
        {isLoading && (
          <div className="flex items-center justify-center h-32">
            <p className="text-muted-foreground text-xs">Loading channels...</p>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center h-32">
            <p className="text-destructive text-xs">Failed to load channels.</p>
          </div>
        )}

        {!isLoading && !error && (
          <div className="space-y-2">
            {channels?.length === 0 && (
              <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
                <MessageSquare className="w-8 h-8 text-muted-foreground mb-2" />
                <p className="text-sm font-medium">No channels yet</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Create one to start collaborating
                </p>
              </div>
            )}

            <div className="space-y-1">
              {channels?.map((channel) => (
                <div
                  key={channel.id}
                  className="cursor-pointer hover:bg-accent transition-colors rounded-lg p-3 group"
                  onClick={() =>
                    router.push(`/communication/channel/${channel.id}`)
                  }
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <UserAvatar channel={channel} session={session} />
                      <span className="text-sm font-medium truncate block">
                        {channel.isDM
                          ? (channel.members.find(
                              (m) => m.user.id !== session?.user.id,
                            )?.user.name ?? "Unknown")
                          : `${channel.name}`}
                      </span>
                      {channel.isDM && (
                        <Badge variant="secondary" className="text-[10px] h-4 px-1.5 shrink-0">
                          DM
                        </Badge>
                      )}
                    </div>
                    {!channel.isDM && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                        <Users className="w-3 h-3" />
                        <span className="text-[10px]">{channel.members.length}</span>
                      </div>
                    )}
                  </div>
                  {channel.messages[0] && (
                    <p className="text-xs text-muted-foreground truncate mt-1.5 pl-10">
                      {channel.messages[0].content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

