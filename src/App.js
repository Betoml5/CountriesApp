import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountryContextProvider } from "./Context/Country";
import Countries from "./containers/Countries";
import Layout from "./containers/Layout";

function App() {
  return (
    <BrowserRouter>
      <CountryContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Countries />} />
          </Routes>
        </Layout>
      </CountryContextProvider>
    </BrowserRouter>
  );
}

export default App;
