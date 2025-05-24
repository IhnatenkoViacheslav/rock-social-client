import { PRIVATE_PATHS } from "@/config/routes";
import { Bolt, Bookmark, MessageSquare, Users2 } from "lucide-react";

export const navItems = {
  chats: [
    { path: PRIVATE_PATHS.chat, icon: MessageSquare },
    { path: PRIVATE_PATHS.favorites, icon: Bookmark },
  ],
  helpers: [
    { path: PRIVATE_PATHS.contacts, icon: Users2 },
    { path: PRIVATE_PATHS.settings, icon: Bolt },
  ],
};
