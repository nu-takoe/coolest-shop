import stayFront from '../img/Buyer/stay_front.png'
import stayBack from '../img/Buyer/stay_back.png'
import stayLeft from '../img/Buyer/stay_left.png'
import stayRight from '../img/Buyer/stay_right.png'
import { GO_DOWN, GO_LEFT, GO_RIGHT, GO_UP, INCREACE_COORDS, REDUCE_COORDS, SELECT_ZINDEX, START_MOVING, STAY_BACK, STAY_FRONT, STAY_LEFT, STAY_RIGHT, STOP_MOVING } from './types'

const initialState = {
    moveHandler: false,
    speed: 2,
    styles: {
        width: 30,
        height: 80,
        top: 600,
        left: 420,
        backgroundImage: `url(${stayFront})`,
        zIndex: 4,
        animationName: ''
    },
}

export const buyerReducer = (state = initialState, action) => {
    switch (action.type) {

        case INCREACE_COORDS:
            return {
                ...state,
                styles: {
                    ...state.styles,
                    [action.payload]: state.styles[action.payload] + state.speed,
                },
            }
        case REDUCE_COORDS:
            return {
                ...state,
                styles: {
                    ...state.styles,
                    [action.payload]: state.styles[action.payload] - state.speed,
                },
            }

        case START_MOVING:
            return {
                ...state,
                moveHandler: true,
            }
        case STOP_MOVING:
            return {
                ...state,
                moveHandler: false,
                styles: {
                    ...state.styles,
                    animationName: ''
                }
            }

        case GO_UP:
            return {
                ...state,
                styles: {
                    ...state.styles,
                    animationName: 'goBack'
                }
            }
        case GO_DOWN:
            return {
                ...state,
                styles: {
                    ...state.styles,
                    animationName: 'goFront'
                }
            }
        case GO_LEFT:
            return {
                ...state,
                styles: {
                    ...state.styles,
                    animationName: 'goLeft'
                }
            }
        case GO_RIGHT:
            return {
                ...state,
                styles: {
                    ...state.styles,
                    animationName: 'goRight'
                }
            }

        case STAY_FRONT:
            return {
                ...state,
                styles: {
                    ...state.styles,
                    backgroundImage: `url(${stayFront})`,
                }
            }
        case STAY_BACK:
            return {
                ...state,
                styles: {
                    ...state.styles,
                    backgroundImage: `url(${stayBack})`,
                }
            }
        case STAY_LEFT:
            return {
                ...state,
                styles: {
                    ...state.styles,
                    backgroundImage: `url(${stayLeft})`,
                }
            }
        case STAY_RIGHT:
            return {
                ...state,
                styles: {
                    ...state.styles,
                    backgroundImage: `url(${stayRight})`,
                }
            }

        case SELECT_ZINDEX:
            return {
                ...state,
                styles: {
                    ...state.styles,
                    zIndex: action.payload
                }
            }

        // case TEST:
        //     return {
        //         ...state,
        //         test: state.test + 1
        //     }

        default: return state
    }

}