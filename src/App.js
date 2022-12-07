import { ThemeProvider } from "styled-components";
import  HomePage  from "./pages/Home";

function App() {
  const themactived = {}
  return (
    <ThemeProvider theme={themactived}>
      <HomePage/>
    </ThemeProvider>
    
  );
}
export default App;
