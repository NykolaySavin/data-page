import Koa from 'koa';
import koaConfig from './config/koa';

const app = new Koa();
koaConfig(app);

const port = 8000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
