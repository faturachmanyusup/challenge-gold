const client = require('../config/db');

exports.create = (newOrder) => {
  const query = `
    INSERT INTO orders(item_id, cust_id, qty, amount, created_at)
    VALUES(
      '${newOrder.item_id}',
      '${newOrder.cust_id}',
      ${newOrder.qty},
      ${newOrder.amount},
      '${new Date().toISOString()}'
    )
  `;

  return new Promise((resolve, reject) => {
    client.query(query, (err, res) => {
      if (err) reject(err);

      resolve(res);
    })
  })
}