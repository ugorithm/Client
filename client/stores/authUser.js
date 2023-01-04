import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set, get) => ({
    refreshKey: "0",
    loggedIn: false,
    logIn: (userData) => set((state) => ({ refreshKey: userData })),
    logOut: () => set((state) => ({ refreshKey: "0" }))
});

store = devtools(store);
store = persist(store, { name: "likes", getStorage: () => sessionStorage });

const useAuth = create(store);

export default useAuth