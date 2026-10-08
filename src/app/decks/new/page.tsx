import QuizletPage from "@/components/QuizletPage";
import DeckEditor from "@/components/deck-editor/DeckEditor";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create deck",
};

const Page = () => {
  return <QuizletPage Component={DeckEditor} />;
};

export default Page;
