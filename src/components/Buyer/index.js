import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cashEntry, exit, goDown, goLeft, goRight, goUp, increaceCoords, mountingStall, reduceCoords, selectZIndex, stallEntry, startMoving, stayBack, stayFront, stayLeft, stayRight, stopMoving } from '../../redux/actions.js'
import { shopObjects } from '../../stuff/shopObjects.js'
import './Buyer.css'

export default function Buyer() {
    const [vector, setVector] = useState('')
    const dispatch = useDispatch()

    const buyer = useSelector(store => store.buyer.styles)
    const speed = useSelector(store => store.buyer.speed)
    const moveHandler = useSelector(store => store.buyer.moveHandler)

    //начало движения, установка анимации, определение вектора движения
    function start(e) {
        if (e.code === 'ArrowUp') {
            setVector('up')
            dispatch(startMoving())
            dispatch(goUp())
        }
        if (e.code === 'ArrowDown') {
            setVector('down')
            dispatch(startMoving())
            dispatch(goDown())
        }
        if (e.code === 'ArrowLeft') {
            setVector('left')
            dispatch(startMoving())
            dispatch(goLeft())
        }
        if (e.code === 'ArrowRight') {
            setVector('right')
            dispatch(startMoving())
            dispatch(goRight())
        }
    }

    // вычисление будущих координат на основе текущих и вектора
    function getNewCoords(buyer, vector) {
        let newCoords
        if (vector === 'up') {
            return newCoords = { ...buyer, top: buyer.top - speed }
        }
        if (vector === 'down') {
            return newCoords = { ...buyer, top: buyer.top + speed }
        }
        if (vector === 'left') {
            return newCoords = { ...buyer, left: buyer.left - speed }
        }
        if (vector === 'right') {
            // eslint-disable-next-line no-unused-vars
            return newCoords = { ...buyer, left: buyer.left + speed }
        }
    }

    // коллюзия с границей
    function borderСollision(newCoords, buyer) {
        if (newCoords.left < 0 || (newCoords.left + buyer.width) > 1100 || newCoords.top + 70 < 100 || (newCoords.top + buyer.height) > 700) {
            return false
        } else {
            return true
        }
    }

    // коллюзия с объектами
    function objCollision(objArr, newCoords) {
        let oc = true

        objArr.forEach(obj => {
            //верхняя левая
            if ((newCoords.top + 70 > obj.collider.top && newCoords.left > obj.collider.left) && (newCoords.top + 70 > obj.collider.top && newCoords.left < obj.collider.left + obj.collider.width) && (newCoords.top + 70 < obj.collider.top + obj.collider.height && newCoords.left > obj.collider.left) && (newCoords.top + 70 < obj.collider.top + obj.collider.height && newCoords.left < obj.collider.left + obj.collider.width)) {
                oc = false
            }

            //верхняя правая
            if ((newCoords.top + 70 > obj.collider.top && newCoords.left + buyer.width > obj.collider.left) && (newCoords.top + 70 > obj.collider.top && newCoords.left + buyer.width < obj.collider.left + obj.collider.width) && (newCoords.top + 70 < obj.collider.top + obj.collider.height && newCoords.left + buyer.width > obj.collider.left) && (newCoords.top + 70 < obj.collider.top + obj.collider.height && newCoords.left + buyer.width < obj.collider.left + obj.collider.width)) {
                oc = false
            }

            //нижняя левая точка
            if ((newCoords.top + buyer.height > obj.collider.top && newCoords.left > obj.collider.left) && (newCoords.top + buyer.height > obj.collider.top && newCoords.left < obj.collider.left + obj.collider.width) && (newCoords.top + buyer.height < obj.collider.top + obj.collider.height && newCoords.left > obj.collider.left) && (newCoords.top + buyer.height < obj.collider.top + obj.collider.height && newCoords.left < obj.collider.left + obj.collider.width)) {
                oc = false
            }

            //нижняя правая
            if ((newCoords.top + buyer.height > obj.collider.top && newCoords.left + buyer.width > obj.collider.left) && (newCoords.top + buyer.height > obj.collider.top && newCoords.left + buyer.width < obj.collider.left + obj.collider.width) && (newCoords.top + buyer.height < obj.collider.top + obj.collider.height && newCoords.left + buyer.width > obj.collider.left) && (newCoords.top + buyer.height < obj.collider.top + obj.collider.height && newCoords.left + buyer.width < obj.collider.left + obj.collider.width)) {
                oc = false
            }
        })

        return oc
    }

    // коллюзия с зонами взоимодействия
    function contactCollision(objArr, buyer) {
        let contact = false

        objArr.forEach(obj => {
            if ((buyer.top + 75 > obj.contactCollider.top && buyer.left + 15 > obj.contactCollider.left) && (buyer.top + 75 > obj.contactCollider.top && buyer.left + 15 < obj.contactCollider.left + obj.contactCollider.width) && (buyer.top + 75 < obj.contactCollider.top + obj.contactCollider.height && buyer.left + 15 > obj.contactCollider.left) && (buyer.top + 75 < obj.contactCollider.top + obj.contactCollider.height && buyer.left + 15 < obj.contactCollider.left + obj.contactCollider.width)) {
                contact = true
                if (obj.id === 9) {
                    dispatch(cashEntry())
                } else {
                    dispatch(stallEntry())
                    dispatch(mountingStall(obj.id))
                }
            }
        })

        if (!contact) {
            dispatch(exit())
        }
    }

    // движение
    function move(vector) {
        if (vector === 'up') {
            dispatch(reduceCoords('top'))
        }
        if (vector === 'down') {
            dispatch(increaceCoords('top'))
        }
        if (vector === 'left') {
            dispatch(reduceCoords('left'))
        }
        if (vector === 'right') {
            dispatch(increaceCoords('left'))
        }

        // манипуляция с zindex`ом для обхода объектов
        if (buyer.top > 250) {
            dispatch(selectZIndex(4))
        } else {
            dispatch(selectZIndex(2))
        }
    }

    // остановка
    function stop(e) {
        if (e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
            if (vector === 'up') {
                dispatch(stayBack())
            }
            if (vector === 'down') {
                dispatch(stayFront())
            }
            if (vector === 'left') {
                dispatch(stayLeft())
            }
            if (vector === 'right') {
                dispatch(stayRight())
            }
            dispatch(stopMoving())
        }
    }


    useEffect(() => {
        document.addEventListener('keydown', start)
        document.addEventListener('keyup', stop)

        const movement = setInterval(() => {
            // если кнопка нажата
            if (moveHandler) {
                let newCoords = getNewCoords(buyer, vector)
                let bc = borderСollision(newCoords, buyer)
                let oc = objCollision(shopObjects, newCoords)
                contactCollision(shopObjects, buyer)
                if (bc && oc) {
                    move(vector)
                }
            }
        }, 9)

        // очистка
        return () => {
            document.removeEventListener('keydown', start)
            document.removeEventListener('keyup', stop)
            clearInterval(movement)
        }
    })

    return (
        <div style={buyer} className='buyer'>

        </div>
    )
}