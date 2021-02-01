import React from 'react';
import QuizPage from '../../src/screens/Quiz';

export default function QuizCommunity({ externDb }) {
  return (<QuizPage externalDb={externDb} />);
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  const externDb = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Falha em pegar dados');
    })
    .then((responseObject) => responseObject)
    .catch(() => {
      context.res.writeHead(302, { Location: '/' });
      context.res.end();
      return { props: {} };
    });

  return {
    props: {
      externDb,
    },
  };
}
