const db = require("../connection.js");

const Product = function(product) {
  this.created_at = product.created_at;
  this.updated_at = product.updated_at;
  this.sku = product.sku;
  this.name = product.name;
  this.description = product.description;
  this.stock = product.stock;
  this.price = product.price;
};


Product.create = (data) => {
    return new Promise(function(resolve,reject) {
        db.query("INSERT INTO products SET ?", data, (err, res) => {
            if (err) throw err;
            resolve(true);
        });
    });
};

Product.findAllLatest = () => {
  return new Promise(function(resolve,reject) {
    db.query("SELECT * FROM products ORDER BY id desc",(err, res) => {
          if (err) throw err;
          resolve(res);
        }
    );
  });
};

Product.findById = (id) => {
  return new Promise((resolve,reject)=> {
    db.query(
        "SELECT * FROM products where id = ?",
        [id],
        (err, res) => {
          if (err) throw err;

          if (res.length) {
            console.log("found product: ", res[0]);
            resolve(res[0]);
          } else {
            resolve(null);
          }
        }
    );
  });
};

Product.deleteById = (id) => {
    return new Promise((resolve, reject)=>{
        db.query(
            "DELETE FROM products WHERE id = ?",
            [ id],
            (err, res) => {
                if (err) throw err;

                if (res.affectedRows === 0) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            }
        );
    });

};


Product.updateById = (id, data) => {
  return new Promise((resolve, reject)=>{
      db.query(
          "UPDATE products SET sku = ?, name = ?, description = ?, stock = ?, price = ? WHERE id = ?",
          [data.email, data.name, data.description, data.stock, data.price, id],
          (err, res) => {
              if (err) throw err;

              if (res.affectedRows === 0) {
                  resolve(false);
              } else {
                  resolve(true);
              }
          }
      );
  });

};

module.exports = Product;