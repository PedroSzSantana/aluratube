import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getVideos } from "../../assets/api"
import { StyledTimeline } from "./StyledTimeline"
import playlist from "../../playlist.json"

export const Timeline = ()=>{
    const [playlists, setPlaylists] = useState(playlist)
    const playlistsName = Object.keys(playlists)
    const SearchValue = useSelector(state => state.search.SearchValue)
    useEffect(()=>{
        getVideos(playlists, setPlaylists)
    },[])
    
    
    return(
        <StyledTimeline>
            { playlistsName.map((Nameplaylist)=> {
                const Videos = playlists[Nameplaylist]
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