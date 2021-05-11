const koa = require('koa');
const router = require('@koa/router')();
const app = new koa();

const { port } = process.env;

router.get('/', async (ctx) => {
  ctx.body = 'hello world';
  ctx.status = 200;
});

app.use(router.routes());

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
