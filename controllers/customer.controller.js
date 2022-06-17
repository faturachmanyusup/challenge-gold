const { customers: Customer } = require('../models');

exports.register = async (req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      pass: req.body.password
    };

    await Customer.create(newUser);
  
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
    await Customer.update({ pass: req.body.password }, {
      where: {
        id: req.body.id
      }
    });
  
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

exports.login = async (req, res) => {
  try {
    let user = await Customer.findOne({
      attributes: ['id', 'name', 'email'],
      where: {
        email: req.body.email,
        pass: req.body.password
      }
    })

    user = user?.dataValues;

    if (!user) throw {
      status: 400,
      message: 'Username atau password tidak sesuai.'
    }
  
    return res.status(201).json({
      message: 'Berhasil login.',
      user: req.body.email
    })
  } catch (err) {
    return res
      .status(err.status || 500)
      .json({
        message: err.message || 'Internal server error.',
      })
  }
}