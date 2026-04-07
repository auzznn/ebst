import { Channel } from "@/hooks/useChannels";
const UserAvatar = ({ channel, session }: {channel: Channel, session: any}) => {
  if (!channel.isDM) return <span className="text-gray-400">#</span>;

  const user = channel.members.find(
    (m) => m.user.id !== session?.user.id,
  )?.user;
  console.log(user)

  if (user?.image) {
    return <img src={user.image} className="w-8 h-8 rounded-full" alt="" />;
  }

  return (
    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs text-white">
      {user?.name?.charAt(0).toUpperCase() || "?"}
    </div>
  );
};

export default UserAvatar;
