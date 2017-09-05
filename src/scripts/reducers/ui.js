import { TRIGGER_FORM } from '../constants/UI';

const initialState = {
    showStartModal: true
};

export default function ui(state = initialState, action) {
    switch (action.type) {
        case TRIGGER_FORM:
            return { ...state, showStartModal: !state.showStartModal };
        default:
            return state;
    }
}
