import { BrowserRouter, Routes, Route } from "react-router-dom";

import {MainLoginPage} from "./pages/MainLoginPage";
import {RegisternewuserPage} from "./pages/RegisternewuserPage";
import {AdminLoginPage} from "./pages/AdminLoginPage";
import {AdminMainPage} from "./pages/AdminMainPage";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLoginPage />} />
        <Route path="/Registernewuser" element={<RegisternewuserPage />} /> 
        <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
        <Route path="/AdminMainPage" element={<AdminMainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
