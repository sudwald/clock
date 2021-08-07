import { useSelector, useDispatch } from 'react-redux';
import cardRear from './resources/cards/cardrear.jpg'
import CardInPlay from './CardInPlay';
import CardPiles from './CardPiles';
import { getCards } from './CardSlice.js';
import { getPlayInfo, postPlay } from './PlaySlice.js';
import arrow from './resources/arrow.png';
import sadface from './resources/sadface.png';
import happyface from './resources/happyface.png';

function ClockDiv(props) {
    const dispatch = useDispatch()
    const startIndex = (props.index - 1) * 4
    const cardsToRender = [startIndex, startIndex+1, startIndex+2, startIndex+3]
    const cardInfo = useSelector(getCards);
    const playInfo = useSelector(getPlayInfo);
    const flippedCards = cardInfo.filter(card => parseInt(card.ownPos) === props.index && card.flipped)
    let arrowDisplay = {};
    let emojiDisplay = {display: 'none'}
    let happy = null;
    let flippable = 0;

    if (playInfo.lastPlayed === props.index || playInfo.lastPlayed === 14 && props.index === 13) {
        if (cardInfo.filter(card => card.flipped).length !== 52) {
            arrowDisplay = {display: 'inline'}
        }
        else {
            arrowDisplay = {display: 'none'}
        }
    }
    else {
        arrowDisplay = {display: 'none'}
    }

    if (cardInfo.filter(card => card.flipped).length === 52 && props.index === 13) {
        happy = true
        emojiDisplay = {display: 'inline'}
    }

    if (cardInfo[startIndex].flipped && playInfo.lastPlayed === 14 && props.index === 13 && cardInfo.filter(card => card.flipped).length === 52) {
        happy = false;
        emojiDisplay = {display: 'inline'}
    }

    if (props.index === playInfo.lastPlayed || playInfo.lastPlayed === 14 && props.index === 13) {
        if (cardInfo[startIndex+1].flipped) {
            flippable = startIndex
        }
        else if (cardInfo[startIndex+2].flipped) {
            flippable = startIndex + 1
        }
        else if (cardInfo[startIndex+3].flipped) {
            flippable = startIndex + 2
        }
        else {
            flippable = startIndex + 3
        }
    }

    return(
        <div className='clockDiv' id={props.id}>
            <img id={'arrow'} src={arrow} style={arrowDisplay} />
            <img id={'emoji'} src={happy? happyface : sadface} style={emojiDisplay} />
            {
                flippedCards.map(card => {
                    return <CardPiles index={props.index} src={card.SRC}/>
                })   
            }
            {
                cardsToRender.map(card => {
                    return <CardInPlay className={card === startIndex? 'bottomCard' : 'stackedCard'} id={card} src={cardInfo[card].flipped? cardInfo[card].SRC : cardRear} flippable={flippable === card? true : false} index={props.index} ownPos={cardInfo[card].ownPos}/>
                })
            }
        </div>
    )
}

export default ClockDiv;