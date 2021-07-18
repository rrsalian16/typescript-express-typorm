import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('user')
@Unique(['email'])
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  mobile: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

}
