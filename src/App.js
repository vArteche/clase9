import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error from "./pages/Error";
import Galeria from "./pages/Galeria";
import Home from "./pages/Home";
import Productos from "./pages/Productos";


function App (){
return(
    <BrowserRouter>
    <nav>barra de navegacion</nav>
    <Routes>
        <Route path="/" element={<Home/>}>
            
        </Route>
        <Route path="galeria" element={<Galeria/>}></Route>
        <Route path="productos" element={<Productos/>}></Route>
        <Route path="*" element={<Error/>}></Route>
    </Routes>
    <footer>footer</footer>
    </BrowserRouter>
)
}
export default App;