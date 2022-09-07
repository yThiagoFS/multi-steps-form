import * as SC from "./styles"
import { useState, useEffect } from "react"
import { Theme } from "../../components/Theme"
import { useNavigate } from "react-router-dom"
import { useForm, FormActions } from "../../contexts/FormContext"

export const FirstStep = () => {
    const { state, dispatch } = useForm()
    const [nameInput, setNameInput] = useState(state.name)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({type: FormActions.setName, payload: nameInput})
    }, [nameInput])
    
    const handleNextStep = () => {
        navigate('/step2')
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
                        value={nameInput}
                        onChange={e => setNameInput(e.target.value)}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </SC.Container>
        </Theme>
    )
}