import { useState } from "react";
import "./App.css";
import Data from "./Data.json";
import Question from "./Question";
import Option from "./Option";

const App = () => {

  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(null);
  
  const quizOption = Data[count].options;
  const correctAnswer = Data[count].correctAnswer;
  //console.log(correctAnswer)

  const handleClick = () => {
    setSelected(null)
    let questionCount = count
    if ( questionCount=== 4) {
      setCount(0);
    } else {
      setCount(questionCount + 1);
    }
  };

  const optionClick = (index) => {
    setSelected(index);
  };

  return (
    <div className="container">
      <h1>Quiz-App</h1>
      <Question text={Data[count].text} />
        {quizOption.map((option, index) => {
        return (
          <Option
            option={option}
            key={index}
            index={index}
            optionClick={optionClick}
            selected={selected}
            correctAnswer={correctAnswer}
          />
        );
      })}

      <button onClick={handleClick}>next</button>
    </div>
  );
};

export default App;
