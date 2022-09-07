import { Action } from "../types/Action"
import { State } from "../types/State"
export type ContextType = {
    state: State,
    dispatch: (action: Action) => void
}