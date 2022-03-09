import './BuyCard.css'
import BuyCounter from './BuyCounter'

export default function BuyCard(props){
    return(
        <div className="buy-card">
            <img alt="item" src={props.item.img}/>
            <p className='buy-card-name'>{props.item.name}</p>
            <p className='buy-card-price'>{props.item.price}p.</p>
            <BuyCounter item={props.item}/>
        </div>
    )
}