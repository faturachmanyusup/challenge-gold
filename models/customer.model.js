const client = require('../config/db');

exports.login = () => {
  
}

exports.register = (newUser) => {
  const query = `
    INSERT INTO customers(name, email, pass, created_at)
    VALUES('${newUser.name}', '${newUser.email}', '${newUser.pass}', '${new Date().toISOString()}')
  `;

  return new Promise((resolve, reject) => {
    client.query(query, (err, res) => {
      if (err) reject(err);

      resolve(res);
    })
  })
}

exports.updatePassword = (id, newPass) => {
  const date = new Date();
  const ss = date.getSeconds();
  const mm = date.getMinutes();
  const hh = date.getHours();
  const dd = date.getDate();
  const MM = date.getMonth() + 1;
  const yyyy = date.getFullYear();

  const query = `
    UPDATE customers
    SET 
      pass = '${newPass}',
      updated_at = '${yyyy}-${MM}-${dd} ${hh}:${mm}:${ss}'
    WHERE id = ${id}
  `;

  return new Promise((resolve, reject) => {
    client.query(query, (err, res) => {
      if (err) reject(err);

      resolve(res);
    })
  })
}