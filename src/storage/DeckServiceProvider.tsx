"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useCurrentUser } from "@/auth/AuthProvider";
import { CloudDeckRepository } from "@/storage/CloudDeckRepository";
import type { DeckRepository } from "@/storage/DeckRepository";
import { DeckService } from "@/storage/DeckService";
import { LocalStorageDeckRepository } from "@/storage/LocalStorageDeckRepository";

const DeckServiceContext = createContext<DeckService | null>(null);

/** Builds the repositories the current user may use: local always, cloud only when logged in. */
export const DeckServiceProvider = ({ children }: { children: ReactNode }) => {
  const user = useCurrentUser();

  const service = useMemo(() => {
    const repositories: DeckRepository[] = [new LocalStorageDeckRepository()];
    if (user) repositories.push(new CloudDeckRepository(user));
    return new DeckService(repositories);
  }, [user]);

  return <DeckServiceContext value={service}>{children}</DeckServiceContext>;
};

export const useDeckService = (): DeckService => {
  const service = useContext(DeckServiceContext);
  if (!service) {
    throw new Error(
      "useDeckService must be used inside a DeckServiceProvider.",
    );
  }
  return service;
};
