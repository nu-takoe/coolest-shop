import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BuyCard from './BuyCard'
import './BuyWindow.css'

export default function BuyWindow() {
    const status = useSelector(store => store.shop.buy)
    const stallId = useSelector(store => store.shop.stall)
    const items = useSelector(store => store.shop.items)

    const [stallItems, setStallItems] = useState([])

    useEffect(() => {
        setStallItems(items.filter(item => item.objectId === stallId))
    }, [stallId, items])

    const styles = {
        open: {
            animationName: 'open-buy-window'
        },
        close: {
            animationName: 'close-buy-window'
        }
    }

    return (
        <div className='buy-window' style={status ? styles.open : styles.close}>
            <div className='item-list'>
                {stallItems.map(item => <BuyCard key={item.itemId} item={item} />)}
            </div>
        </div>
    )
}