import "./App.css";

import Homework_06 from "homeworks/Homework_06/Homework_06";
import Homework_07 from "homeworks/Homework_07/Homework_07";
import Homework_09 from "homeworks/Homework_09/Homework_09";
import Lesson_07 from "lessons/Lesson_07/Lesson_07";
import Lesson_08 from "lessons/Lesson_08/Lesson";
import GlobalStyles from "styles/GlobalStyles";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";



function App() {
  return (
    <div className="app">
      <GlobalStyles />
      {/* homeworks */}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      <Homework_09 />
      {/* lessons */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 /> */}
    </div>
  );
}

export default App;
