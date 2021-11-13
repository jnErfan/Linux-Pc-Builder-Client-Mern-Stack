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
import OurAllPcCollection from "./Linux_Pc_Builder/Pages/OurAllPcCollection/OurAllPcCollection";
import Dashboard from "./Linux_Pc_Builder/Pages/Dashboard/Dashboard";
import AuthContext from "./Linux_Pc_Builder/Context/AuthContext";
import PrivateRoute from "./Linux_Pc_Builder/PrivateRoute/PrivateRoute";
import ShippingDetails from "./Linux_Pc_Builder/Pages/ShippingDetail/ShippingDetails";
import DesktopDetails from "./Linux_Pc_Builder/Pages/DesktopDetails/DesktopDetails";
import OrderConfirm from "./Linux_Pc_Builder/Pages/OrderConfirm/OrderConfirm";
import UpdateDesktop from "./Linux_Pc_Builder/Pages/UpdateDesktop/UpdateDesktop";
import { useEffect, useState } from "react";
import Preloader from "./Linux_Pc_Builder/Preloader/Preloader";
import RouterTitle from "react-router-title";

function App() {
  const [preloader, setPreloader] = useState([]);
  useEffect(() => {
    fetch("https://linux-pc-builder-backend.herokuapp.com/desktopsPagination?page=0&size=12")
      .then((res) => res.json())
      .then((data) => setPreloader(data.desktopPackage));
  }, []);
  console.log(preloader);
  return (
    <div>
      {!preloader.length ? (
        <Preloader />
      ) : (
        <AuthContext>
          <Router>
            <NavBaar />
            <Switch>
              {/* Default Path  */}
              <Route exact path="/">
              <RouterTitle
                pageTitle="Linux Pc Builder"
                routesConfig={{ path: "/" }}
              />
                <HomeContainer />
              </Route>
              {/* Home  */}
              <Route path="/home">
              <RouterTitle
                pageTitle="Home | Linux Pc Builder"
                routesConfig={{ path: "/home" }}
              />
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
              <RouterTitle
                pageTitle="Order Confirm | Linux Pc Builder"
                routesConfig={{ path: "/orderConfirm" }}
              />
                <OrderConfirm />
              </PrivateRoute>

              {/*  Our Blogs  */}
              <PrivateRoute path="/allPcCollection">
              <RouterTitle
                pageTitle="All Pc Collection | Linux Pc Builder"
                routesConfig={{ path: "/allPcCollection" }}
              />
                <OurAllPcCollection />
              </PrivateRoute>

              <Route path="/blogs">
              <RouterTitle
                pageTitle="Blogs | Linux Pc Builder"
                routesConfig={{ path: "/blogs" }}
              />
                <OurBlogs />
              </Route>
              
              {/* Contract Us  */}
              <PrivateRoute path="/contract">
              <RouterTitle
                pageTitle="Contract | Linux Pc Builder"
                routesConfig={{ path: "/contract" }}
              />
                <Contract />
              </PrivateRoute>

              {/* Login  */}
              <Route path="/login">
              <RouterTitle
                pageTitle="Login | Linux Pc Builder"
                routesConfig={{ path: "/login" }}
              />
                <Login />
              </Route>

              {/* Sign Up  */}
              <Route path="/signUp">
              <RouterTitle
                pageTitle="Sign Up | Linux Pc Builder"
                routesConfig={{ path: "/signUp" }}
              />
                <SignUp />
              </Route>
              {/* Dashboard  */}
              <PrivateRoute path="/dashboard">
              <RouterTitle
                pageTitle="Dashboard | Linux Pc Builder"
                routesConfig={{ path: "/dashboard" }}
              />
                <Dashboard />
              </PrivateRoute>

              {/* Page Not Found  */}
              <Route exact path="*">
              <RouterTitle
                pageTitle="404 Not Found | Linux Pc Builder"
                routesConfig={{ path: "*" }}
              />
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </AuthContext>
      )}
    </div>
  );
}

export default App;
