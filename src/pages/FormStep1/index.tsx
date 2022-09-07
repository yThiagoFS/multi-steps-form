import * as SC from "./styles"
import { ChangeEvent,useState, useEffect } from "react"
import { Theme } from "../../components/Theme"
import { useNavigate } from "react-router-dom"
import { useForm, FormActions } from "../../contexts/FormContext"

export const FirstStep = () => {
    const { state, dispatch } = useForm()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({type: FormActions.setCurrentStep, payload: 1})
    }, [])

    const handleNextStep = () => {
        if(state.name !== ''){
            navigate('/step2')
        } else {
            alert('Preencha o campo antes de continuar!')
        }
    }
    return (
        <Theme>
            <SC.Container>
                <p>Passo 1 de 3</p>
                <h1>Vamos começar com seu nome!</h1>
                <p>Preencha o campo abaixo com seu nome completo</p>
                <hr />
                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={e => dispatch({type: FormActions.setName, payload: e.target.value})}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </SC.Container>
        </Theme>
    )
}