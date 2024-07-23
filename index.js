import express from 'express';
import List from "./router/list.js";
import User from "./router/user.js";
import LoggerMiddleware from "./middleware/logger.js";
import preventHotLinking from "./middleware/HotLingking.js";
import ReqResHeaders from "./router/reqResHeaders.js";
import { getLocalIPs } from "./utils/index.js";
import CORS from "./middleware/CORS.js";
const PORT = 3000
const app = express();
// 静态资源
app.use("/static", express.static('static'))
// 跨域
app.use('*', CORS)
// 防盗链
app.use(preventHotLinking)
// logger
app.use(LoggerMiddleware)
// json
app.use(express.json());
app.get('/', (req, res) => {
  res.redirect(301, '/static/index.html');
})
app.use('/list', List)
app.use('/user', User)
app.use('/req-res-headers', ReqResHeaders)


app.listen(3000, () => {
  getLocalIPs().forEach(ip => {
    console.log(`connect success http://${ip}:${PORT}`)
  })
});
