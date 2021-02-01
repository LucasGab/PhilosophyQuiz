import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Scrollbars } from 'react-custom-scrollbars';
import Card from '../src/components/Card';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import BaseLayout from '../src/components/BaseLayout';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';
import DraggableView from '../src/components/DraggableView';
import db from '../db.json';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const constraintsRef = React.useRef();

  const externalQuizes = db.external.map((externalQuiz) => {
    const prepareUrl = externalQuiz
      .replace(/\//g, '')
      .replace('https:', '')
      .replace('.vercel.app', '');

    const [repoName, user] = prepareUrl.split('.');

    return (
      <motion.li
        variants={{
          show: {
            opacity: 1,
            scale: 1,
            y: 0,
          },
          hidden: { opacity: 0, scale: 0.5, y: 20 },
        }}
      >
        <Card.AlternativeLink
          disabled={name.length === 0}
        >
          <Card.Alternative
            as={Link}
            href={`/quiz/${repoName}___${user}?name=${name}`}
            key={`externalQuiz_${externalQuiz}`}
            disabled={name.length === 0}
          >
            {`${user}/${repoName}`}
          </Card.Alternative>
        </Card.AlternativeLink>
      </motion.li>
    );
  });

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
    <>
      <DraggableView ref={constraintsRef} />
      <BaseLayout bg={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Card
            as={motion.div}
            variants={{
              show: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.5 },
            }}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.2 }}
            drag
            dragConstraints={constraintsRef}
          >
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
          <Card
            as={motion.div}
            variants={{
              show: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.5 },
            }}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
            drag
            dragConstraints={constraintsRef}
          >
            <Card.Content>
              <h2>Quizes da Galera</h2>
              <Scrollbars
                universal
                renderThumbVertical={({ style, ...props }) => (
                  <div
                    {...props}
                    style={{ ...style, backgroundColor: db.theme.colors.secondary, opacity: 0.5 }}
                  />
                )}
                style={{ height: 150 }}
              >
                <motion.ul
                  variants={{
                    show: {
                      opacity: 1,
                      scale: 1,
                      transition: { delayChildren: 0.6, staggerChildren: 0.2 },
                    },
                    hidden: { opacity: 0, scale: 0.5 },
                  }}
                  initial="hidden"
                  animate="show"
                >
                  {externalQuizes}
                </motion.ul>
              </Scrollbars>
            </Card.Content>
          </Card>
          <Footer />
        </QuizContainer>
      </BaseLayout>
    </>
  );
}
