exports.getAllPost = (req, res) => {
  return res.status(200).json({
    message: 'Berhasil mendapatkan Post'
  })
}

exports.getPost = (req, res) => {
  return res.status(200).json({
    message: 'Berhasil mendapatkan Post dengan id ' + req.params.id
  })
}

exports.createPost = async (req, res) => {
  return res.status(201).json({
    message: 'Berhasil membuat Post'
  })
}

exports.updatePost = (req, res) => {
  return res.status(200).json({
    message: 'Berhasil mengubah Post'
  })
}

exports.deletePost = (req, res) => {
  return res.status(200).json({
    message: 'Berhasil menghapus Post'
  })
}