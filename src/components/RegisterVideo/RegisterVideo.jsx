import { useState } from "react"
import { pushVideos } from "../../assets/services"
import { StyledRegisterVideo } from "./StyledRegisterVideo"

const getTumbinail = (url) => {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}

const useForm = () => {
    const [values, setValues] = useState({})

    return {
        values,
        handleChange: (e) => {
            const value = e.target.value;
            const name = e.target.name
            setValues({
                ...values,
                [name]: value,
            })
        },
        clearForm: () => {
            setValues({})
        }
    }
}

export const RegisterVideo = () => {

    const [VisibleRegister, setVisibleRegister] = useState(false);
    const [Thumbnail, setThumbnail] = useState('')

    const formCadastro = useForm()
    const Submit = () => {
        window.location.reload()
        setVisibleRegister(false);

        pushVideos(formCadastro, getTumbinail)
        formCadastro.clearForm();
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

                        <input type="text" placeholder="Titulo do Video"
                            name="title"
                            onChange={formCadastro.handleChange}
                            value={formCadastro.values.title} />

                        <input type="text" placeholder="URL"
                            name="url"
                            onChange={(e) => {
                                formCadastro.handleChange(e)
                                setThumbnail(e.target.value)
                            }}
                            value={formCadastro.values.url} />

                        <button type="submit">Cadastrar</button>

                        <select name="playlist" onChange={formCadastro.handleChange}>
                            <option value="jogos">Jogos</option>
                            <option value="back-end">Back-End</option>
                            <option value="front-end">Front-End</option>
                        </select>

                        <img src={getTumbinail(Thumbnail)} alt="" />

                    </div>

                </form>)
                : null
            }
        </StyledRegisterVideo>
    )
}