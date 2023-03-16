import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NumberB from "./components/NumberB";
import NumberA from "./components/NumberA";
import Operation from "./components/Operation";
import Result from "./components/Result";
import History from "./components/History";


function App() {
    const [numberA, setNumberA] = useState(0);
    const [numberB, setNumberB] = useState(0);
    const [operation, setOperation] = useState(0);
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([] as any[]);

    useEffect(() => {
        let result;
        switch (operation) {
            case 0:
                result = numberA + numberB;
                setResult(Math.round(result * 100) / 100);
                break;
            case 1:
                result = numberA - numberB;
                setResult(Math.round(result * 100) / 100);
                break;
            case 2:
                result = numberA * numberB;
                setResult(Math.round(result * 100) / 100);
                break;
            case 3:
                result = numberA / numberB;
                setResult(Math.round(result * 100) / 100);
                break;
        }
    }, [numberA, numberB, operation]);

    useEffect(() => {
        AddToHistory(numberA, numberB, operation, Math.round(Number(result) * 100) / 100);
    }, [result]);

    function AddToHistory(numberA: number, numberB: number, operation: number, result: number) {
        setHistory([...history, { numberA: numberA, numberB: numberB, operation: operation, result: result }]);
    }

  return (
    <div className="p-3">
        <div className="text-center p-5 bg-neutral-900 rounded mb-5">
            <NumberA numberA={numberA} setNumberA={setNumberA} />
            <Operation operation={operation} setOperation={setOperation} />
            <NumberB numberB={numberB} setNumberB={setNumberB} />
        </div>
        <div className="text-center p-5 bg-neutral-900 rounded mb-5">
        <Result result={result} />
        </div>
        <div className="text-center p-5 bg-neutral-900 rounded mb-5">
            <History history={history} />
        </div>
    </div>
  )
}


export default App
