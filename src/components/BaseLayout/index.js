import React from 'react';
import Head from 'next/head';
import QuizBackground from '../QuizBackground';
import GitHubCorner from '../GitHubCorner';
import db from '../../../db.json';

export default function Home(props) {
  const { children, bg } = props;
  return (
    <QuizBackground backgroundImage={bg}>
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

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      {children}
      <GitHubCorner projectUrl="https://github.com/LucasGab/PhilosophyQuiz" />
    </QuizBackground>
  );
}
