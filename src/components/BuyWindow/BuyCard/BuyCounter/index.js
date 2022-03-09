import { useDispatch } from "react-redux"
import { increaceItemCount, reduceItemCount, updateCart, updateTotal } from "../../../../redux/actions"

export default function BuyCounter(props) {
    const dispatch = useDispatch()

    return (
        <div className='buy-counter'>
            <button className='buy-counter-btn' onClick={() => {
                props.item.count > 0 && dispatch(reduceItemCount(props.item));
                dispatch(updateCart())
                dispatch(updateTotal())
            }}>-</button>
            <p>{props.item.count}</p>
            <button className='buy-counter-btn' onClick={() => {
                dispatch(increaceItemCount(props.item));
                dispatch(updateCart())
                dispatch(updateTotal())
            }}>+</button>
        </div>
    )
}