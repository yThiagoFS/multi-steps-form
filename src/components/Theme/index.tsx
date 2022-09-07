import * as SC from "./styles"
import { ReactNode } from "react"
import { Header } from "../Header"

interface ThemeProps {
    children: ReactNode
}

export const Theme = ({ children }: ThemeProps) => {
    return (
        <SC.Container>
            <SC.Area>
                <Header />

                <SC.Steps>
                    <SC.SideBar>

                    </SC.SideBar>
                    <SC.Page>
                        { children }
                    </SC.Page>
                </SC.Steps>
            </SC.Area>
        </SC.Container>
    )
}