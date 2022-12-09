import { createClient } from "@supabase/supabase-js"
import { useState } from "react"
import { StyledRegisterVideo } from "./StyledRegisterVideo"

const getTumbinail = (url) => {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}

const useForm = ()=>{
    const [values, setValues] = useState({ title: '', url: '' })
    return{
        values,
        handleChange: (e) => {
            const value = e.target.value;
            const name = e.target.name
            setValues({
                ...values,
                [name]: value,
            })},
        clearForm: ()=>{
            setValues({})
        }
    }
}
const PROJECT_URL = "https://qhgofqnzpsffrcwthczt.supabase.co"
const PROJECT_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoZ29mcW56cHNmZnJjd3RoY3p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA2MDg3NjgsImV4cCI6MTk4NjE4NDc2OH0.Tz-cnYp-cK1wBKMzNmnPD5QMNaIs9eejb2VeOLs3vT4"
const supabase = createClient(PROJECT_URL, PROJECT_KEY)


export const RegisterVideo = () => {
    const [VisibleRegister, setVisibleRegister] = useState(false);
    
    const formCadastro = useForm()
    const Submit = (e)=>{
        e.preventDefault();
        setVisibleRegister(false);
        formCadastro.clearForm();

        supabase.from("video").insert({
            title: formCadastro.values.title,
            url: formCadastro.values.url,
            thumb: getTumbinail(formCadastro.values.url),
            playlist: "jogos",
        })
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => { setVisibleRegister(true) }}>
                +
            </button>
            {VisibleRegister ?
                (<form onSubmit={Submit}>
                    <div>
                        <button type="button" className="close-modal"
                         onClick={() => { setVisibleRegister(false);}}>
                            X
                        </button>
                        <input type="text" placeholder="Titulo do Video"
                            name="title"
                            onChange={formCadastro.handleChange}
                            value={formCadastro.values.title} />

                        <input type="text" placeholder="URL"
                            name="url"
                            onChange={formCadastro.handleChange}
                            value={formCadastro.values.url} />
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>)
                : null
            }
        </StyledRegisterVideo>
    )
}