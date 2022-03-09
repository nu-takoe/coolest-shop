import { useSelector } from 'react-redux'
import './Payment.css'
import PaymentItem from './PaymentItem'

export default function Payment() {
    const status = useSelector(store => store.shop.payment)
    const cart = useSelector(store => store.shop.cart)
    const total = useSelector(store => store.shop.total)

    const styles = {
        open: {
            animationName: 'open-payment'
        },
        close: {
            animationName: 'close-payment'
        }
    }

    return (
        <div className="payment" style={status ? styles.open : styles.close}>
            <div className='cart'>
                <div className='cart-list'>
                    {cart.length !== 0 ? (cart.map((item, index) => <PaymentItem item={item} key={item.itemId} index={index} />)) : (<p>Корзина пуста</p>)}
                </div>
            </div>
            <div className='pay'>
                <p>{total}p.</p>
                <button onClick={() => alert('Ура, Вы большой молодец, продолжаете в том же духе и всё наладится, обнял')}>Купить</button>
            </div>
        </div>
    )
}