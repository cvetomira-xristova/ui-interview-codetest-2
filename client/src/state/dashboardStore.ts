import { create } from "zustand";

interface DashboardState {
  // State
  currentSpaceId: string | null;

  // Actions
  setSpace: (spaceId: string | null) => void;
  reset: () => void;
}

const initialState = {
  currentSpaceId: 'nasa-1',
};

export const useDashboardStore = create<DashboardState>((set) => ({
  ...initialState,

  setSpace: (spaceId) => set({ currentSpaceId: spaceId }),
  reset: () => set(initialState),
}));

