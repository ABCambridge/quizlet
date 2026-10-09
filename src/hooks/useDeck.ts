"use client";

import { useEffect, useState } from "react";
import type { Deck, UUID } from "@/classes";
import { useDeckService } from "@/storage";

export type DeckState =
  | { status: "loading" }
  | { status: "missing" }
  | { status: "ready"; deck: Deck };

export const useDeck = (id: UUID): DeckState => {
  const service = useDeckService();
  const [state, setState] = useState<DeckState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    service.get(id).then((deck) => {
      if (cancelled) return;
      setState(deck ? { status: "ready", deck } : { status: "missing" });
    });
    return () => {
      cancelled = true;
    };
  }, [service, id]);

  return state;
};
