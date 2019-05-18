import koaRouter from 'koa-router';
import bodyParser from 'koa-body';
import helmet from 'koa-helmet';
import routeConfig from '../routes/index';

export default function(app) {
    app.use(helmet());
    app.use(bodyParser({
        multipart: true,
    }));
    const router = koaRouter();
    routeConfig(router);
    app.use(router.routes());
};
