import { useState } from "react"
import { StyledRegisterVideo } from "./StyledRegisterVideo"

const useForm = ()=>{
    const [values, setValues] = useState({ title: '', url: '' })
    return{
        values,
        handleChange: (e) => {
            let value = e.target.value;
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
export const RegisterVideo = () => {
    const [VisibleRegister, setVisibleRegister] = useState(false);
    
    const formCadastro = useForm()
    const Submit = (e)=>{
        e.preventDefault();
        setVisibleRegister(false);
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