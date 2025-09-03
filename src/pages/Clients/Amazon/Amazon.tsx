import { useNavigate } from "react-router-dom";
import { PageWrapper, ButtonControl, Text } from "./styles";
import Button from "components/Button/Button";
const Amazon = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <Text>
      Amazon is guided by four principles: customer obsession rather than
      competitor focus, passion for invention, commitment to operational
      excellence, and long-term thinking. We strive to be Earth’s most
      customer-centric company, Earth’s best employer, and Earth’s safest place
      to work. Amazon was founded in 1994 by Jeff Bezos.
      </Text>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
};

export default Amazon;
