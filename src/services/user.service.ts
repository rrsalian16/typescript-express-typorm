import { UserRepository } from './../repository/user.repository';
import { getCustomRepository } from 'typeorm';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async all() {
    return this.userRepository.find();
  }

  async one(id) {
    return this.userRepository.findOne(id);
  }

  async save(body) {
    return this.userRepository.save(body);
  }

  async remove(id) {
    const userToRemove = await this.userRepository.findOne(id);
    await this.userRepository.remove(userToRemove);
  }
}
