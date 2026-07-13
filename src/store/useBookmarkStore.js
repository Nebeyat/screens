import { create } from 'zustand';
import { setItems, removeItem, getItems } from '../utils/storage';

const useBookmarkStore = create((set, get) => ({
    bookmarks: [],

    addBookmark: async (bookmark) => {
        const updatedBookmarks = [...get().bookmarks, bookmark];
        set({ bookmarks: updatedBookmarks });
        await setItems('bookmarks', JSON.stringify(updatedBookmarks));
    },

    removeBookmark: async (bookmarkId) => {
        const updatedBookmarks = get().bookmarks.filter((b) => b.id !== bookmarkId);
        set({ bookmarks: updatedBookmarks });
        await setItems('bookmarks', JSON.stringify(updatedBookmarks));
    },
}));

export default useBookmarkStore;