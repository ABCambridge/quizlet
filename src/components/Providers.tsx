"use client";

import type { ReactNode } from "react";
import { AuthProvider } from "@/auth/AuthProvider";
import { DeckServiceProvider } from "@/storage/DeckServiceProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <DeckServiceProvider>{children}</DeckServiceProvider>
    </AuthProvider>
  );
};

export default Providers;
