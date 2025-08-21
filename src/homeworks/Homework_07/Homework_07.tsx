import { useState } from "react";
import Feedback from "components/Feedback/Feedback";
import { type HomeworkState } from "homeworks/Homework_07/types";

import { PageWrapper } from "./styles.ts";


function Homework_07() {
  const [state, setState] = useState<HomeworkState>({ like: 0, dislike: 0 });

  const onLike = () =>
    setState((prevValue) => ({ ...prevValue, like: prevValue.like + 1 }));

  const onDislike = () =>
    setState((prevValue) => ({ ...prevValue, dislike: prevValue.dislike + 1 }));

  const resetResults = () => 
    setState({ like: 0, dislike: 0 });

  return (
    <div className="homework_07_page_wrapper">
      <Feedback
        like={state.like}
        dislike={state.dislike}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={resetResults}
      />
    </div>
  );
}

export default Homework_07;
