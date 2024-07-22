import express from "express";

const ReqResHeaders = express.Router();

ReqResHeaders.get('/info', (req, res) => {



  res.json({
    code: 200,
    message: 'success',
  })
})

export default ReqResHeaders
