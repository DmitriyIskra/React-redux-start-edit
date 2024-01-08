import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../actions/actions';

const initialState = [
    {
        id: '0',
        text: 'initial text', 
        sum: 2542555
    },
    {
        id: '22',
        text: 'initial text 22',
        sum: 254
    }
];

const listNotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NOTE:
            return [...state, action.payload];
        case UPDATE_NOTE:
            return state.map( item => {
                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        text: action.payload.text,
                        sum: action.payload.sum,
                    }
                } else {
                    return item;
                }
            })
        case DELETE_NOTE:
            return state.filter( item => item.id !== action.payload )
        default:
            return state;
    }
}

export default listNotesReducer;