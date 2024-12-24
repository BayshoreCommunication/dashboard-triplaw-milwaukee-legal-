import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSiteInfo = create(
  persist(
    (set) => ({
      theme: "#ECECEC",
      username: null,
      logo: null,
      setTheme: (theme) => set({ theme }),
      setUsername: (username) => set({ username }),
      setLogo: (logo) => set({ logo }),
    }),
    {
      name: "theme",
    },
    {
      name: "username",
    },
    {
      name: "logo",
    }
  )
);
