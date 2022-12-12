import { useState, useEffect } from "react"
import { pushVideos } from "../../assets/services"
import { InputsUi } from "./InputsUI/Inputs"
import { StyledRegisterVideo } from "./StyledRegisterVideo"

const getTumbinail = (url) => {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}

const useForm = () => {
    const [values, setValues] = useState({ title: "", url: "", playlist: "jogos" })

    return {
        values,
        handleChange: (e) => {
            const value = e.target.value;
            const name = e.target.name
            const newValues = {
                ...values,
                [name]: value,
            }
            setValues(newValues)
        },
        clearForm: () => {
            setValues({})
        },
    }
}
const validate = (values) => {
    const erro = {}
    if (!values.url.includes("www.youtube.com")) {
        erro.url = true
    }else erro.url = false

    if (values.title === "") {
        erro.title = true
    }else erro.title = false

    return erro
}

export const RegisterVideo = () => {
    const [erro, setErro] = useState({})
    const [VisibleRegister, setVisibleRegister] = useState(false);
    const [Thumbnail, setThumbnail] = useState('')
    const formCadastro = useForm()

    const validateValues = (values) => {
        setErro(validate(values))
    }
    useEffect(() =>{
        validateValues(formCadastro.values)

    },[formCadastro.values])
    const Submit = (e) => {
        e.preventDefault()
        if(erro.url === false && erro.title === false){
            setVisibleRegister(false);
            pushVideos(formCadastro, getTumbinail)
            formCadastro.clearForm();
            window.location.reload();
        } 
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
                            onClick={() => { setVisibleRegister(false) }}>
                            X
                        </button>

                        <InputsUi formCadastro={formCadastro} setThumbnail={setThumbnail} erro={erro}/>

                        <img src={getTumbinail(Thumbnail)} alt="" />

                        <button type="submit">Cadastrar</button>
                    </div>

                </form>)
                : null
            }
        </StyledRegisterVideo>
    )
}

