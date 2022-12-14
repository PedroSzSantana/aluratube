import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { RegisterVideo } from "./components/RegisterVideo/RegisterVideo";
import  HomePage  from "./pages/Home";
import Dark from "./styles/themes/Dark";
import Light from "./styles/themes/Light";

function App() {
  const [theme, setTheme] = useState(Light);
  
  const toggleTheme = ()=>{
    setTheme(theme === Light ? Dark : Light)
  }
  return (
    <ThemeProvider theme={theme}>
      <HomePage toggleTheme={toggleTheme}/>
      <RegisterVideo/>
    </ThemeProvider>
    
  );
}
export default App;
