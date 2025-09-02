import "./App.css";

import GlobalStyles from "styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homework_06 from "homeworks/Homework_06/Homework_06";
import Homework_07 from "homeworks/Homework_07/Homework_07";
import Homework_09 from "homeworks/Homework_09/Homework_09";
import Homework_11 from "homeworks/Homework_11/Homework_11";
import Lesson_07 from "lessons/Lesson_07/Lesson_07";
import Lesson_08 from "lessons/Lesson_08/Lesson";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";
import Lesson_10 from "lessons/Lesson_10/Lesson_10";
import Lesson_11 from "lessons/Lesson_11/Lesson_11";
import Home from "pages/EmployeeApp/Home/Home";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
import Login from "pages/EmployeeApp/LogIn/LogIn";
import About from "pages/EmployeeApp/About/About";
import Layout from "components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
      {/* homeworks */}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_09 /> */}
      {/* <Homework_11 /> */}
      {/* lessons */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <Lesson_10 /> */}
      {/* <Lesson_11 /> */}
    </BrowserRouter>
  );
}

export default App;
