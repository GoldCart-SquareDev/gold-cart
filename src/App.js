import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import Signup from "./pages/sign-up/Signup";
import Signin from "./pages/sign-in/Signin";
import Verifyaccount from "./pages/verify-account/Verifyaccount";
import Forgotpassword from "./pages/forgot-password/Forgotpassword";
import Resetpassword from "./pages/reset-password/Resetpassword";
import BuyerHome from "./pages/Buyer/Buyer";
import Account from "./pages/user-account/Account";
import Location from "./pages/location/Location";
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";
import ProductOverview from "./pages/product-overview/Productoverview";
import Productspecification from "./pages/product-specification/Productspecification";
import Productreview from "./pages/product-review/Productreview";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<LandingPage />} />
      <Route  path="/sign-up" element={<Signup />} />
      <Route  path="/sign-in" element={<Signin />} />
      <Route  path="/verify-account" element={<Verifyaccount />} />
      <Route  path="/forgot-password" element={<Forgotpassword />} />
      <Route  path="/reset-password" element={<Resetpassword />} />
      <Route  path="/buyer-home" element={<BuyerHome />} />
      <Route  path="/account" element={<Account />} />
      <Route  path="/location" element={<Location />} />
      <Route  path="/cart" element={<Cart />} />
      <Route  path="/products" element={<Product />} />
      <Route  path="/product-overview" element={<ProductOverview />} />
      <Route  path="/product-specification" element={<Productspecification />} />
      <Route  path="/product-review" element={<Productreview />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
