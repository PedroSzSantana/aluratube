import { StyledTimeline } from "./StyledTimeline"

export const Timeline = ({config})=>{
    const playlistsName = Object.keys(config.playlists)
    console.log(playlistsName)

    return(
        <StyledTimeline>
            
            { playlistsName.map((playlistName)=> {

                const Videos = config.playlists[playlistName]

                return(
                    <section>
                        <h2>{playlistsName}</h2>
                        <div>
                    {Videos.map((video)=>{
                    return (
                        <a href={video.url}>
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