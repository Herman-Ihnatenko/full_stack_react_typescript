import { useNavigate } from "react-router-dom";
import { PageWrapper, ButtonControl, Text } from "./styles";
import Button from "components/Button/Button";
const Facebook = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <Text>
      Facebook, American online social media platform and social network service
      that is part of the company Meta Platforms. Facebook was founded in 2004
      by Mark Zuckerberg, Eduardo Saverin, Dustin Moskovitz, and Chris Hughes,
      all of whom were students at Harvard University. Facebook became the
      largest social network in the world, with nearly three billion users as of
      2021, and about half that number were using Facebook every day. The
      company’s headquarters are in Menlo Park, California. 
      </Text>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
};

export default Facebook;
