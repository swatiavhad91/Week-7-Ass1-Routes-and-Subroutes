import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Category from "./Components/Category";
import Products from "./Components/Products";



const Home = () => (
  <div>
    <h2 style={{color:"purple", backgroundColor:"cyan", width:"20%", textAlign:"center"}}>Home</h2>
  </div>
);

const Admin = () => (
  <div>
    <h2 style={{color:"red", backgroundColor:"yellow", width:"20%",textAlign: "center"}}>Welcome admin</h2>
  </div>
);

export default function App() {
  return (
    <div>
      
        <ul style={{fontSize:"larger",marginBottom:"50px"}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        
        <Route path="/category">
          <Category />
        </Route>
       
        <Route path="/products">
          <Products />
        </Route>

        <Route  path="/">
          <Admin />
        </Route>
           
      </Switch>
    </div>
  );
}
