export const auth = (req, res, next) => {
  if (req.session.logged) {
    req.session.touch()
    next()
  } else {
    res.status(400).json({
      success: false,
      message: 'User not register'
    })
  }
}