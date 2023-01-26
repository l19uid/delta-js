import {useEffect, useRef, useState} from 'react'
import click1 from './assets/click1.wav';
import click2 from './assets/click2.wav';
import './App.css'

const click1Audio = new Audio(click1);
const click2Audio = new Audio(click2);

function App() {
    const [playing, setPlaying] = useState<boolean>(false);
    const [bpm, setBpm] = useState<number>(150);
    let [counter, setCounter] = useState<number>(0);

    const timer = useRef<number>();

    function playSound() {
        if(counter == 0)
            click2Audio.play()
        else if(counter % 4 == 0)
            click2Audio.play();
        else
            click1Audio.play()

        counter++;
    }

    useEffect(() => {
        let timer:number|null = null;

        if(playing)
        {
            timer = setInterval(() => playSound(), (60/bpm) * 1000);
        } else {
            timer && clearInterval(timer);
        }

        return () =>{
            timer && clearInterval(timer);
        }

    },[playing,bpm])

    const stopPlayHandler = () => {
        setPlaying(!playing);
    }

  return (
    <div className="metronome">
        <div className="bpm-slider">
            <div>{bpm} bpm</div>
            <input value={bpm} type="range" min="60" max="240" onChange={event => setBpm(parseInt(event.target.value,10))}/>
        </div>
        <button onClick={stopPlayHandler}>
            {playing ? 'Stop' : 'Play'}
        </button>
    </div>
  )
}

export default App
