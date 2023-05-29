import "./App.css";
import "./style/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Video from "./pages/Video";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="video/:id" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
