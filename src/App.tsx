import { useEffect, useState } from 'react';
import mole from './assets/mole.png';
import hole from './assets/hole.png';

const App: React.FC = () => {

  const [isHole, setIsHole] = useState<boolean[]>([...Array(9)].map(() => true));
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      let position: number = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
      setIsHole(prev => {
        const currentState = [...prev];
        return currentState.map((current, index)=> index === position ? current = false : current = true );
      })
    }, 1500)

  }, []);

  const handleWack = (index: number): void => {
    setScore(prev => prev + 1)
    setIsHole(prev => {
      const currentState = [...prev];
      currentState[index] = true;
      return currentState;
    })
  }

  const handleReset = (): void => {
    setScore(0)
  }

  return (
    <>
      <h1 id="wack-title">Wack-A-Mole</h1>
      <h2 id="scoreholder">Your score: {score}</h2>
      <div id="grid">
        {
          isHole.map((h, index) =>
            h ? <img className="moleimg" key={index} src={hole} />
              : <img className="moleimg" key={index} src={mole} onClick={() => { handleWack(index) }} />
          )
        }
      </div>
      <div className="action">
        <button onClick={handleReset}>Reset game</button>
      </div>
      <div className="creator">
        <p>This challenge was really fun to practice, it was created by Web Dev Cody. <br/>Check out <a href="https://www.youtube.com/@WebDevCody" target="_blank">his channel</a> for more cool challenges!</p>
      </div>
    </>
  )

}

export default App
