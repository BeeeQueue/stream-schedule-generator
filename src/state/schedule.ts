import { createVuexHook } from "./utils/create-hook"

type Day = {
  datetime: Date
  title: string
  subtitle: string | null
}

const defaultState = {
  days: [] as Day[],
}

export type ScheduleState = typeof defaultState

export const ScheduleModule = {
  name: "schedule",
  namespaced: true,

  state: (): ScheduleState => defaultState,

  mutations: {
    setDays(store: ScheduleState, days: Day[]): void {
      store.days = days
    },
  },
} as const

export const useSchedule = createVuexHook(ScheduleModule)
