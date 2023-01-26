import {ReactElement, useState} from 'react'
import Counters from "./components/Counters";
import CartHeader from "./components/CartHeader";


const min = 0;
const max = 100;

// Clamp number between two values with the following line:
const clamp = (num : number, min: number, max: number) => Math.min(Math.max(num, min), max);

class CounterObject {
    id: number;
    count: number;

    constructor(id: number, count: number) {
        this.id = id;
        this.count = count;
    }

    getId(): number {
        return this.id;
    }

    getCount(): number {
        return this.count;
    }
}

export interface CounterInterface {
    id: number;
    count: number;
}

const initCounters = [
    {id: 1, count: 0},
    {id: 2, count: 0},
    {id: 3, count: 0},
    {id: 4, count: 0}
]

function App() : ReactElement {
     const [count, setCount] = useState<CounterInterface[]>(initCounters);

     const[cisloA, setCisloA] = useState<number>(0);

     const handleIncrement = (counter:CounterInterface) => {
            const counters = [...count];
            const index = counters.indexOf(counter);
            counters[index] = {...counter};
            counters[index].count++;
         counters[index].count = clamp(counters[index].count, min, max);
            setCount(counters);
     }

        const handleDecrement = (counter:CounterInterface) => {
            const counters = [...count];
            const index = counters.indexOf(counter);
            counters[index] = {...counter};
            counters[index].count--;
            counters[index].count = clamp(counters[index].count, min, max);
            setCount(counters);
        }

        const handleReset = (counterId:number) => {
            const counters = count.map(c => {
                if (c.id === counterId)
                {
                    c.count = 0;
                }
                return c;
            });
            setCount(counters);
        }


        const handleDelete = (counterId:number) => {
            const counters = count.filter(c => c.id !== counterId);
            setCount(counters);
        }

        const handleRestart = () => {
            setCount(initCounters);
        }
    return (
        <div className="App">
        <CartHeader/>
            <Counters
                counters={count}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
                handleReset={handleReset}
            />
        </div>
    )
}

export default App
