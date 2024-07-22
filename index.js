import express from 'express';
import List from "./router/list.js";
import User from "./router/user.js";
import LoggerMiddleware from "./middleware/logger.js";

const app = express();
app.use(LoggerMiddleware)
app.use(express.json());

app.use('/list', List)
app.use('/user', User)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
