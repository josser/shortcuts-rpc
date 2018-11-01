const Koa = require('koa')
const app = new Koa();

const PORT = process.env.PORT

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(PORT)
