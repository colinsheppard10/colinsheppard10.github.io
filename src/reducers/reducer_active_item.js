import { ACTIVE_ITEM } from '../actions';

export default function (state = null, action) {
    switch (action.type) {
        case ACTIVE_ITEM: return action.payload;
    }
    return state;
}
