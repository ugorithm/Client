import create from "zustand";
import { persist } from 'zustand/middleware'

const useAuthStore = create(
    persist(
        (set, get) => ({
    refreshKey: null,
    loggedIn: false,
    create: (userRefreshKey) => set((state) => ({ refreshKey: userRefreshKey, loggedIn: true }))
})))


export default useAuthStore;