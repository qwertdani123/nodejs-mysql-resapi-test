import Express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routers.js';


const app = Express();

app.use(Express.json()); //middleware para que el servidor entienda json

app.use(indexRoutes);
app.use("/api",employeesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: "endpoint not found"}); //si no encuentra la ruta pasa por este middleware y devuelve ese mjs
});

export default app; //exportamos app para poder usarlo en otros archivos