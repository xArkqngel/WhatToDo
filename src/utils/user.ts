import { create } from "zustand";

type UserStore = {
  user: string | null;
  setUser: (user: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: typeof localStorage !== 'undefined' ? localStorage.getItem('user') : null,
  setUser: (user) => set(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('user', user);
    }

    return { user: user };
  })
}))