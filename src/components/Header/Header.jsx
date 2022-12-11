import { StyledBanner, StyledMenu } from "./StyledHeader"
import config from "../../config.json"


export const Header = () => {
    return (
        <StyledMenu>
            <StyledBanner banner={config.banner} />
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