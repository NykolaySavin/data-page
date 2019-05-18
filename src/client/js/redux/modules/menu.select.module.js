import { createAction } from 'redux-act';

export const selectMenuItem = createAction('select menu item ', (header) => (header));

export const reducer = {
    [selectMenuItem]: (state, header) => {
        return{
            ...state,
            menu:{
                ...state.menu,
                selectedItem:header,
            },
            page:0

        }},

};
