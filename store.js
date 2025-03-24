"use client";

import { create } from "zustand";
import { account, ID } from "./app/appwrite";

const useStore = create((set) => ({
  user: null,
  logout: async () => {
    await account.deleteSession("current");
    set({ user: null });
  },
  login: async (email, password) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      //   setLoggedInUser(await account.get());
      set({ user: await account.get() });
    } catch (error) {
      console.error(error);
    }
  },
  register: async (email, password) => {
    try {
      await account.create(ID.unique(), email, password);
      login(email, password);
      //   router.push("/");
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useStore;
