import React from 'react';
import { useRouter } from 'next/router';
import Card from '../src/components/Card';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import BaseLayout from '../src/components/BaseLayout';
import QuizContainer from '../src/components/QuizContainer';
import db from '../db.json';

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
    <BaseLayout>
      <QuizContainer>
        <QuizLogo />
        <Card>
          <Card.Header>
            <h1>{db.title}</h1>
          </Card.Header>
          <Card.Content>
            <p>{db.description}</p>
            <form onSubmit={handleFormSubmit}>
              <Card.Input type="text" placeholder="Coloque seu nome aqui" onChange={nameOnChange} />
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
    </BaseLayout>
  );
}
