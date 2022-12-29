import Inpurt from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row, Column } from "./Styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFistNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleClear = () => {
    setCurrentNumber("0");
    setFistNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };
  const hanldeSumNumber = () => {
    if (firstNumber === "0") {
      setFistNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumber = () => {
    if (firstNumber === "0") {
      setFistNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMultiNumber = () => {
    if (firstNumber === "0") {
      setFistNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleDiviNumber = () => {
    if (firstNumber === "0") {
      setFistNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const hanldeEquals = () => {
    if (!firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          hanldeSumNumber();
          break;

        case "-":
          handleMinusNumber();
          break;

        case "*":
          handleMultiNumber();
          break;

        case "/":
          handleDiviNumber();
          break;
        default:
          break;
      }
    }
  };
  return (
    <Container>
      <Content>
        <Inpurt value={currentNumber} />
        <Row>
          <Button label="*" onClick={handleMultiNumber} />
          <Button label="/" onClick={handleDiviNumber} />
          <Button label="C" onClick={handleClear} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleMinusNumber} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={hanldeSumNumber} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={hanldeEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
