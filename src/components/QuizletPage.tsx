import type { ComponentType } from "react";

type QuizletPageProps<P extends object> = {
  Component: ComponentType<P>;
  title?: string;
} & P;

const QuizletPage = <P extends object>({
  Component,
  ...props
}: QuizletPageProps<P>) => {
  return (
    <main>
      <Component {...(props as unknown as P)} />
    </main>
  );
};

export default QuizletPage;
