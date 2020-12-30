import { ActionContext } from "vuex"

import { Session } from "@supabase/supabase-js"

import { supabase } from "../supabase"

import { RootState } from "./store"
import { createVuexHook } from "./utils/create-hook"

const defaultState = {
  session: supabase.auth.session(),
}

export type AppState = typeof defaultState

export const AppModule = {
  name: "app",
  namespaced: true,

  state: (): AppState => defaultState,

  getters: {
    user: (state: AppState) => state.session?.user ?? null,
  },

  mutations: {
    updateSession(store: AppState, session: Session | null): void {
      store.session = session
    },
  },

  actions: {
    async login(
      { state, commit }: ActionContext<AppState, RootState>,
      { email, password }: { email: string; password: string },
    ) {
      const { data: session, error } = await supabase.auth.signIn({
        email,
        password,
      })

      if (error != null) {
        // eslint-disable-next-line no-console
        return console.error(error)
      }

      commit("updateSession", session)
    },

    async loginGitHub({ state, commit }: ActionContext<AppState, RootState>) {
      const { data: session, error } = await supabase.auth.signIn({
        provider: "github",
      })

      if (error != null) {
        // eslint-disable-next-line no-console
        return console.error(error)
      }

      commit("updateSession", session)
    },

    async register(
      { state, commit }: ActionContext<AppState, RootState>,
      { email, password }: { email: string; password: string },
    ) {
      const { data: session, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error != null) {
        // eslint-disable-next-line no-console
        return console.error(error)
      }

      commit("updateSession", session)
    },
  },
} as const

export const useApp = createVuexHook(AppModule)
