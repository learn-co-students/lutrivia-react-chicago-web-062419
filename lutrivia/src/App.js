import React from 'react';
import data from './data';
import QContainer from './components/QContainer';

function App() {
  const questions = data.questions
  return (
    <div>
      <QContainer questions={questions}/>
    </div>
  );
}

export default App;
