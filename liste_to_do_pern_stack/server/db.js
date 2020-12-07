//Pour utiliser pg-pool, nous devons d'abord créer une instance d'un pool
const Pool = require('pg').Pool;

//Par défaut le pool utilise la même configuration quelle que soit 
//la version de `pg` préalablement installée.
const pool = new Pool({
    user: "postgres",
    password: "@PG16XMbb10k",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;