import { BrowserRouter, Routes, Route } from "react-router-dom";

import {MainLoginPage} from "./pages/MainLoginPage";
import {RegisternewuserPage} from "./pages/RegisternewuserPage";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLoginPage />} />
        <Route path="/Registernewuser" element={<RegisternewuserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
