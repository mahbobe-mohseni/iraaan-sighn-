import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Blog" Component={Blog} />
        <Route path="/Products" Component={Products} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
