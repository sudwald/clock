import { flipCard, getCards } from './CardSlice.js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateLastPlayed } from './PlaySlice';

function CardInPlay(props) {    
    const dispatch = useDispatch()

    const cardInfo = useSelector(getCards);
    const imgDisplay = cardInfo[props.id].flipped? {display: 'none'} : {display: 'inline'}

    const handleFlip = () => {
        dispatch(flipCard(props.id))
        dispatch(updateLastPlayed(parseInt(props.ownPos)))
    }
    
    return(
        <>
            <img className={props.className} id={props.id} src={props.src} onClick={props.flippable && handleFlip} style={imgDisplay}/>
        </>
    )
}

export default CardInPlay;