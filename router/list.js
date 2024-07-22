import express from "express";


const ListRouter = express.Router();
ListRouter.get("/", (req, res) => {
  res.send("list");
})

export default ListRouter
