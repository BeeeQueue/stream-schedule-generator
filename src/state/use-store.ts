import type { InjectionKey } from "vue"
import { Store, useStore as originalUseStore } from "vuex"

import type { RootState } from "./store"

export const key: InjectionKey<Store<RootState>> = Symbol()
export const useStore = () => originalUseStore(key)
