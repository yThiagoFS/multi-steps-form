import * as SC from "./styles"
import { Theme } from "../../components/Theme"
import { useEffect } from "react"
import { useForm, FormActions } from "../../contexts/FormContext"
export const ThirdStep = () => {
    const { state, dispatch } = useForm()
    
    useEffect(() => {
        dispatch({ type:FormActions.setCurrentStep, payload: 3 })
    }, [])

    return(
        <Theme>
            
        </Theme>
    )
}