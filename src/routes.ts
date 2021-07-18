import { UserController, PostController } from './controller';
import { Router, Application, Request, Response } from 'express';

export class Routes {

    private postController: PostController;

    private app: Application;
    private router: Router;

    constructor(app: Application) {
        this.app = app;
        this.router = Router();
        this.serverRoutes();
    }

    private serverRoutes() {
        this.postController = new PostController();

        this.app.get("/", (req: Request, res: Response) => {
            res.send("Hello world!");
        });

        // this.app.use(`/api/posts/`, this.postController.router); // Configur
    }


}