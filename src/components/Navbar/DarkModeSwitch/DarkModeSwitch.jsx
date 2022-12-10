import { useState } from "react"
import Switch from "react-switch"


export const DarkModeSwitch = ({toggleTheme})=> {
    const [checked, setChecked] = useState(false)
    
    const CheckedSwitch = ()=>{
      setChecked(checked === false ? true : false)
    }
    return(
        <Switch
        onChange={()=>{toggleTheme();CheckedSwitch()}}
        checked={checked}
        checkedIcon={true}
        uncheckedIcon={true}
        height={25}
        width={45}
        handleDiameter={20}
        onColor={'#333333'}
        offColor={'#333333'}
      />
    )
}