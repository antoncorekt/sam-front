import * as TAB_ACTIONS from '../actions/tabActions';

export function tabsState(state = [], action) {

    switch (action.type) {
        case TAB_ACTIONS.INIT_DEFAULT_TABS:
            return action.tabPanes;
        default:
            return state;
    }
}