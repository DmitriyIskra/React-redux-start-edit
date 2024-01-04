const obj = {
    id: '',
    text: '',
    sum: '',
}

const listNotesReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_NOTE:
            return [...state, action.payload];
        case UPDATE_NOTE:
            return state.map( item => {
                if(item.id = action.payload.id) {
                    return {
                        ...item,
                        text: action.payload.text,
                        sum: action.payload.sum,
                    }
                }
            } )
        case DELETE_NOTE:
            const arr = state.filter( item => item.id !== action.payload )
            return arr;
        default:
            console.log(new Error('NOT VALIDE ACTION'))
    }
}