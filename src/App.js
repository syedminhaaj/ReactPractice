import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import Job from "./components/job";
import MyApp from "./components/MyApp";
import Counter2 from "./components/counter2";
import ShowHideText from "./components/showHide";
import MyNewCounter from "./components/MyAppCounter";
import Dashboard from "./crudComponents/Dashboard";
import GetApi from "./FetchAPI/GetApi";
import PartyExcuse from "./FetchAPI/PartyExcuse";
import Home from "./routingModule/pages/Home";
import Career from "./routingModule/pages/Career";
import Contact from "./routingModule/pages/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("PedroTech");
  const client = new QueryClient();
  return (
    <div className="App">
      {/* <AppContext.Provider value={{ username, setUsername }}> */}
      <QueryClientProvider client={client}>
        <Router>
          <div>
            <Link to="/">Home</Link> &nbsp;&nbsp;
            <Link to="/contact">Contact</Link>&nbsp;&nbsp;
            <Link to="/career">Career</Link>&nbsp;&nbsp;
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="*" element={<h1>You are not in a page</h1>} />
          </Routes>
        </Router>
        {/* <Counter />
      <Counter2 />
      <MyApp />
      <ShowHideText />
      <MyNewCounter />
      <Dashboard />
      <GetApi />
      <PartyExcuse /> */}
        {/* </AppContext.Provider> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
