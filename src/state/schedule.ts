import { Weekday } from "../types"

import { createVuexHook } from "./create-hook"

type SingularNumber = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

type Day = {
  weekday: Weekday
  utcTime: `${
    | "0"
    | "1"
    | "2"}${SingularNumber}:${SingularNumber}${SingularNumber}`
  title: string
  subtitle: string | null
}

const defaultState = {
  days: [] as Weekday[],
}

export type ScheduleState = typeof defaultState

export const ScheduleModule = {
  name: "schedule",
  namespaced: true,

  state: (): ScheduleState => defaultState,

  mutations: {
    setDays(store: ScheduleState, days: Weekday[]): void {
      store.days = days
    },
  },
} as const

export const useSchedule = createVuexHook(ScheduleModule)
