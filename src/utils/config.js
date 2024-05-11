import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useNavStore = create((set) => ({
	navId: 'home',
	updateNavId: (id) => set({ navId: id }),
}));

export const useCallNowStore = create((set) => ({
	showPopup: false,
	updateshowPopup: (bool) => set({ showPopup: bool }),
}));

export const useContainerWidthStore = create((set) => ({
	width: null,
	updateWidth: (width) => set(() => ({ width: width })),
}));

export const useAboutWidthStore = create((set) => ({
	width: null,
	updateWidth: (width) => set(() => ({ width: width })),
}));

export const useValuesWidthStore = create((set) => ({
	width: null,
	updateWidth: (width) => set(() => ({ width: width })),
}));
