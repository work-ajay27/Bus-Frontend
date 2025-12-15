import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/SignupPage.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SearchBar" element={<SearchBar />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
