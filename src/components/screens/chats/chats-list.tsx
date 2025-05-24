import { Input } from "@/components/ui/input";
import { Search, SquarePenIcon } from "lucide-react";
import { Fragment } from "react";
import ChatListItem from "./chat-list-item";
import styles from "./chats-list.module.scss";

const mockData = [
  {
    name: "Ahot",
    img: "",
  },
  {
    name: "Anton",
    img: "",
  },
  {
    name: "Artem",
    img: "",
  },
  {
    name: "Mike",
    img: "",
  },
];

export function ChatsList() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <h2>Messages</h2>
          <span>48 new</span>
        </div>
        <SquarePenIcon size={20} className={styles.iconPen} />
      </div>
      <Input placeholder="Search anything..." icon={<Search size={20} />} />
      <div className={styles.messages}>
        <p>All messages</p>
        <div>
          {mockData.map(({ name }) => (
            <Fragment key={name}>
              <ChatListItem name={name} />
              <div className="divider" />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
