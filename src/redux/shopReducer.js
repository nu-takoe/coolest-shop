import { CASH_ENTRY, EXIT, FETCH_ITEMS, INCREACE_ITEM_COUNT, MOUNTING_STALL, REDUCE_ITEM_COUNT, STALL_ENTRY, UPDATE_CART, UPDATE_TOTAL } from "./types"

const initialState = {
    items: [],
    cart: [],
    buy: false,
    payment: false,
    stall: 1,
    total: 0,
}

export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return { ...state, items: action.payload }

        case STALL_ENTRY:
            return { ...state, buy: true }

        case CASH_ENTRY:
            return { ...state, payment: true }

        case EXIT:
            return { ...state, buy: false, payment: false }

        case MOUNTING_STALL:
            return { ...state, stall: action.payload }

        case INCREACE_ITEM_COUNT:
            return { ...state, items: state.items.map(item => (item.itemId === action.payload.itemId) ? { ...item, count: ++item.count } : { ...item }) }

        case REDUCE_ITEM_COUNT:
            return { ...state, items: state.items.map(item => (item.itemId === action.payload.itemId) ? { ...item, count: --item.count } : { ...item }) }

        case UPDATE_CART:
            return {...state, cart: state.items.filter(item => item.count > 0)}

        case UPDATE_TOTAL:
            return {...state, total: state.cart.reduce((sum, current) => sum + current.price * current.count, 0)}
        
        default: return state
    }
}