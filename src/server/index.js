import Koa from 'koa';
import koaConfig from './config/koa';
import * as config from './config';

const app = new Koa();
koaConfig(app);
app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
});
