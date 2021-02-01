import { useRouter } from 'next/router';
import React from 'react';
import BaseLayout from '../../components/BaseLayout';
import QuizContainer from '../../components/QuizContainer';
import QuizQuestion from '../../components/QuizQuestion';
import Card from '../../components/Card';

function LoadingCard() {
  return (
    <Card>
      <Card.Header>
        <h1>Carregando...</h1>
      </Card.Header>
      <Card.Content>
        <p>[Carregando os quizes]</p>
      </Card.Content>
    </Card>
  );
}

function ResultCard(props) {
  const router = useRouter();
  const { total, result } = props;
  const { name } = router.query;

  const totalCorrects = result.reduce((actual, correct) => (correct ? actual + 1 : actual), 0);
  const individualResults = result.map((correct, index) => (
    <p key={`result__${index + 1}`}>{`Pergunta #${index + 1}: ${correct ? 'Acertou' : 'Errou'}`}</p>
  ));

  return (
    <Card>
      <Card.Header>
        <h1>Resultado da sessão filosófica</h1>
      </Card.Header>
      <Card.Content>
        <p>{`${name} você acertou ${totalCorrects} de ${total}: `}</p>
        {individualResults}
      </Card.Content>
    </Card>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage({ externalDb }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const totalQuestions = externalDb.questions.length;
  const question = externalDb.questions[currentQuestion];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  const handleSubmit = (correct) => {
    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
    setResults([...results, correct]);
  };

  return (
    <BaseLayout bg={externalDb.bg}>
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
          <QuizQuestion
            length={totalQuestions}
            question={question}
            questionIndex={currentQuestion}
            handleQuizSubmit={handleSubmit}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingCard />}
        {screenState === screenStates.RESULT
        && <ResultCard result={results} total={totalQuestions} />}

      </QuizContainer>
    </BaseLayout>
  );
}
