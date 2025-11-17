import { Header } from "../../components/Header/Header"
import { HeaderPerfil } from "../../components/HeaderPerfil/HeaderPerfil"
import { Footer } from "../../components/Footer/Footer"
import { Outlet } from "react-router-dom"


export const BaseHome = () => {
    return(
        <>
        <Header/>
        <main>
            <Outlet />
        </main>
        <Footer/>
        </>

    )
}


export const BasePerfil = () => {
    return(
        <>
        <HeaderPerfil/>
        <main>
            <Outlet />
        </main>
        <Footer/>
        </>

    )
}