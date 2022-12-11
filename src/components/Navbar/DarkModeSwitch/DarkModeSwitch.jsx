import { useState } from "react"
import Switch from "react-switch"
import styled from "styled-components";


export const DarkModeSwitch = ({toggleTheme})=> {
    const [checked, setChecked] = useState(false)
    const CheckedSwitch = ()=>{
      setChecked(checked === false ? true : false)
    }
    return(
        <Switch
        onChange={()=>{toggleTheme();CheckedSwitch()}}
        checked={checked}
        checkedIcon={<div>🌙</div>}
        uncheckedIcon={<div>☀️</div>}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={25}
        width={45}
        handleDiameter={20}
        onColor={'#333333'}
        offColor={'#333333'}
      />
    )
}