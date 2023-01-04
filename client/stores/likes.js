import create from "zustand";
import { persist, devtools } from "zustand/middleware";

let store = (set, get) => ({
    likes: 1,
    addLike: () => set((state) => ({ likes: state.likes + 1 }))
});

store = devtools(store);
store = persist(store, { name: "likes", getStorage: () => sessionStorage });

const useLikes = create(store);

export default useLikes