import * as SC from "./styles"
import { useEffect } from "react"
import { Theme } from "../../components/Theme"
import { useForm, FormActions } from "../../contexts/FormContext"
import { useNavigate } from "react-router-dom"
import { SelectOption } from "../../components/SelectOption"

export const SecondStep = () => {
    const { state, dispatch } = useForm()
    const navigation = useNavigate()

    useEffect(() => {
        if(!state.name) navigation('/')
        dispatch({ type: FormActions.setCurrentStep, payload: 2 })
    }, [])

    const handleNextStep = () => {
        if(!state.name){
            return
        }
        navigation('/step3')
    }
    
    const setLevel = (level: number) => {
        dispatch({ type: FormActions.setLevel, payload:level })
    }


    return (
        <Theme>
            <SC.Container>
                <p>Passo 2 de 3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que condiz com o seu estado atual profissionalmente:</p>
                <hr />
                <SelectOption 
                title="Sou Iniciante"
                description="Comecei a programar há menos de 2 anos."
                emoji="🙂"
                selected={state.level === 0 }
                onClick={() => setLevel(0)}
                />
                <SelectOption 
                title="Sou programador"
                description="Já programo há mais de 2 anos."
                emoji="😎"
                selected={state.level === 1}
                onClick={() => setLevel(1)}
                />
                <button onClick={() => navigation('/')}>Voltar</button>
                <button onClick={handleNextStep} style={{marginLeft:'30px'}}>Próximo</button>
            </SC.Container>
        </Theme>
    )
}