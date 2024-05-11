import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { NotFound } from "./pages/NotFound/NotFound";
import { Nav } from "./components/Nav/Nav";
import { UserList } from "./pages/UserList/UserList";
import { User } from "./pages/User/User";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/userList/:userID" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* mozna tutaj dodać stopke */}
    </div>
  );
}

export default App;
