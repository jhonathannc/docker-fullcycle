import random from "random-name";
import mysql from "mysql";

// @param res - express res
const handleDatabase = (res) => {
  let connection = null;

  const db_config = {
    host: "db_mysql",
    user: "fullcycle",
    password: "fullcycle",
    database: "fullcycle",
  };

  const init = () => {
    const firstName = random.first();
    const lastName = random.last();
    const fullName = firstName + " " + lastName;

    connection = mysql.createConnection(db_config);
    const sql = `INSERT INTO people(name) values('${fullName}')`;

    connection.query(sql).on("end", () => {
      console.log(`${fullName} inserido no banco!`);
      fetchPeople();
    });
  };

  const fetchPeople = () => {
    const sql = `SELECT name FROM people`;

    connection.query(sql, (error, results, fields) => {
      if (error) throw error;

      let list = "<ul>";
      results.forEach((person) => (list += `<li>${person.name}</li>`));
      list += "</ul>";

      res.send("<h1>Full Cycle Rocks!</h1>" + list);
    });

    connection.end();
  };

  return {
    init,
  };
};

export default handleDatabase;
