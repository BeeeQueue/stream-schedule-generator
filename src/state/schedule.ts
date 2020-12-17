import { Module } from "vuex"

import { Weekday } from "../types"

import type { RootState } from "./store"

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
  days: [] as Day[],
}

export type ScheduleState = typeof defaultState

export const ScheduleModule: Module<ScheduleState, RootState> = {
  namespaced: true,

  state: () => defaultState,

  mutations: {
    setDays(store, days: Day[]): void {
      store.days = days
    },
  },
}
