"use strict";

const express = require("express");
const bearer = require("../middleware/bearer");
const router = express.Router();
const acl = require("../middleware/acl");

router.get("/:model", bearer, acl("read"), (req, res) => {
  res.status(200).send("you can read the data");
});
router.post("/:model", bearer, acl("create"), (req, res) => {
  res.status(200).send("you can create the data");
});

router.put("/:model/:id", bearer, acl("update"), (req, res) => {
  res.status(200).send("you can update the data");
});

router.delete("/:model/:id", bearer, acl("delete"), (req, res) => {
  res.status(200).send("you can delete the data");
});

router.patch("/:model/:id", bearer, acl("update"), (req, res) => {
  res.status(200).send("you can update the data");
});

module.exports=router
