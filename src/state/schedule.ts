import { createVuexHook } from "./create-hook"

type SingularNumber = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

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
