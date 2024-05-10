import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}>
          <Route path=":id" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
