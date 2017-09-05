import { SAVE_SETTINGS } from '../constants/Settings';

const initialState = {
    title: '',
    amount: '',
    type: ''
};

export default function settings(state = initialState, action) {
    switch (action.type) {
        case SAVE_SETTINGS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
