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
    </Routes>
    </BrowserRouter>
  );
}

export default App;
