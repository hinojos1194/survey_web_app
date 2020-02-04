import React, { useState, useEffect } from "react";

import { Container, Title, Description, Card, Question } from "./styles";
import axiosInstance from "../../services/api";

import Header from "../../components/Header";

import AnswerItem from "../../components/AnswerItem";

export default function Survey({ history, match }) {
  const [data, setData] = useState();
  const mount = data => (
    <Card>
      {data?.questions?.map(question => {
        return (
          <>
            <Question>{"Question: " + question.title}</Question>
            {question?.options?.map((option, i) => (
              <AnswerItem key={i} />
            ))}
          </>
        );
      })}
    </Card>
  );

  useEffect(() => {
    axiosInstance
      .get(`/surveys/${match.params.id}/result`)
      .then(response => {
        setData(response?.data);
      })
      .catch();
  }, [match.params.id]);

  return (
    <Container>
      <Header />
      {data && (
        <>
          <Title>{data.title}</Title>
          <Description>{data.description}</Description>
          {mount(data)}
        </>
      )}
    </Container>
  );
}
