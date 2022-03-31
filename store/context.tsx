import { createContext, useReducer, ReactNode, Dispatch } from 'react'
import { reducer, initialState } from './reducer'
import { AppAction, AppState } from './types'

export const AppContext = createContext<{ state: AppState; dispatch: Dispatch<AppAction> }>({
    state: initialState,
    dispatch: () => undefined
})

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}
