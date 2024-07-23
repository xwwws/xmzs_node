const whiteHostList = [
  'http://localhost:63342',
]

export default function(req, res, next) {
  // * 获取不到session
  // * 允许所有资源访问
  res.header("Access-Control-Allow-Origin", whiteHostList.join());
  // res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  // 默认只支持 get post head
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
  // 浏览器cors 默认的Content-Type是 application/x-www-form-urlencoded multipart/form-data text/plain
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
}


/**
 * 预检请求(OPTIONS)需要满足以下条件
 * 浏览器发起的预检请求
 * 1. Content-Type 为 application/json
 * 2. 自定义请求头
 * 3. 非普通请求 (如 PUT、PATCH、DELETE 等)
 */
