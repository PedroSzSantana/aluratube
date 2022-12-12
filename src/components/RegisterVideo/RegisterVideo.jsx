import { useState, useEffect } from "react"
import { pushVideos } from "../../assets/services"
import { InputsUi } from "./InputsUI/Inputs"
import { StyledRegisterVideo } from "./StyledRegisterVideo"

const getTumbinail = (url) => {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}

const useForm = () => {
    const [values, setValues] = useState({ title: "", url: "", playlist: "jogos" })
    const [touched, setTouchedFields] = useState({});
    const [erro, setErro] = useState({})

    function handleBlur(event) {
        const fieldName = event.target.name;
        console.log(fieldName);
        setTouchedFields({
            ...touched,
            [fieldName]: true,
        })
    }
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues)
    }
    useEffect(() => {
        validateValues(values)
    }, [values])

    const validateValues = (values) => {
            setErro(validate(values))
        }
    const validate = (values) => {
        const erro = {}
        if (!values.url.includes("www.youtube.com/watch?v=")) {
            erro.url = true
        } else erro.url = false

        if (values.title === "") {
            erro.title = true
        } else erro.title = false

        return erro
    }
    return {
        values,
        handleChange,
        clearForm: () => {
            setValues({})
        },
        erro,
        handleBlur,
        touched
    }
}
export const RegisterVideo = () => {

    
    const [VisibleRegister, setVisibleRegister] = useState(false);
    const [Thumbnail, setThumbnail] = useState('')
    const formCadastro = useForm()

    
    
    const Submit = (e) => {
        e.preventDefault()
        if (formCadastro.erro.url === false && formCadastro.erro.title === false) {
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

                        <InputsUi formCadastro={formCadastro} setThumbnail={setThumbnail}/>

                        <img src={getTumbinail(Thumbnail)} alt="" />

                        <button type="submit">Cadastrar</button>
                    </div>

                </form>)
                : null
            }
        </StyledRegisterVideo>
    )
}