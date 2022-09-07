import { createContext, useContext, useReducer, ReactNode } from "react"
import { State } from "../types/State"
import { Action } from "../types/Action"
import { ContextType } from "../types/ContextType"

interface FormProviderProps {
    children: ReactNode
}

const FormContext = createContext<ContextType | undefined>(undefined)

const initialState: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}

export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGitHub
}

const formReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload }

        case FormActions.setName:
            return { ...state, name: action.payload }

        case FormActions.setLevel:
            return { ...state, level: action.payload }

        case FormActions.setEmail:
            return { ...state, email: action.payload }


        case FormActions.setGitHub:
            return { ...state, github: action.payload }

        default:
            return state
    }
}

export const FormProvider = ({ children }: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialState)
    const value = { state, dispatch }
    return (

        <FormContext.Provider value={value} >
            {children}
        </FormContext.Provider >
    )
}

export const useForm = () => {
    const context = useContext(FormContext)
    if (context === undefined) {
        throw new Error('Impossível acessar contexto')
    }
    return context
}