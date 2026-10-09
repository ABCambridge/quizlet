import { Deck, type DeckData, type UUID } from "@/classes";
import type { DeckRepository } from "./DeckRepository";
import { StorageLocation } from "@/storage";

const STORAGE_KEY = "quizlet-bb.decks";

type StoredDecks = Record<UUID, DeckData>;

export class LocalStorageDeckRepository implements DeckRepository {
  readonly location = StorageLocation.Local;

  async list(): Promise<Deck[]> {
    return Object.values(this.read()).map(Deck.fromJSON);
  }

  async get(id: UUID): Promise<Deck | null> {
    const data = this.read()[id];
    return data ? Deck.fromJSON(data) : null;
  }

  async save(deck: Deck): Promise<void> {
    this.write({ ...this.read(), [deck.id]: deck.toJSON() });
  }

  async delete(id: UUID): Promise<void> {
    const decks = this.read();
    delete decks[id];
    this.write(decks);
  }

  private read(): StoredDecks {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    try {
      return JSON.parse(raw) as StoredDecks;
    } catch (error) {
      console.error("Could not parse saved decks; ignoring them.", error);
      return {};
    }
  }

  private write(decks: StoredDecks): void {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
  }
}
