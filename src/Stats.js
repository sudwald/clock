import { useSelector } from 'react-redux';
import { getPlayInfo } from './PlaySlice';

function Stats(props) {    

    const playInfo = useSelector(getPlayInfo);

    return(
        <>
            GAMES PLAYED: {playInfo.gamesPlayed}
            GAMES WON: {playInfo.gamesWon}
        </>
    )
}

export default Stats;