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
import OurAllPcCollection from "./Linux_Pc_Builder/Pages/OurAllPcCollection/OurAllPcCollection";
import Dashboard from "./Linux_Pc_Builder/Pages/Dashboard/Dashboard";
import AuthContext from "./Linux_Pc_Builder/Context/AuthContext";
import PrivateRoute from "./Linux_Pc_Builder/PrivateRoute/PrivateRoute";
import ShippingDetails from "./Linux_Pc_Builder/Pages/ShippingDetail/ShippingDetails";
import DesktopDetails from "./Linux_Pc_Builder/Pages/DesktopDetails/DesktopDetails";
import OrderConfirm from "./Linux_Pc_Builder/Pages/OrderConfirm/OrderConfirm";
import UpdateDesktop from "./Linux_Pc_Builder/Pages/UpdateDesktop/UpdateDesktop";

function App() {
  return (
    <AuthContext>
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
          <PrivateRoute path="/desktopDetails/:desktopId">
            <DesktopDetails />
          </PrivateRoute>
          {/* Shipping Details  */}
          <PrivateRoute path="/shippingDetails/:shippingId">
            <ShippingDetails />
          </PrivateRoute>
          {/* Update Shipping  */}
          <PrivateRoute path="/updateDesktop/:updateId">
            <UpdateDesktop />
          </PrivateRoute>
          {/* Shipping Details  */}
          <PrivateRoute path="/orderConfirm">
            <OrderConfirm />
          </PrivateRoute>
          {/*  Our Blogs  */}
          <PrivateRoute path="/allPcCollection">
            <OurAllPcCollection />
          </PrivateRoute>
          <Route path="/blogs">
            <OurBlogs />
          </Route>
          {/* Contract Us  */}
          <PrivateRoute path="/contract">
            <Contract />
          </PrivateRoute>
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
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          {/* Page Not Found  */}
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthContext>
  );
}

export default App;
