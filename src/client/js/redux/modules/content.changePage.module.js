import { createAction } from 'redux-act';

export const nextPage = createAction('next page');
export const prevPage = createAction('prev page');

export const reducer = {
    [nextPage]: (state) => {
        return{
            ...state,
            page:state.page<state.content.values.length-1?state.page+1:state.page,
        }},
    [prevPage]: (state) => {
        return{
            ...state,
            page:state.page>0?state.page-1:state.page,
        }},
};
