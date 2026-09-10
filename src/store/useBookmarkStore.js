import { create } from 'zustand';
import { setItems, getItems } from '../utils/storage';

const useBookmarkStore = create((set, get) => ({
  bookmarks: [],

  setBookmarks: (bookmarks) => set({ bookmarks }),

  loadBookmarks: async () => {
    try {
      const storedBookmarks = await getItems("bookmarks");
      if (storedBookmarks) {
        set({ bookmarks: JSON.parse(storedBookmarks) });
      }
    } catch (error) {
      console.error("Error loading bookmarks:", error);
    }
  },

  isBookmarked: (articleId) => {
    return get().bookmarks.some((article) => article._id === articleId);
  },

  addBookmark: async (article) => {
    const exists = get().bookmarks.some((b) => b._id === article._id);
    if (exists) return;

    const updatedBookmarks = [...get().bookmarks, article];
    set({ bookmarks: updatedBookmarks });
    await setItems('bookmarks', JSON.stringify(updatedBookmarks));
  },

  // Accepts the full item object: removeBookmark(item)
  removeBookmark: async (article) => {
    const updatedBookmarks = get().bookmarks.filter(
      (item) => item._id !== article._id
    );
    set({ bookmarks: updatedBookmarks });
    await setItems('bookmarks', JSON.stringify(updatedBookmarks));
  },
}));

export default useBookmarkStore;