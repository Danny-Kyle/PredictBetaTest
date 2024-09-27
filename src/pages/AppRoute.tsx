import {Navigate, Route, Routes} from "react-router-dom"
import Layout from "@/layouts/layout"
import Prediction from "@/components/Prediction/Prediction"

const AppRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Layout><Prediction /></Layout>} />
            <Route path="*" element={<Navigate to="/" /> } />
        </Routes>
    )
}

export default AppRoutes