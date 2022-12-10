import { CSSReset } from "../styles/CSSReset"
import { Header } from "../components/Header/Header"
import { Navbar } from "../components/Navbar/Navbar"
import { Timeline } from "../components/Timeline/Timeline"
import config from "../config.json"
import { StyleScrollbar } from "../styles/Scrollbar"

const HomePage = ({toggleTheme})=>{

    return(
        <>
            <CSSReset/>
            <StyleScrollbar/>
            <Navbar toggleTheme={toggleTheme}/>
            <Header config={config}/>
            <Timeline/>
        </>
    )
}
export default HomePage