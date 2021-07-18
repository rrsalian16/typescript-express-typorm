import { UserService } from '../services';
import { Router, NextFunction, Request, Response } from 'express';
import { validateRequest } from '../middleware';
import { registration } from '../schema/user';

export class UserController {
  public router: Router;
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
    this.router = Router();
    this.routes();
  }

  /**
   * get all the userlist
   * @param request Request
   * @param response Response
   * @returns Response
   */
  public all = async (request: Request, response: Response) => {
    return response.send(await this.userService.all()).json();
  }

  public one = async (request: Request, response: Response) => {
    return response.send(this.userService.one(request.params.id)).json();
  }

  public save = async (request: Request, response: Response) => {
    try {
      return response.send(this.userService.save(request.body)).json();
    } catch (error) {
      return response.status(409).send(error.message);
    }
  }

  public remove = async (request: Request, response: Response) => {
    return response.send(this.userService.remove(request.params.id)).json();
  }

  public routes() {
    this.router.get('/', this.all);
    this.router.post('/', validateRequest(registration), this.save);
    this.router.get('/:id', this.one);
    this.router.delete('/:id', this.remove);
  }
}
