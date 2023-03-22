import { PlusIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { db } from "../firebase";

function ClientNewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };

  useEffect(() => {
    const handleNewChatButtonClick = async () => {
      if (typeof window !== "undefined") {
        await createNewChat();
      }
    };

    const newChatButton = document.getElementById("new-chat-button");
    newChatButton?.addEventListener("click", handleNewChatButtonClick);

    return () => {
      newChatButton?.removeEventListener("click", handleNewChatButtonClick);
    };
  }, [session]);

  return (
    <div id="new-chat-button" className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default ClientNewChat;
