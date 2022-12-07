import { useSelector } from "react-redux"
import { StyledTimeline } from "./StyledTimeline"

export const Timeline = ({config})=>{
    const playlistsName = Object.keys(config.playlists)
    const SearchValue = useSelector(state => state.search.SearchValue)
    return(
        <StyledTimeline>
            { playlistsName.map((Nameplaylist)=> {
                const Videos = config.playlists[Nameplaylist]

                return(
                    <section key={Nameplaylist}>
                        <h2>{Nameplaylist}</h2>
                        <div>
                            {Videos.filter((video)=>{
                                const titleNormalized = video.title.toLowerCase();
                                const SearchValueNormalized = SearchValue.toLowerCase();

                                return titleNormalized.includes(SearchValueNormalized)
                            }).map((video) =>{
                                return(
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} alt="" />
                                        <span>{video.title}</span>
                                    </a>
                                    )
                                })};
                        </div>
                    </section>
                )
                
            })}
        </StyledTimeline>
    )
}