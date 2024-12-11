import React, { useState } from "react";
import Signin from "./page/Signin/Signin"; // Import Signin component
import Signup from "./page/Signin/Signup"; // Import Signup component
import { BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";

const App = () => {
  const [isLogin, setIsLogin] = useState(false); // Trạng thái theo dõi người dùng đã đăng nhập
  const [isSignin, setIsSignin] = useState(true); // Trạng thái chuyển đổi giữa Signin và Signup

  return (
    <div className="App">
      <BrowserRouter>
      <Routes> 
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
       
    </div>
  );
};

export default App;
