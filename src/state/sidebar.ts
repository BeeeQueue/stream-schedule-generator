import { createVuexHook } from "./utils/create-hook"

export enum SidebarTab {
  Schedule = "Schedule",
  Style = "Style",
  Artwork = "Artwork",
}

const defaultState = {
  width: 400,
  activeTab: SidebarTab.Schedule,
}

export type ScheduleState = typeof defaultState

export const SidebarModule = {
  name: "sidebar",
  namespaced: true,

  state: (): ScheduleState => defaultState,

  mutations: {
    switchTab(store: ScheduleState, tab: SidebarTab): void {
      store.activeTab = tab
    },
  },
} as const

export const useSidebar = createVuexHook(SidebarModule)
