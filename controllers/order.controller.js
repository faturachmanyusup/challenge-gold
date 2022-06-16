const OrderModel = require('../models/order.model');
const ItemModel = require('../models/item.model');

exports.getAllOrder = (req, res) => {
  return res.status(200).json({
    message: 'Berhasil mendapatkan Order'
  })
}

exports.getOrder = (req, res) => {
  return res.status(200).json({
    message: 'Berhasil mendapatkan Order dengan id ' + req.params.id
  })
}

exports.createOrder = async (req, res) => {
  try {
    // 1. Dapatkan data item yg diminta (termasuk validasi item ada atau tidak)
    const orderItem = await ItemModel.getByID(req.body.item_id);
  
    const newOrder = {
      cust_id: req.body.cust_id,
      item_id: req.body.item_id,
      qty: req.body.qty,
      // amount = harga dari item yg diminta + request qty
      amount: orderItem.price * req.body.qty,
    }
  
    await OrderModel.create(newOrder);
  
    return res.status(201).json({
      message: 'Berhasil membuat Order'
    })
  } catch (err) {
    return res
      .status(err.status ||  500)
      .json({ message: err.message || 'Internal server error' })
  }
}

exports.updateOrder = (req, res) => {
  return res.status(200).json({
    message: 'Berhasil mengubah Order'
  })
}

exports.deleteOrder = (req, res) => {
  return res.status(200).json({
    message: 'Berhasil menghapus Order'
  })
}