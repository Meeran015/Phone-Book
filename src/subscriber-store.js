import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    "subscribers" : [
    {
        "id": 1,
        "name": "George Miller",
        "phone": 7890123456
    },
    {
        "id": 2,
        "name": "Hannah Davis",
        "phone": 8901234567
    },
    {
        "id": 3,
        "name": "Isaac Newton",
        "phone": 9012345678
    },
    {
        "id": 4,
        "name": "Jessica Parker",
        "phone": 1230984567
    },
    {
        "id": 5,
        "name": "Kevin Hart",
        "phone": 2345678901
    },
    {
        "id": 6,
        "name": "Lena Foster",
        "phone": 3456789012
    }
]
};

function subscriberReducer(state = initialState, action) {

    switch(action.type) {
        case  "SET_SUBSCRIBERS":
            return {...state, "subscribers" : action.payload}  
        default:
            return state;
    }
}

export default configureStore({
    reducer: {
        subscribers: subscriberReducer
        // Add more reducers here if needed
    }
});
