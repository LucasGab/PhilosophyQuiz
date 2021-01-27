import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import QuizBackground from '../src/components/QuizBackground';
import Card from '../src/components/Card';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import db from '../db.json';

const QuizContainer = styled.div`
  width:100%;
  max-width: 350px;
  margin: auto 10%;
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  const validateName = (nameValidation) => {
    let nameRes = nameValidation;
    if (nameValidation) {
      nameRes = nameValidation.trim();
    }
    return nameRes;
  };

  const nameOnChange = (event) => {
    setName(validateName(event.target.value));
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Filosófico</title>
        <meta name="title" content="Quiz Filosófico" />
        <meta name="description" content="Quiz Game About Philosophy things" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://philosophy-quiz.lucasgab.vercel.app/" />
        <meta property="og:title" content="Quiz Filosófico" />
        <meta property="og:description" content="Quiz Game About Philosophy things" />
        <meta property="og:image" content={db.bg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://philosophy-quiz.lucasgab.vercel.app/" />
        <meta property="twitter:title" content="Quiz Filosófico" />
        <meta property="twitter:description" content="Quiz Game About Philosophy things" />
        <meta property="twitter:image" content={db.bg} />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Card>
          <Card.Header>
            <h1>{db.title}</h1>
          </Card.Header>
          <Card.Content>
            <p>{db.description}</p>
            <form onSubmit={handleFormSubmit}>
              <Card.Input placeholder="Coloque seu nome aqui" onChange={nameOnChange} />
              <Card.Button type="submit" disabled={name.length === 0}>
                Vamos Filosofar!
              </Card.Button>
            </form>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <h2>Quizes da Galera</h2>
            <Card.SubCard>
              <p>omariosouto/aluraquiz-css</p>
            </Card.SubCard>
            <Card.SubCard>
              <p>omariosouto/aluraquiz-marvel</p>
            </Card.SubCard>
          </Card.Content>
        </Card>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/LucasGab/PhilosophyQuiz" />
    </QuizBackground>
  );
}
