import express from "express";

const ReqResHeaders = express.Router();

ReqResHeaders.post('/info', (req, res) => {
  res.json({
    code: 200,
    message: req.method,
  })
})

// 自定义头
ReqResHeaders.post('/custom', (req, res) => {
  res.setHeader('wz-token', 'wz')
  // 抛出自定义响应头
  res.setHeader('Access-Control-Expose-Headers', 'wz-token')
  res.json({
    code: 200,
    message: {
      method: req.method,
      headers: req.headers
    }
  })
})

// serve-sent-events
/**
 * 全双工通讯
 * websocket 实时通讯
 */
/**
 * 单工通讯
 * 大屏项目 后端需要实时返回 前端只用建立链接
 * 后端可以实时返回数据
 *
 */
ReqResHeaders.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream') // sse
  // setInterval(() => {
  //   res.write('data: ' + Date.now() + '\n\n') // sse
  // }, 1000)
  setInterval(() => {
    res.write("event: test\ndata: 'test'\n\n")
  }, 3000)
})




export default ReqResHeaders
