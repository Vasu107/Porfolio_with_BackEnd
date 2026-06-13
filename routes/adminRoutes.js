const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'replace-with-a-secret'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'vasudevyadav3107@gmail.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Vasudev@3107'

router.post('/login', (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Invalid admin credentials' })
  }

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '4h' })
  res.json({ token })
})

module.exports = router
