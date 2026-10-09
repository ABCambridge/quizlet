import type { CardContent, CardContentData } from "./CardContent";
import { CodeContent } from "./CodeContent";
import { ContentFormat, isContentFormat } from "./ContentFormat";
import { LatexContent } from "./LatexContent";
import { MarkdownContent } from "./MarkdownContent";
import { PlainTextContent } from "./PlainTextContent";

type CardContentConstructor = new (source: string) => CardContent;

const CONSTRUCTORS: Record<ContentFormat, CardContentConstructor> = {
  [ContentFormat.Plain]: PlainTextContent,
  [ContentFormat.Markdown]: MarkdownContent,
  [ContentFormat.Code]: CodeContent,
  [ContentFormat.Latex]: LatexContent,
};

export const CardContentFactory = {
  create(format: ContentFormat, source: string): CardContent {
    return new CONSTRUCTORS[format](source);
  },

  fromJSON(data: CardContentData): CardContent {
    const format = isContentFormat(data.format)
      ? data.format
      : ContentFormat.Plain;
    return CardContentFactory.create(format, data.source ?? "");
  },
};
