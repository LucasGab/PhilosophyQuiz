import styled from 'styled-components'
import QuizBackground from '../src/components/QuizBackground'
import Card from '../src/components/Card'
import Footer from '../src/components/Footer'
import QuizLogo from '../src/components/QuizLogo'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'
import db from '../db.json';

const QuizContainer = styled.div`
  width:100%;
  max-width: 350px;
  margin: auto 10%;
`;

export default function Home() {
  return(
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <meta property="og:image" content={db.bg} />
      </Head>
      <QuizContainer>
        
        <QuizLogo />
        <Card>
          <Card.Header>
            <h1>{db.title}</h1>
          </Card.Header>
          <Card.Content>
            <p>{db.description}</p>
            <Card.Input placeholder="Coloque seu nome aqui"></Card.Input>
            <Card.Button disabled>Jogar</Card.Button>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <h2>Quizes da Galera</h2>

            <p>lorem ipsum dolor sit amet...</p>
          </Card.Content>
        </Card>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/LucasGab/PhilosophyQuiz" />
    </QuizBackground>
  ) 
}
