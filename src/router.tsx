import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FirstStep } from "./pages/FormStep1"
import { SecondStep } from "./pages/FormStep2"
import { ThirdStep } from "./pages/FormStep3"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstStep />} />
                <Route path="/step2" element={<SecondStep />} />
                <Route path="/step3" element={<ThirdStep />} />
            </Routes>
        </BrowserRouter>
    )
}