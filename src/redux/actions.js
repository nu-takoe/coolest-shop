import { UPDATE_TOTAL, CASH_ENTRY, EXIT, FETCH_ITEMS, GO_DOWN, GO_LEFT, GO_RIGHT, GO_UP, INCREACE_COORDS, INCREACE_ITEM_COUNT, MOUNTING_STALL, REDUCE_COORDS, REDUCE_ITEM_COUNT, SELECT_ZINDEX, STALL_ENTRY, START_MOVING, STAY_BACK, STAY_FRONT, STAY_LEFT, STAY_RIGHT, STOP_MOVING, UPDATE_CART } from "./types";

// функции изменения координат положения покупателя
export function increaceCoords(vector) {
    return { type: INCREACE_COORDS, payload: vector }
}
export function reduceCoords(vector) {
    return { type: REDUCE_COORDS, payload: vector }
}

// функции начачала и остановки движения
export function startMoving() {
    return { type: START_MOVING }
}

export function stopMoving() {
    return { type: STOP_MOVING }
}

//функции анимации передвижения
export function goUp() {
    return { type: GO_UP }
}
export function goDown() {
    return { type: GO_DOWN }
}
export function goLeft() {
    return { type: GO_LEFT }
}
export function goRight() {
    return { type: GO_RIGHT }
}

//положение покупателя по окончанию движения
export function stayFront() {
    return { type: STAY_FRONT }
}
export function stayBack() {
    return { type: STAY_BACK }
}
export function stayLeft() {
    return { type: STAY_LEFT }
}
export function stayRight() {
    return { type: STAY_RIGHT }
}

//получение товаров
export function fetchItems() {
    return async dispatch => {
        const response = await fetch('http://localhost:3000/items')
        const json = await response.json()
        dispatch({ type: FETCH_ITEMS, payload: json })
    }
}

export function mountingStall(id) {
    return { type: MOUNTING_STALL, payload: id }
}

export function selectZIndex(index) {
    return { type: SELECT_ZINDEX, payload: index }
}

export function stallEntry() {
    return { type: STALL_ENTRY }
}
export function cashEntry() {
    return { type: CASH_ENTRY }
}
export function exit() {
    return { type: EXIT }
}

export function increaceItemCount(item) {
    return { type: INCREACE_ITEM_COUNT, payload: item }
}
export function reduceItemCount(item) {
    return { type: REDUCE_ITEM_COUNT, payload: item }
}

export function updateCart() {
    return { type: UPDATE_CART }
}
export function updateTotal() {
    return { type: UPDATE_TOTAL }
}

// export function testReducer() {
//     return { type: TEST }
// }