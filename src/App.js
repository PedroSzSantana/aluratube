import { useState } from "react";
import { ThemeProvider } from "styled-components";
import  HomePage  from "./pages/Home";
import Dark from "./styles/themes/Dark";
import Light from "./styles/themes/Light";

function App() {
  const [theme, setTheme] = useState(Dark);
  
  const toggleTheme = ()=>{
    setTheme(theme === Light ? Dark : Light)
  }
  
  return (
    
    <ThemeProvider theme={theme}>
      <HomePage toggleTheme={toggleTheme}/>
    </ThemeProvider>
    
  );
}
export default App;
