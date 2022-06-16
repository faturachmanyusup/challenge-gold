const UserModel = require('../models/customer.model');

exports.register = async (req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      pass: req.body.password
    };

    await UserModel.register(newUser);
  
    return res.status(201).json({
      message: 'Berhasil mendaftarkan user baru.',
      user_email: newUser.email
    })
  } catch (err) {
    return res
      .status(err.status || 500)
      .json({
        message: err.message || 'Internal server error.',
      })
  }
}

exports.updatePassword = async (req, res) => {
  try {
    await UserModel.updatePassword(req.body.id, req.body.password);
  
    return res.status(200).json({
      message: 'Berhasil merubah password.'
    })
  } catch (err) {
    return res
      .status(err.status || 500)
      .json({
        message: err.message || 'Internal server error.',
      })
  }
}

exports.login = (req, res) => {
  const email = req.body.email;

  return res.status(201).json({
    message: 'Berhasil login.',
    user: email
  })
}