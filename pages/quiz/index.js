import React from 'react';
import QuizPage from '../../src/screens/Quiz';
import db from '../../db.json';

export default function Quiz() {
  return <QuizPage externalDb={db} />;
}
