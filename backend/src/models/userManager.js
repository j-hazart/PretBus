const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (name ,email , hashedPassword , userRole ) values (?, ? , ? , ?)`,
      [user.name, user.email, user.hashedPassword, user.role]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set name = ? , email = ? , hashedPassword = ?  , userRole =  ? where id = ?`,
      [user.name, user.email, user.hashedPassword, user.role, user.id]
    );
  }
}

module.exports = UserManager;
