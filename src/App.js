import { useState } from "react";
import { ThemeProvider } from "styled-components";
import  HomePage  from "./pages/Home";
import Dark from "./styles/themes/Dark";
import Light from "./styles/themes/Light";

function App() {
  const [theme, setTheme] = useState(Dark);
  const toggleTheme = ()=>{
    setTheme(theme.title === 'Light' ? Dark : Light)
  }
  return (
    
    <ThemeProvider theme={theme}>
      <HomePage/>
    </ThemeProvider>
    
  );
}
export default App;
