import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set, get) => ({
    SID: null,
    logIn: (payload) => set((state) => ({ SID: payload })),
    logOut: () => set((state) => ({ SID: null }))
});

store = devtools(store);
store = persist(store, { name: "SID", getStorage: () => localStorage });

const useAuth = create(store);

export default useAuth