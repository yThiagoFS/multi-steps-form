import * as SC from "./styles"

interface SelectOptionProps {
    title:string
    description: string
    emoji:string
    selected:boolean
    onClick: () => void
}
export const SelectOption = ({ title, description, emoji, selected,onClick }:SelectOptionProps) => {
    return(
        <SC.Container 
        selected={selected}
        onClick={onClick}
        >
            <SC.Icon>{emoji}</SC.Icon>
            <SC.Info>
                <SC.Title>{title}</SC.Title>
                <SC.Description>{description}</SC.Description>
            </SC.Info>
        </SC.Container>
    )
}