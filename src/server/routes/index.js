import * as data from './data';

export default function (router) {
    router.get('/api/data/:fileName', data.getFile);
};
