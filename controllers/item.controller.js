const ItemModel = require('../models/item.model');

class ItemController {
  static async addItem(req, res) {
    try {
      if (!req.body.name) throw {
        status: 400,
        message: 'parameter name tidak boleh kosong.'
      }

      if (!req.body.price) throw {
        status: 400,
        message: 'parameter price tidak boleh kosong.'
      }

      const newItem = {
        name: req.body.name,
        price: req.body.price,
        created_at: new Date().toISOString(),
      }
  
      await ItemModel.add(newItem);
  
      return res.status(201).json({
        message: 'Berhasil menmbahkan item dengan nama ' + newItem.name
      })
    } catch (err) {
      return res
        .status(err.status ||  500)
        .json({ message: err.message || 'Internal server error' })
    }
  }

  static getByID(req, res) {
    return res.status(200).json({
      message: 'Berhasil mendapatkan items',
      data: {
        id: req.params.id,
        name: 'Iphone 10',
        price: 10_000
      }
    })
  }

  static async getAllItem(req, res) {
    const items = await ItemModel.getAll();

    return res.status(200).json({
      message: 'Berhasil mendapatkan items',
      data: items
    })
  }

  static updateItem(req, res) {
    const itemID = req.params.id;
    const price = req.body.price;

    return res.status(200).json({
      message: 'Berhasil merubah item dengan id ' + itemID,
      newPrice: price
    })
  }

  static async deleteItem(req, res) {
    try {
      if (!req.body.id) throw { status: 400, message: 'parameter id tidak boleh kosong' };

      await ItemModel.delete(req.body.id);

      return res.status(200).json({
        message: 'Berhasil menghapus item dengan id ' + req.body.id
      })
    } catch (err) {
      return res
        .status(err.status ||  500)
        .json({ message: err.message || 'Internal server error' })
    }
  }
}

module.exports = ItemController;