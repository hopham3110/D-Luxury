const express = require("express");
const router = express.Router()
const dotenv = require('dotenv');
dotenv.config()


router.get('/config', (req, res) => {
  return res.status(200).json({
    status: 'OK',
    data: `AdI0estb_3kHNYeqUCeMbSmS-viGndtNTxJ43Nyy4WZ1jZRPzySQoN1RHKfXu_5FSaMQB-7WfuWrCyD0`
  })
})


module.exports = router