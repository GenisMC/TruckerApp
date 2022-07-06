const express = require("express")
const router = express.Router()
const signUpTemplateCopy = require("../models/SignUpModels")
const bcrypt = require("bcrypt")

router.post("/signup", async (req, res) => {
  const saltPassword = await bcrypt.genSaltSync(10)
  const hashPassword = await bcrypt.hashSync(req.body.password, saltPassword)
  const signUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  })
  signUpUser
    .save()
    .then(data => {
      console.log(data)
      res.json(data)
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})

module.exports = router
