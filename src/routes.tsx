import  { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

const RouteElement = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <Login/>} path="/" index/>
                <Route element={ <Home/> } path="/home"/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteElement;