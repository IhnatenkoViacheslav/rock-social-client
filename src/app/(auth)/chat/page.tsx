import { Chat } from "@/components/screens/chats/chat";
import { ChatsList } from "@/components/screens/chats/chats-list";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <ChatsList />
      <Chat />
    </div>
  );
}
