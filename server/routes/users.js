const express = require('express')
const router = express.Router()

// Register a user. Public access
router.post('/', (req, res) => {
    res.send('Registers a user')
})

module.exports = router;