import 'reflect-metadata';
require('dotenv').config();
// import './utils/response/customSuccess';
import express, { Request, Response, response } from 'express';
import { createConnection } from "typeorm";
import * as ormconfig from '../ormconfig';
import { errorHandler } from './middleware';
import { UserController, PostController } from './controller';

class Server {
    private postController: PostController;
    private userController: UserController
    private app: express.Application;

    constructor() {
        this.app = express(); // init the application
        this.configuration();
        this.routes();
    }

    public configuration() {
        this.app.set('port', process.env.PORT || 3001);
        this.app.use(express.json());
        this.app.use(errorHandler);

    }

    public async routes() {
        await createConnection(ormconfig);

        this.postController = new PostController();
        this.userController = new UserController();

        this.app.get("/", (req: Request, res: Response) => {
            res.send("Hello world!");
        });

        this.app.use(`/api/posts/`, this.postController.router);
        this.app.use(`/api/auth/`, this.userController.router);


    }

    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is listening ${this.app.get('port')} port.`);
        });
    }
}

const server = new Server();
server.start();