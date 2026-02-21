import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  const { email, password } = req.body

  const candidate = await User.findOne({ email })
  if (candidate) {
    return res.status(400).json({ message: 'Пользователь уже существует' })
  }

  const hash = await bcrypt.hash(password, 10)
  const user = await User.create({ email, password: hash })

  res.json({ message: 'Регистрация успешна' })
}

export const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) {
    return res.status(400).json({ message: 'Пользователь не найден' })
  }

  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) {
    return res.status(400).json({ message: 'Неверный пароль' })
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )

  res.json({ token })
}
