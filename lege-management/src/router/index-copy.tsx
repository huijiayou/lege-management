import {lazy} from 'react'
import App from '../App'
//import Home from '../views/Home'
//import About from '../views/About'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
const About = lazy(()=>import('../views/About'))
const Home = lazy(()=>import('../views/Home'))
const baseRouter = () => (
    <BrowserRouter>
        <Routes>
                <Route path='/' element={<App/>}>
                        <Route path='/' element={<Navigate to='/home'/>}></Route>
                        <Route path='/home' element={<Home/>}></Route>
                        <Route path='/about' element={<About/>}></Route>
                </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter