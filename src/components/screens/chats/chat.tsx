import { ChatHeader } from "./chat-header";
import styles from "./chat.module.scss";

export function Chat() {
  return (
    <div className={styles.container}>
      <ChatHeader />
    </div>
  );
}
