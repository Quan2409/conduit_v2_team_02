import { Routes, Route } from "react-router-dom";

import Signin from "../page/Signin/Signin";
import Signup from "../page/Signup/Signup";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
