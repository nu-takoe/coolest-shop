import Buyer from '../Buyer'
import ShopObject from '../ShopObject'
import { shopObjects } from '../../stuff/shopObjects.js'
import './ShopWindow.css'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchItems} from '../../redux/actions'
import BuyWindow from '../BuyWindow'
import Payment from '../Payment'


export default function ShopWindow() {
    const dispatch = useDispatch()
    const still = true
    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch, still])

    return (
        <div className="shop-window">
            <Buyer />
            {shopObjects.map((item) => <ShopObject key={item.id} obj={item} />)}
            <Payment />
            <BuyWindow />
        </div>
    )
}