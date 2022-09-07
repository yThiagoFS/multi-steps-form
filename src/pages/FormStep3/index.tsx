import * as SC from "./styles"
import { Theme } from "../../components/Theme"
import { useEffect } from "react"
import { useForm, FormActions } from "../../contexts/FormContext"
import { useNavigate } from "react-router-dom"
export const ThirdStep = () => {
    const { state, dispatch } = useForm()
    const navigation = useNavigate()
    useEffect(() => {
        if(!state.name) navigation('/')
        dispatch({ type:FormActions.setCurrentStep, payload: 3 })
    }, [])
    const handleData = () => {
        if(!state.email && !state.github) return alert('Preencha os campos.')
        console.log(state)
    }
    return(
        <Theme>
            <SC.Container>
            <p>Passo 3</p>
            <h1>Legal {state.name}, onde te achamos? </h1>
            <p>Preencha os campos abaixo com seus dados de contato.</p>
            <hr />

            <label>
                Qual seu email?
                <input
                type="email"
                value={state.email}
                onChange={e => dispatch({ type: FormActions.setEmail, payload: e.target.value })} />
            </label>
            <label>
                E o seu Github?
                <input type="url"
                value={state.github}
                onChange={e => dispatch({ type: FormActions.setGitHub, payload: e.target.value })}/>
            </label>
            <button onClick={() => navigation('/step2')}>Voltar</button>
            <button 
            onClick={handleData}
            style={{marginLeft: '30px'}}>Finalizar</button>

            </SC.Container>
        </Theme>
    )
}