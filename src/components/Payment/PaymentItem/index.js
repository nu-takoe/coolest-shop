import { useDispatch } from 'react-redux'
import { reduceItemCount, updateCart } from '../../../redux/actions'
import './PaymentItem.css'

export default function PaymentItem(props) {
    const dispatch = useDispatch()

    return (
        <div className="payment-item" style={(props.index % 2) ? { backgroundColor: "rgb(196, 176, 154)" } : { backgroundColor: "rgb(241, 217, 189)" }}>
            <div className='total-item-info'>
                <img src={props.item.img} alt='item' />
                <p>{props.item.count * props.item.price} р.</p>
            </div>
            <div className='item-counter'>
                <div>
                    <p>{props.item.count}</p>
                    <button onClick={
                        () => {
                            dispatch(reduceItemCount(props.item))
                            dispatch(updateCart())
                        }
                    }>-</button>
                </div>
            </div>
        </div>
    )
}