import config from "../../config.json"
import { StyledMenu } from "./StyledHeader"



export const Header = ()=>{
    return(
        <StyledMenu>
        Banner
        <section className="user-info">
            <img src={`https://github.com/${config.github}.png`} alt="" />
            <div>
                <h2>{config.name}</h2>
                <p>{config.job}</p>  
            </div>
            
        </section>
        
        </StyledMenu>
    )
}