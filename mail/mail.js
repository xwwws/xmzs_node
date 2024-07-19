import jsYaml from "js-yaml";
import nodemailer from "nodemailer";
import http from "http";
import url from "url";
import fs from "fs";
// 读取配置文件
const mallConfig = jsYaml.load(fs.readFileSync("./mail/mail.yaml", "utf8"));
/**
 * 初始化邮件服务
 */
const transporter = nodemailer.createTransport({
  service: "qq", // 服务商
  port: 465, // 端口
  host: "smtp.qq.com",
  auth: {
    user: mallConfig.user, // 用户名
    pass: mallConfig.pass, // 密码
  }
});

const app = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);
  const { method } = req;

  if (method === "POST" && pathname === "/send/mail") {
    console.log("收到邮件请求");
    let data = ''
    req.on("data", (chunk) => {
      data += chunk
    })
    req.on("end", () => {
      const { to, subject, text } = JSON.parse(data)
      console.log("收到邮件请求", to, subject, text);
      transporter.sendMail({
        from: mallConfig.user,
        to,
        subject,
        text
      }, (err, info) => {
        if (err) {
          console.log("邮件发送失败", err);
          res.end('fail');
        } else {
          console.log("邮件发送成功");
          res.end('success');
        }
      })
    })
  }
});


app.listen(3000, () => console.log("Listening on port 3000"));