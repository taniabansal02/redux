import { ADD_TO_CART } from "./constants";

//define initial state i.e by default vo data kya rhega null, empty array, obj, empty string
// yha humne array isiliye rkha bcoz whenever we add to cart, items add honge, items ek se jyada honge toh vo array mei store rhenge
const initialState = [];


// Basic reducer => atleast 2 params 1) state 2) action -> ye btayega krna kya hai
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                // sbse pehle state ka data nikalenge, ho skta cart mei phle hi 2 item pdi ho
                ...state,
                // we want jo humne abb item add kri hai uska data add ho jaye
                action.data
            ]

        default:
            return state
    }

}