import { createPool } from "mysql2/promise.js";
import { 
    DB_HOST, DB_PORT,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
} from "./config.js";

export const pool = createPool({
    host: DB_HOST, //address of the server (se le indica donde esta mi base de datos  si esta en la nuve iria la ip)
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT, //puerto por defecto de mysql
    database: DB_DATABASE,
}) //crea una conexion a la base de datos

//pooll es un objeto que se encarga de manejar las conexiones a la base de datos