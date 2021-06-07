const express = require('express')
const router = express.Router()

// get user's budgets. Private access
router.get('/', (req, res) => {
    res.send('Get user budgets')
})

// add a new budget private access
router.post('/', (req, res) => {
    res.send('add budget')
})

// update budget. private access
router.put('/:id', (req, res) => {
    res.send('update budget')
})

// auth user and get token. private access
router.delete('/:id', (req, res) => {
    res.send('delete budget')
})

module.exports = router;