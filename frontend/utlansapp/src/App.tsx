import { BrowserRouter, Routes, Route } from "react-router-dom";

import {MainLoginPage} from "./pages/MainLoginPage";
import {RegisternewuserPage} from "./pages/RegisternewuserPage";
import {AdminLoginPage} from "./pages/AdminLoginPage";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLoginPage />} />
        <Route path="/Registernewuser" element={<RegisternewuserPage />} />
        
        <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
