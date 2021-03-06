import React from 'react';
import Card from '../Card';
import BackArrowLink from '../BackArrowLink';

export default function QuizQuestion(props) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [questionSubmited, setQuestionSubmited] = React.useState(false);
  const {
    question, questionIndex, length, handleQuizSubmit,
  } = props;
  const questionId = `question__${questionIndex}`;
  const isCorrect = (selectedAlternative === question.answer);
  const hasSelectedAlternative = !Number.isNaN(Number(selectedAlternative));

  const onChangeAlternative = (index) => {
    if (!questionSubmited) {
      setSelectedAlternative(index);
    }
  };

  const alternatives = question.alternatives.map((alternative, alternativeIndex) => {
    const alternativeId = `alternative__${alternativeIndex}`;
    const isSelected = (alternativeIndex === selectedAlternative);
    const status = isCorrect ? 'SUCCESS' : 'ERROR';
    return (
      <div key={alternativeId}>
        <Card.Alternative
          as="label"
          htmlFor={alternativeId}
          data-status={questionSubmited && status}
          data-selected={isSelected}
        >
          {alternative}
        </Card.Alternative>
        <input
          id={alternativeId}
          name={questionId}
          onChange={() => onChangeAlternative(alternativeIndex)}
          type="radio"
          checked={isSelected}
        />
      </div>
    );
  });

  const onSubmit = (event) => {
    event.preventDefault();
    setQuestionSubmited(true);
    setTimeout(() => {
      const correct = isCorrect;
      setSelectedAlternative(undefined);
      setQuestionSubmited(false);
      handleQuizSubmit(correct);
    }, 1 * 3000);
  };

  return (
    <Card>
      <Card.Header>
        <BackArrowLink href="/" />
        <h2>
          {`Pergunta ${questionIndex + 1} de ${length}`}
        </h2>
      </Card.Header>
      <img style={{ width: '100%', height: '200px' }} src={question.image} alt="Placeholder" />
      <Card.Content>
        <h1>{question.title}</h1>
        <p>{question.description}</p>
        <form onSubmit={onSubmit}>
          {alternatives}
          <Card.Button type="submit" disabled={!hasSelectedAlternative || questionSubmited}>
            {!questionSubmited && <span>Confirmar</span>}
            {isCorrect && questionSubmited && <span>Você acertou!</span>}
            {!isCorrect && questionSubmited && <span>Você errou!</span>}
          </Card.Button>
        </form>
      </Card.Content>
    </Card>
  );
}
