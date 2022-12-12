import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { StyledInput } from "./StyleInputs"

export const InputsUi = ({formCadastro, setThumbnail}) => {

    return (
        <StyledInput>
            <TextField
                error={formCadastro.touched.title && formCadastro.erro.title}
                helperText={formCadastro.touched.title && formCadastro.erro.title === true ? "Por favor preencha o campo do titulo" : ""}
                id="filled-basic"
                label="Titulo"
                variant="filled"
                name="title"
                onBlur={formCadastro.handleBlur}
                onChange={formCadastro.handleChange}
                value={formCadastro.values.title}
            />
            <TextField
                error={formCadastro.touched.url && formCadastro.erro.url}
                helperText={formCadastro.touched.url && formCadastro.erro.url === true ? "Preencha com uma URL do youtube" : ""}
                id="filled-basic"
                label="URL"
                variant="filled"
                name="url"
                onChange={(e) => {
                    formCadastro.handleChange(e)
                    setThumbnail(e.target.value)
                }}
                onBlur={formCadastro.handleBlur}
                value={formCadastro.values.url} />
            <div>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Playlist</InputLabel>
                    <Select
                        name="playlist"
                        value={formCadastro.values.playlist}
                        onChange={formCadastro.handleChange}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    >
                        <MenuItem value="jogos">Jogos</MenuItem>
                        <MenuItem value="front-end">Front-End</MenuItem>
                        <MenuItem value="back-end">Back-End</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </StyledInput>
    )
}