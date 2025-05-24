import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCheck } from "lucide-react";
import styles from "./chat-list-item.module.scss";

type ChartListItemProps = {
  name: string;
};

function ChatListItem({ name }: ChartListItemProps) {
  return (
    <div className={styles.listItem}>
      <div className={styles.left}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h4>{name}</h4>
          <span>Voice message</span>
        </div>
      </div>
      <div className={styles.right}>
        <CheckCheck size={18} />
        <span>06:56</span>
      </div>
    </div>
  );
}

export default ChatListItem;
