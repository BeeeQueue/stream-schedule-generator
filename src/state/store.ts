import { createLogger, createStore, Store } from "vuex"

import { ScheduleModule, ScheduleState } from "./schedule"

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

const isNotNilOrBoolean = <T>(obj: T | null | undefined | boolean): obj is T =>
  typeof obj !== "boolean" || obj != null

export type RootState = {
  schedule: ScheduleState
}

const storeOptions = {
  strict: import.meta.env.DEV,
  modules: {
    [ScheduleModule.name]: ScheduleModule,
  },
  plugins: [import.meta.env.DEV && createLogger()].filter(isNotNilOrBoolean),
}

export const store = createStore<RootState>(storeOptions)

if (import.meta.hot) {
  import.meta.hot!.acceptDeps(["./schedule"], async () => {
    const newSchedule = await import("./schedule")

    store.hotUpdate({
      modules: {
        [ScheduleModule.name]: newSchedule as any,
      },
    })
  })
}
