import { BrowserRouter, Routes, Route } from "react-router-dom";

import {MainLoginPage} from "./pages/MainLoginPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLoginPage />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
