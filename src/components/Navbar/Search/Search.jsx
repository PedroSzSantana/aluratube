import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchValue } from "../../../assets/redux/SearchSlice";
import { StyledSearch } from "./StyledSearch";

const Search = ()=>{
    const dispath = useDispatch()
    const [SearchValue, setSearchValue] = useState("")
    
    useEffect(()=>{
        dispath(getSearchValue(SearchValue))
    },[SearchValue])

    return (
        <StyledSearch>
            <input type="text" onChange={(e) => setSearchValue(e.target.value)} value={SearchValue} placeholder="Pesquisar"/>
            <button>
                🔎
            </button>
        </StyledSearch>
    )
}
export default Search