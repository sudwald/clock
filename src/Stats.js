import { useSelector } from 'react-redux';
import { getPlayInfo } from './PlaySlice';

function Stats(props) {    

    const playInfo = useSelector(getPlayInfo);

    return(
        <div id='statsContainer'>
            <p class='stats'>GAMES PLAYED: {playInfo.gamesPlayed}</p>
            <p class='stats'>GAMES WON: {playInfo.gamesWon}</p>
        </div>
    )
}

export default Stats;