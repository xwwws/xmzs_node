import express from 'express';
import List from "./router/list.js";
import User from "./router/user.js";
import LoggerMiddleware from "./middleware/logger.js";
import preventHotLinking from "./middleware/HotLingking.js";
import ReqResHeaders from "./router/reqResHeaders.js";
const PORT = 3000
const app = express();
// 静态资源
app.use("/static", express.static('static'))
// 防盗链
app.use(preventHotLinking)
// logger
app.use(LoggerMiddleware)
// json
app.use(express.json());

app.use('/list', List)
app.use('/user', User)
app.use('/req-res-headers', ReqResHeaders)

app.get('/', (req, res) => {
  res.send('demo');
});

app.listen(3000, () => {
  console.log('');
  console.log('');
  console.log(`connect success on http://localhost:${PORT}`);
});
