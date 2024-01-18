// store.js
import { create } from "zustand";

const useStore = create((set) => ({
  isMatch: false,
  setIsMatch: (isMatch) => set(() => ({ isMatch })),
  currentStoryIndex: 0,
  storyImages: {},
  setCurrentStoryIndex: (index) => set(() => ({ currentStoryIndex: index })),
  setStoryImage: (index, imageSrc) =>
    set((state) => ({
      storyImages: { ...state.storyImages, [index]: imageSrc },
    })),
}));

export default useStore;
