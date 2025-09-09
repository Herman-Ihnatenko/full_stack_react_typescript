import { useState } from "react";
import Card from "homeworks/Homework_13/components/Card/Card";
import Button from "components/Button/Button";
import { MainWrapper } from "./styles";
import { createContext } from "react";

const BlogContext = createContext({});
const BlogManagement = () => {
  const [message, setMessage] = useState("");
  const [postedMessage, setPostedMessage] = useState("");

  const handlePost = () => {
    setPostedMessage(message);
    setMessage("");
  };

  return (
    <BlogContext.Provider value={{ message, setMessage }}>
      <MainWrapper>
        <textarea 
          value={message} 
          onChange={(event) => setMessage(event.target.value)}/>
        <Button name="Запостить" onClick={handlePost} />
        <Card message={postedMessage} />
      </MainWrapper>
    </BlogContext.Provider>
  );
};

export default BlogManagement;