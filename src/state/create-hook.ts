import type { DeepReadonly } from "utility-types"
import type { Commit, Dispatch, Module } from "vuex"

import type { RootState } from "./store"
import { useStore } from "./use-store"

type NamedModule = Module<any, any> & { name: string }

type Mutations<M extends NamedModule> = {
  [key in keyof M["mutations"]]: (
    // @ts-ignore: Broken keyof
    data: Parameters<M["mutations"][key]>[1],
  ) => void
}

const createMutations = <M extends NamedModule>(
  module: M,
  commit: Commit,
): Mutations<M> =>
  module.mutations
    ? Object.keys(module.mutations).reduce(
        (accum, name) => ({
          ...accum,
          [name]: (...params: unknown[]) =>
            commit(`${module.name}/${name}`, ...params),
        }),
        {} as Mutations<M>,
      )
    : ({} as Mutations<M>)

// TODO: check if actions can take more than one arg
type Actions<M extends NamedModule> = {
  // @ts-ignore: Broken keyof
  [key in keyof M["actions"]]: (data: Parameters<M["actions"][key]>[1]) => void
}

const createActions = <M extends NamedModule>(
  module: M,
  commit: Dispatch,
): Actions<M> =>
  module.actions
    ? Object.keys(module.actions).reduce(
        (accum, name) => ({
          ...accum,
          [name]: (...params: unknown[]) =>
            commit(`${module.name}/${name}`, ...params),
        }),
        {} as Actions<M>,
      )
    : ({} as Actions<M>)

type Hook<M extends NamedModule> = DeepReadonly<{
  state: M["state"] extends () => void ? ReturnType<M["state"]> : M["state"]
  mutations: Mutations<M>
  actions: Actions<M>
}>

export const createVuexHook = <M extends NamedModule>(
  module: M,
) => (): Hook<M> => {
  const { state, commit, dispatch } = useStore()

  return {
    state: state[(module.name as unknown) as keyof RootState] as any,
    mutations: createMutations(module, commit),
    actions: createActions(module, dispatch),
  }
}
