import type { ReactNode } from "react";
import type { ContentFormat } from "@/classes/content/ContentFormat";

/** Serialized form of a {@link CardContent}. */
export interface CardContentData {
  format: ContentFormat;
  source: string;
}

/**
 * One side of a card (question or answer). Subclasses decide how the raw
 * source is parsed and rendered, e.g. plain text, markdown, code, or LaTeX.
 */
export abstract class CardContent {
  abstract readonly format: ContentFormat;

  constructor(readonly source: string) {}

  abstract render(): ReactNode;

  isEmpty(): boolean {
    return this.source.trim().length === 0;
  }

  toJSON(): CardContentData {
    return { format: this.format, source: this.source };
  }
}
