import { Card, type CardData } from "@/classes/Card";
import { newId, type UUID } from "@/classes/types";
import type { StorageLocation } from "@/storage/StorageLocation";

export interface IDeck {
  id: UUID;
  name: string;
  belongs_to: UUID | null;
  storage: StorageLocation;
  cards: Card[];
  created_at: number;
  updated_at: number;
}

/** Serialized form of a {@link Deck}. */
export interface DeckData extends Omit<IDeck, "cards"> {
  cards: CardData[];
}

export type DeckChanges = Partial<Pick<IDeck, "name" | "cards" | "storage">>;

export class Deck implements IDeck {
  readonly id: UUID;
  readonly name: string;
  readonly belongs_to: UUID | null;
  readonly storage: StorageLocation;
  readonly cards: Card[];
  readonly created_at: number;
  readonly updated_at: number;

  constructor(deck: IDeck) {
    this.id = deck.id;
    this.name = deck.name;
    this.belongs_to = deck.belongs_to;
    this.storage = deck.storage;
    this.cards = deck.cards;
    this.created_at = deck.created_at;
    this.updated_at = deck.updated_at;
  }

  static create(
    deck: Pick<IDeck, "name" | "cards" | "belongs_to" | "storage">,
  ): Deck {
    const now = Date.now();
    return new Deck({ ...deck, id: newId(), created_at: now, updated_at: now });
  }

  static fromJSON(data: DeckData): Deck {
    return new Deck({ ...data, cards: data.cards.map(Card.fromJSON) });
  }

  /** Returns a copy with the given changes applied and `updated_at` bumped. */
  update(changes: DeckChanges): Deck {
    return new Deck({ ...this, ...changes, updated_at: Date.now() });
  }

  toJSON(): DeckData {
    return { ...this, cards: this.cards.map((card) => card.toJSON()) };
  }
}
