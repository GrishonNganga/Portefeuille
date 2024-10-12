// store.ts
import { create } from 'zustand';

interface ScrollState {
    scrollYProgress: number; // To store scroll progress
    setScrollYProgress: (value: number) => void; // Action to set scroll progress
}

// Create Zustand store
const useScrollStore = create<ScrollState>((set) => ({
    scrollYProgress: 0, // Initial value
    setScrollYProgress: (value) => set({ scrollYProgress: value }),
}));

export default useScrollStore;
