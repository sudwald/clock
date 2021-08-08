import './App.css';
import { getCards, randomiseCards } from './CardSlice.js';
import { postPlay, postWin, updateLastPlayed } from './PlaySlice.js'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import blank from './resources/cards/blank.png'
import ClockDiv from './ClockDiv';
import Stats from './Stats.js'

function App() {
  const cardInfo = useSelector(getCards);
  const dispatch = useDispatch()

  const clockDivs = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  const kings = []
  
  for (let i=1; i<5; i++) {
    kings.push(cardInfo.filter(card => card.id === `king${i}`))
  }

  if (cardInfo.filter(card => card.flipped).length === 52) {
    dispatch(postWin())
  }

  const newGame = () => {
    dispatch(randomiseCards())
    dispatch(postPlay())
    dispatch(updateLastPlayed(13))
  }

  useEffect(() => {
    newGame()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="App-main">
        <div id='info'>
          <h1>Clock</h1>
          <h2>What's Clock?</h2>
          <p>Clock is a fun, mindless solitaire game.</p>
          <p>It's entirely based on chance - in fact, you've already won or lost this game!</p>
          <p>The chance of winning is 1 in 13. Why not play 13 games and see if you can beat the unlucky odds?!</p>
          <h2>How to play</h2>
            <ul>
              <li>Start by click the top card in the middle. It will place itself on the right point on the 'clock' - with aces at 1 o' clock, then 2, 3, and so on.</li>
              <li>Turn over the next card on that point of the clock. That card will jump to <i>its</i> own point on the 'clock'.</li>
              <li>Keep following the clock round. If in doubt, follow the arrow!</li>
              <li>When you hit a king, it will place itself in the middle. Your streak is broken!</li>
              <li>Turn over the next card in the middle and start again.</li>
              <li>If you find and return all the kings to their correct position on the clock, you win! :)</li>
              <li>But once you're out of fresh cards in the middle, you lose! :(</li>
            </ul>
        </div>
        <div id='gamePlayArea'>
        <div id='clockContainer'>
          <button id="btnNewGame" onClick={newGame}>New Game</button>
          {
            clockDivs.map(div => {
              return <ClockDiv id={`clock${div}`} index={div} />
            })
          }

          <div className='clockDiv' id='clock14'> {/*SPACES FOR THE KINGS*/}
            {
              kings.map(card => {
                return <img id={card[0].id} className={card[0].id === 'king1'? 'bottomCard' : 'stackedCard'} src={card[0].flipped? card[0].SRC : blank} />
              })   
            }
          </div>
        </div>
        <Stats />
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
