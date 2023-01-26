import {ReactElement} from 'react';
import {CounterInterface} from "../App";

export interface CounterPropsInterface {
    counter: CounterInterface;
    onIncrement: (counter: CounterInterface) => void;
    onDecrement: (counter: CounterInterface) => void;
    handleReset: (counterId: number) => void;
}

// @ts-ignore
export default function Counter({counter,onIncrement,onDecrement,handleReset}: CounterPropsInterface): ReactElement {

    const getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += counter.count === 0 ? "warning" : "primary";
        return classes;
    }

    const formatCount = () => {
        const {count} = counter;
        return count === 0 ? "Zero" : count;
    }

    return <div className="align-items-center">
        <div className="cart-product__info">
            <div className="btn-block ">
                <button
                    className="btn btn-success"
                        onClick={() => {onIncrement(counter);}}>
                    <i className="fa fa-plus-circle" aria-hidden="true"/>
                </button>
                <button
                    className=" btn btn-danger"
                    onClick={() => {onDecrement(counter);}}>
                    <i className="fa fa-plus-circle" aria-hidden="true"/>
                </button>
                <button
                    className=" btn btn-secondary"
                    onClick={() => {handleReset(counter.id);}}>
                    <i className="fa fa-plus-circle" aria-hidden="true"/>
                </button>
                <div className="cart-product__name">{counter.count}</div>
            </div>
    </div>
</div>;
}