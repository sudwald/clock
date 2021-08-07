import { useSelector } from 'react-redux';
import { getPlayInfo } from './PlaySlice';

function Stats(props) {    

    const playInfo = useSelector(getPlayInfo);
    const winPercentage = Math.round((playInfo.gamesWon / playInfo.gamesPlayed)*100)

    let oddsCheck = winPercentage > 7.69? true: false

    return(
        <>
        <div id='statsContainer'>
            <p class='stats'>GAMES PLAYED: {playInfo.gamesPlayed}</p>
            <p class='stats'>GAMES WON: {playInfo.gamesWon}</p>
            <p class='stats'>WIN PERCENTAGE: {`${winPercentage}%`}</p>
        </div>
            <p class='stats' id='odds' style={oddsCheck? {display:'inline'} : {display:'none'}}>You're beating the odds!</p>
        </>
    )
}

export default Stats;