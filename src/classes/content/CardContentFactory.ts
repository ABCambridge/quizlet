import type {
  CardContent,
  CardContentData,
} from "@/classes/content/CardContent";
import { CodeContent } from "@/classes/content/CodeContent";
import {
  ContentFormat,
  isContentFormat,
} from "@/classes/content/ContentFormat";
import { LatexContent } from "@/classes/content/LatexContent";
import { MarkdownContent } from "@/classes/content/MarkdownContent";
import { PlainTextContent } from "@/classes/content/PlainTextContent";

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
