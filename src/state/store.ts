import { InjectionKey } from "vue"
import { createStore, Store, useStore as originalUseStore } from "vuex"

import { ScheduleModule as schedule, ScheduleState } from "./schedule"

/* eslint-disable @typescript-eslint/consistent-type-definitions */
declare module "@vue/runtime-core" {
  // declare your own store states
  type State = {
    count: number
  }

  // @ts-ignore: provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
/* eslint-enable @typescript-eslint/consistent-type-definitions */

export type RootState = {
  schedule: ScheduleState
}

const storeOptions = {
  mutations: {
    testMutation: () => null,
    testMutation2: (state: RootState, cool: string) => null,
  },
  modules: {
    schedule,
  },
  strict: import.meta.env.DEV,
}

export const store = createStore<RootState>(storeOptions)
export const key: InjectionKey<Store<RootState>> = Symbol()

export const useStore = () => originalUseStore(key)
