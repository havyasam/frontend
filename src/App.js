import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Users from './pages/users/Users'
import Brands from './pages/brands/Brands'
import Brandedit from './pages/Brandedit/Brandedit'
import Stores from './pages/stores/Stores'
import Orders from './pages/orders/Orders'
import Products from './pages/products/Products'
import Dashboard from './pages/dashboard/Dashboard'
import Storeedit from './pages/Storeedit/Storeedit'
import Ordereedit from './pages/Orderedit/Orderedit'
import Productedit from './pages/Productedit/Productedit'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
     <Routes>
       <Route path="/">
         <Route index element={<Login/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/users' element={<Users/>}/>
         <Route path='/stores' element={<Stores/>}/>
         <Route path='/brands' element={<Brands/>}/>
         <Route path='/brandedit/:id/:brand_name' element={<Brandedit/>}/>
         <Route path='/storeedit/:id/:store_name' element={<Storeedit/>}/>
         <Route path='/orderedit/:id/:cust_name' element={<Ordereedit/>}/>
         <Route path='/productedit/:id/:product_name' element={<Productedit/>}/>

         <Route path='/Orders' element={<Orders/>}/>
         <Route path='/products' element={<Products/>}/>
         <Route path='/logout' element={<Login/>}/>
        
       </Route>
     </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
