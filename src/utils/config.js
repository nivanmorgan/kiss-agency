import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const navigations = [
  'home',
  'about',
  'values',
  'services',
  'digital-solutions',
  'contact',
];

export const useNavStore = create((set) => ({
  navId: 'home',
  updateNavId: (id) => set({ navId: id }),
}));

// export const useNavStore = create(
//   persist(
//     (set, get) => ({
//       navId: 'home',
//       updateNavId: (id) => set({ navId: id }),
//     }),
//     {
//       name: 'kiss-agency-nav-data',
//       storage: createJSONStorage(() => sessionStorage),
//     }
//   )
// );

// function BearCounter() {
// 	const bears = useStore((state) => state.bears);
// 	return <h1>{bears} around here...</h1>;
// }

// function Controls() {
// 	const increasePopulation = useStore((state) => state.increasePopulation);
// 	return <button onClick={increasePopulation}>one up</button>;
// }
