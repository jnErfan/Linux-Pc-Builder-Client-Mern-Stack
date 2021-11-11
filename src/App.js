import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./Linux_Pc_Builder/Pages/Home/HomeContainer/HomeContainer";
import NavBaar from "./Linux_Pc_Builder/Pages/Shared/NavBar/NavBaar";
import Footer from "./Linux_Pc_Builder/Pages/Shared/Footer/Footer";
import OurBlogs from "./Linux_Pc_Builder/Pages/OurBlogs/OurBlogs";
import Contract from "./Linux_Pc_Builder/Pages/Contract/Contract";
import NotFound from "./Linux_Pc_Builder/Pages/NotFound/NotFound";
import Login from "./Linux_Pc_Builder/LoginMethod/Login/Login";
import SignUp from "./Linux_Pc_Builder/LoginMethod/SignUp/SignUp";
import AdminLogin from "./Linux_Pc_Builder/LoginMethod/AdminLogin/AdminLogin";
import ShippingDetails from "./Linux_Pc_Builder/Pages/ShippingDetails/ShippingDetails";
import OurAllPcCollection from "./Linux_Pc_Builder/Pages/OurAllPcCollection/OurAllPcCollection";
import Dashboard from "./Linux_Pc_Builder/Pages/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <NavBaar />
        <Switch>
          {/* Default Path  */}
          <Route exact path="/">
            <HomeContainer />
          </Route>
          {/* Home  */}
          <Route path="/home">
            <HomeContainer />
          </Route>
          {/* Shipping Details  */}
          <Route path="/shippingDetails/:packageId">
            <ShippingDetails />
          </Route>
          {/*  Our Blogs  */}
          <Route path="/allPcCollection">
            <OurAllPcCollection />
          </Route>
          <Route path="/blogs">
            <OurBlogs />
          </Route>
          {/* Contract Us  */}
          <Route path="/contract">
            <Contract />
          </Route>
          {/* Login  */}
          <Route path="/login">
            <Login />
          </Route>
          {/* Sign Up  */}
          <Route path="/signUp">
            <SignUp />
          </Route>
          {/* Admin Login  */}
          <Route path="/adminLogin">
            <AdminLogin />
          </Route>
          {/* Dashboard  */}
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          {/* Page Not Found  */}
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
