const koa = require('koa')
const app = new Koa();
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(PORT)
