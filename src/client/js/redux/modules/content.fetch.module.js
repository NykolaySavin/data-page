import { createAction } from 'redux-act';
import { put, call, takeEvery } from 'redux-saga/effects';

import * as Api from '../../core/api/content';


export const fetchContent= createAction(
    'fetch content',
    (fileHeader)=>(fileHeader)
);

export const fetchContentSuccess = createAction(
    'fetch content - success',
    nodes => nodes,
);

export const fetchContentFail = createAction(
    'fetch repository - fail',
    error => error,
);

export const reducer = {
    [fetchContent]: state => ({
        ...state,
    }),
    [fetchContentSuccess]: (state, data) => ({
        ...state,
        content:data
    }),
    [fetchContentFail]: (state, error) => ({
        ...state,
       content:error,

    }),
};

export function* fetchContentSaga({ payload: fileHeader }) {
    let fileName = '';
    switch (fileHeader){
        case 'Job':fileName='job.json';break;
        case 'Cluster':fileName='cluster.json';break;
        case 'Job Details':fileName='jobDetails.json';break;
        case 'Map':fileName='map.json';break;
        case 'Reduce':fileName='reduce.json';break;
        case 'Resource':fileName='Resource.json';break;
        default :fileName='';break;
    }
    const { response, error } = yield call(Api.getFileData,fileName);
    if (response) {
        yield put(fetchContentSuccess(response));
    } else {
        yield put(fetchContentFail(error));
    }
}

export function* watchFetchContent() {
    yield takeEvery(fetchContent.getType(), fetchContentSaga);
}
