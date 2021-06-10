import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];
// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case SET_ALERT:
            return [...state, payload]
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}


// const initialState = [];
// // eslint-disable-next-line
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case SET_ALERT:
//       console.log(action.payload);
//       // console.log(state.alerts);
//       return {...state, 
//         alerts: action.payload,
//       };

//     case REMOVE_ALERT:
//       return state.alerts.filter((alert) => alert.id !== action.payload);

//     default:
//       return state;
//   }
// };
