class ItemController {
  static addItem(req, res) {
    const itemName = req.body.itemName;

    return res.status(201).json({
      message: 'Berhasil menmbahkan item dengan nama ' + itemName
    })
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

  static getAllItem(req, res) {
    return res.status(200).json({
      message: 'Berhasil mendapatkan items',
      data: [
        { id: 1, name: 'Iphone 10' },
        { id: 2, name: 'Samsung Ultra Light' }
      ]
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
}

module.exports = ItemController;