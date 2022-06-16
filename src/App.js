import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountryContextProvider } from "./Context/Country";
import Countries from "./containers/Countries";

function App() {
  return (
    <BrowserRouter>
      <CountryContextProvider>
        <Routes>
          <Route path="/" element={<Countries />} />
        </Routes>
      </CountryContextProvider>
    </BrowserRouter>
  );
}

export default App;
