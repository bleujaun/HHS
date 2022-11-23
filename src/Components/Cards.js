import { useState, useRef } from 'react'
import Card from './Card'

export default function Cards() {
    const [cards, setCards] = useState([
        { id: 0, name: 'all eyez on me', status: '', img: '/images/01.jpg' },
        { id: 0, name: 'all eyez on me', status: '', img: '/images/01.jpg' },
        { id: 1, name: 'ready to die', status: '', img: '/images/02.jpg' },
        { id: 1, name: 'ready to die', status: '', img: '/images/02.jpg' },
        { id: 2, name: 'it was written', status: '', img: '/images/03.jpg' },
        { id: 2, name: 'it was written', status: '', img: '/images/03.jpg' },
        { id: 3, name: 'THE CHRONIC', status: '', img: '/images/04.jpg' },
        { id: 3, name: 'THE CHRONIC', status: '', img: '/images/04.jpg' },
        { id: 4, name: 'ENTER THE WU-TANG 36 CHAMBERS', status: '', img: '/images/05.jpg' },
        { id: 4, name: 'ENTER THE WU-TANG 36 CHAMBERS', status: '', img: '/images/05.jpg' },
        { id: 5, name: 'THE GREAT ADVENTURES OF SLICK RICK', status: '', img: '/images/06.jpg' },
        { id: 5, name: 'THE GREAT ADVENTURES OF SLICK RICK', status: '', img: '/images/06.jpg' },
        { id: 6, name: 'REASONABLE DOUBT', status: '', img: '/images/07.jpg' },
        { id: 6, name: 'REASONABLE DOUBT', status: '', img: '/images/07.jpg' },
        { id: 7, name: 'CRIMINAL MINDED', status: '', img: '/images/08.jpg' },
        { id: 7, name: 'CRIMINAL MINDED', status: '', img: '/images/08.jpg' },
    ].sort(() => Math.random() - .5))

    const [previousCardState, setPreviousCardState] = useState(-1)
    const previousIndex = useRef(-1)

    const matchCheck = (currentCard) => {
        if(cards[currentCard].id === cards[previousCardState].id){
            cards[previousCardState].status = 'active matched'
            cards[currentCard].status = 'active matched'
            setPreviousCardState(-1)
        }else{
            cards[currentCard].status = 'active'
            setCards([...cards])
            setTimeout(() => {
                setPreviousCardState(-1)
                cards[currentCard].status = 'unmatch'
                cards[previousCardState].status = 'unmatch'
                setCards([...cards])
            }, 1000);
        }
    }

    const clickhandler = (index) => {
        
        if(index !== previousIndex.current){
            if(cards[index].status === 'active matched'){
                alert('already matched')
            }else{
                if(previousCardState === -1){
                    previousIndex.current = index
                    cards[index].status = 'active'
                    setCards([...cards])
                    setPreviousCardState(index)
                }else{
                    matchCheck(index)
                    previousIndex.current = -1
                }
            }
        }else{
            alert('card currently seleted')
        }

    }

    return (
      <div className="container">
        { cards.map((card, index) => {
            return <Card key={index} card={card} index={index} clickhandler={clickhandler} />
        })}
      </div>
    );
}