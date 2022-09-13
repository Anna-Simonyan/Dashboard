import React from 'react'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Payers from "./pages/Payers";
import Filings from "./pages/Filings";
import Reports from "./pages/Reports";
import { Routes,Route} from "react-router-dom"
import Account from "./pages/Account";
import About from "./pages/About";
import Password from "./pages/Password";
import Billing from "./pages/Billing";
import Security from "./pages/Security";
import Field from "./pages/Field";
import StartField from "./pages/StartField";
import MyCart from "./pages/MyCart";
import Summary from "./pages/Summary";
import Totals from "./pages/Totals";
import Concat from "./pages/Concat";
import Setup from './pages/Setup';
import Variety from './pages/Variety';
import Team from './pages/Team';
import Checkout from './pages/Checkout';

function App() {
 
  return  (
    <div className="App">
      <Header />
      <Sidebar/>
      <Routes>
      
        <Route element={<Sidebar/>} >
     <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/payers" element={<Payers/>}></Route>
        <Route path="/filings" element={<Filings/>}></Route>
        <Route path="/reports" element={<Reports/>}></Route>
        <Route path="/account" element={<Account/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/password" element={<Password/>}></Route>
        <Route path="/billing" element={<Billing/>}></Route>
        <Route path="/security" element={<Security/>}></Route>
        <Route path="/field" element={<Field/>}></Route>
        <Route path="/startField" element={<StartField/>}></Route>
        <Route path="/myCart" element={<MyCart/>}></Route>
        <Route path="/summary" element={<Summary/>}></Route>
        <Route path="/totals" element={<Totals/>}></Route>
        <Route path="/concat" element={<Concat/>}></Route>
        <Route path="/setup" element={<Setup/>}></Route>
        <Route path="/variety" element={<Variety/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      
        </Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
