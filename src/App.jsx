import { useState } from "react";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput/UserInput";
import { calculateInvestmentResults } from "./util/investment";

const RESULT_DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [resultData, setResultData] = useState(RESULT_DATA);

  const annualData = calculateInvestmentResults(resultData);
  const isValidData = resultData.duration >= 1;

  function inputChangeHandler(event) {
    switch (event.target.id) {
      case "initial":
        setResultData((prevData) => {
          return {
            ...prevData,
            initialInvestment: parseFloat(event.target.value),
          };
        });
        break;

      case "annual":
        setResultData((prevData) => {
          return {
            ...prevData,
            annualInvestment: parseFloat(event.target.value),
          };
        });
        break;

      case "expected":
        setResultData((prevData) => {
          return {
            ...prevData,
            expectedReturn: parseFloat(event.target.value),
          };
        });
        break;

      case "duration":
        setResultData((prevData) => {
          return {
            ...prevData,
            duration: parseFloat(event.target.value),
          };
        });
        break;

      default:
        break;
    }
  }

  return (
    <main>
      <UserInput changeHandler={inputChangeHandler} />
      {!isValidData ? (
        <p className="center">Duration value should be greater than 0</p>
      ) : (
        <ResultTable annualData={annualData} />
      )}
    </main>
  );
}

export default App;
