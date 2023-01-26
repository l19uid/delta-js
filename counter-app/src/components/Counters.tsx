import {ReactElement} from 'react';
import Counter from "./Counter";
import {CounterInterface} from "../App";

export interface CountersPropsInterface {
    counters: CounterInterface[];
    onIncrement: (counter: CounterInterface) => void;
    onDecrement: (counter: CounterInterface) => void;
    onDelete: (counterId: number) => void;
    handleReset: (counterId: number) => void;
}

export default function Counters({counters, onIncrement,onDecrement,onDelete,handleReset}: CountersPropsInterface): ReactElement {
    return (
            <div className="">
                <div className="cart-products">
                    <div className="cart-products__list">
                        {counters.map((counter:CounterInterface) => (
                            <Counter
                                counter={counter}
                                key={counter.id}
                                onIncrement={onIncrement}
                                onDecrement={onDecrement}
                                handleReset={handleReset}
                            />
                        ))}
                    </div>
                </div>
            </div>
    );
}
