import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import userRouter from '../routes/users.js';

dotenv.config();


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usersPath = '/api/users';

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use( express.json() )

        // Directorio publico
        this.app.use( express.static('public') )

    }

    routes() {

        this.app.use(this.usersPath, userRouter);

    }

    listen(){

        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        })

    }
}

export default Server;
