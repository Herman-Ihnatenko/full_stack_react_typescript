import { useNavigate } from "react-router-dom";
import { PageWrapper, ButtonControl, Text } from "./styles";
import Button from "components/Button/Button";

const Google = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <Text>
      Google is an American search engine company, founded in 1998 by Sergey
      Brin and Larry Page. Since 2015, Google has been a subsidiary of the
      holding company Alphabet, Inc. More than 70% of worldwide online search
      requests are handled by Google, placing it at the heart of most Internet
      users’ experience. It is one of the world’s most prominent brands. Its
      headquarters are in Mountain View, California.
      </Text>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
};

export default Google;
