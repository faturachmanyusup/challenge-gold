const client = require('../config/db');

exports.getAll = async () => {
  let query = `SELECT * FROM items;`;

  return new Promise((resolve, reject) => {
    client.query(query, (err, res) => {
      if (err) reject(err);
      
      resolve(res.rows);
    })
  })
}

exports.getByID = async (id) => {
  let query = `
    SELECT * FROM items
    WHERE id = '${id}';
  `;

  return new Promise((resolve, reject) => {
    client.query(query, (err, res) => {
      if (err) reject(err);
      if (!res.rows.length) reject({
        status: 400,
        message: 'Item tidak ditemukan'
      });

      resolve(res.rows[0]);
    })
  })
}

exports.add = async (item) => {
  let query = `
    INSERT INTO items(name, price, created_at)
    VALUES('${item.name}', ${item.price}, '${item.created_at}')
  `;

  return new Promise((resolve, reject) => {
    client.query(query, (err, res) => {
      if (err) reject(err);
      
      resolve(res);
    })
  })
}

exports.delete = async (id) => {
  let query = `
    DELETE FROM items
    WHERE id = ${id}
  `;

  return new Promise((resolve, reject) => {
    client.query(query, (err, res) => {
      if (err) reject(err);
      if (res.rowCount === 0) {
        reject({ 
          status: 400,
          message: `Data dengan id ${id} tidak ditemukan.`
        });
      }

      resolve(res);
    })
  })
}