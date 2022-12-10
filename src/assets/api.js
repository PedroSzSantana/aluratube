import { createClient } from "@supabase/supabase-js"

const PROJECT_URL = "https://qhgofqnzpsffrcwthczt.supabase.co"
const PROJECT_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoZ29mcW56cHNmZnJjd3RoY3p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA2MDg3NjgsImV4cCI6MTk4NjE4NDc2OH0.Tz-cnYp-cK1wBKMzNmnPD5QMNaIs9eejb2VeOLs3vT4"
const supabase = createClient(PROJECT_URL, PROJECT_KEY)

export const pushVideos = (formCadastro,getTumbinail) =>{
    supabase.from("video").insert({
        title: formCadastro.values.title,
        url: formCadastro.values.url,
        thumb: getTumbinail(formCadastro.values.url),
        playlist: formCadastro.values.playlist
    })
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
}


export const getVideos = (playlists, setstate)=>{
    supabase.from("video").select("*")
    .then((response)=>{
         response.data.forEach((video)=>{
            playlists[video.playlist].push(video)
        })
        setstate(playlists);
    })
    .catch((error)=>{
        console.log(error);
    })
}