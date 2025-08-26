import React, { useState, useEffect } from "react";
import { PageWrapper, Card, Text, MainText, ButtonControl } from "./styles";
import Button from "components/Button/Button";

interface Joke {
  setup: string;
  punchline: string;
}

function Homework_09() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data: Joke = await response.json();
      setJoke(data);
    } catch (error) {
      setError("Some Network Error");
    }
  };

  const handleButtonClick = () => {
    fetchJoke();
  };

  return (
    <PageWrapper>
      <Card>
        {joke ? (
          <>
            <MainText>{joke.setup}</MainText>
            <Text>{joke.punchline}</Text>
          </>
        ) : (
          <MainText>{error}</MainText>
        )}
        <ButtonControl>
          <Button name="Get new joke" onClick={handleButtonClick} />
        </ButtonControl>
      </Card>
    </PageWrapper>
  );
}

export default Homework_09;
