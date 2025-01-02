import { Repository } from 'typeorm';
import { myDataSource } from '../database/dataSource';
import { UserEntity } from '../entities/user.entity';
import { User } from '../types/response';

export class UserService {
  private userRepository: Repository<UserEntity>;

  constructor() {
    this.userRepository = myDataSource.getRepository(UserEntity);
  }

  // Get all users
  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Get a user by ID
  async getUserById(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  // Create a new user
  async createUser(data: Partial<User>): Promise<User> {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  // Update a user
  async updateUser(id: number, data: Partial<User>): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      return null;
    }
    Object.assign(user, data);
    return this.userRepository.save(user);
  }

  // Delete a user
  async deleteUser(id: number): Promise<boolean> {
    const result = await this.userRepository.delete(id);
    return result.affected !== 0;
  }
}
