import {ReactElement} from "react";
import {BOARD_SIZE} from "../settings";

interface ResultProps {
    nextPlayer: string;
    finished: boolean;
    winner: string | null;
    setBoard: (board: string[] | null[]) => void;
    setNextPlayer: (nextPlayer: string) => void;
    setFinished: (finished: boolean) => void;
    setMoves: (moves: string[][]) => void;
}

function Result(props: ResultProps): ReactElement {
    return (
        <div className="result">
            {props.finished && props.winner !== null ?
                <h2>Winner: <span className={props.winner === "X" ? "x" : "o"}>{props.winner}</span></h2> :
                <h2>Next player: <span className={props.nextPlayer === "X" ? "x" : "o"}>{props.nextPlayer}</span></h2>}
            <button className="reset-button" onClick={() => {
                props.setBoard(Array(BOARD_SIZE * BOARD_SIZE).fill(null))
                props.setNextPlayer("X")
                props.setFinished(false)
                props.setMoves([])
            }}>Reset
            </button>
        </div>
    );
}

export default Result;