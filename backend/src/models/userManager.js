const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (email , hash_password , role ) values (?, ? , ?)`,
      [user.email, user.hash_password, user.role]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set email = ? , hash_password = ?  , role =  ? where id = ?`,
      [user.email, user.hash_password, user.role, user.id]
    );
  }
}

module.exports = UserManager;
