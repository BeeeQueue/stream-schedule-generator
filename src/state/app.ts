import { ActionContext } from "vuex"

import { createClient, Session } from "@supabase/supabase-js"

import { RootState } from "./store"
import { createVuexHook } from "./utils/create-hook"

const supabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_PUBLIC_KEY as string,
)

const defaultState = {
  supabase: supabaseClient,
  session: supabaseClient.auth.session(),
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
      const { data: session, error } = await state.supabase.auth.signIn({
        email,
        password,
      })

      if (error != null) {
        // eslint-disable-next-line no-console
        return console.error(error)
      }

      commit("app/setUser", session)
    },
    async register(
      { state, commit }: ActionContext<AppState, RootState>,
      { email, password }: { email: string; password: string },
    ) {
      const { data: session, error } = await state.supabase.auth.signUp({
        email,
        password,
      })

      if (error != null) {
        // eslint-disable-next-line no-console
        return console.error(error)
      }

      commit("app/setUser", session)
    },
  },
} as const

export const useApp = createVuexHook(AppModule)
