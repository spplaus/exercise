import React, { useState } from "react";
import "./App.css";

const Statistics = ({ value }) => {
  const keys = Object.keys(value);
  const vals = Object.values(value).reduce((prev, curr) => prev + curr);

  if (value.good === 0 && value.neutral === 0 && value.bad === 0) {
    return (
      <table>
        <tbody>
          <tr>
            <td>No feedback given</td>
          </tr>
        </tbody>
      </table>
    );
  }
  const methods = {
    positive: () => {
      const result = ((value.good * 100) / vals).toFixed(1);
      return `${result} %`;
    },
    averange: () => {
      const result = (vals / 3).toFixed(1);
      return `${result}`;
    },
  };

  return (
    <table>
      <tbody>
        <tr>
          <td>{keys[0]}</td>
          <td>{value.good}</td>
        </tr>
        <tr>
          <td>{keys[1]}</td>
          <td>{value.neutral}</td>
        </tr>
        <tr>
          <td>{keys[2]}</td>
          <td>{value.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{vals}</td>
        </tr>
        <tr>
          <td>averange</td>
          <td>{methods.averange()}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{methods.positive()}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Button = ({ name, handleClick }) => {
  return <button onClick={handleClick}>{name}</button>;
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const values = {
    good: good,
    neutral: neutral,
    bad: bad,
  };
  return (
    <div>
      <section>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} name="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} name="neutral" />
        <Button handleClick={() => setBad(bad + 1)} name="bad" />
      </section>
      <section>
        <h1>statictics</h1>
        <Statistics value={values} />
      </section>
    </div>
  );
}

export default App;
