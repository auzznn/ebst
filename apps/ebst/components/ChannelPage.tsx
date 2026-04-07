"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useChannels, useCreateChannel } from "@/hooks/useChannels";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <div className="flex items-center justify-between px-6 py-4 border-b shrink-0">
        <h1 className="text-xl font-semibold">Channels</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="w-2 h-2 mr" />
              New channel
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
                  !channelName.trim() ||
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
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {isLoading && (
          <div className="flex items-center justify-center h-64">
            <p className="text-muted-foreground text-sm">Loading channels...</p>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center h-64">
            <p className="text-destructive text-sm">Failed to load channels.</p>
          </div>
        )}

        {!isLoading && !error && (
          <div className="max-w-2xl mx-auto space-y-6">
            {channels?.length === 0 && (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <MessageSquare className="w-10 h-10 text-muted-foreground mb-3" />
                  <p className="font-medium">No channels yet</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Create one to start collaborating
                  </p>
                </CardContent>
              </Card>
            )}

            <div className="space-y-2">
              {channels?.map((channel) => (
                <Card
                  key={channel.id}
                  className="cursor-pointer hover:bg-accent transition-colors"
                  onClick={() =>
                    router.push(`/communication/channel/${channel.id}`)
                  }
                >
                  <CardHeader className="py-4 px-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* <MessageSquare className="w-4 h-4 text-muted-foreground" /> */}
                        <UserAvatar channel={channel} session={session} />
                        <CardTitle className="text-base font-small">
                          <span className="truncate block max-w-37.5">
                            {channel.isDM
                              ? (channel.members.find(
                                  (m) => m.user.id !== session?.user.id,
                                )?.user.name ?? "Unknown")
                              : `# ${channel.name}`}
                          </span>
                        </CardTitle>
                        {channel.isDM && (
                          <Badge variant="secondary" className="text-xs">
                            DM
                          </Badge>
                        )}
                      </div>
                      {channel.isDM ? (
                        ""
                      ) : (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Users className="w-3 h-3" />
                          {channel.members.length}
                        </div>
                      )}
                    </div>
                    {channel.messages[0] && (
                      <p className="text-sm text-muted-foreground truncate pl-7">
                        {channel.messages[0].content}
                      </p>
                    )}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
