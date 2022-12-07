import { CSSReset } from "../assets/CSSReset"
import { Header } from "../components/Header/Header"
import { Navbar } from "../components/Navbar/Navbar"
import { Timeline } from "../components/Timeline/Timeline"
import config from "../config.json"

const HomePage = ()=>{

    return(
        <>
            <CSSReset/>
            <Navbar/>
            <Header config={config}/>
            <Timeline config={config}/>
        </>
    )
}
export default HomePage