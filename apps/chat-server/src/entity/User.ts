import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index({ unique: true })
  @Column({
    type: 'varchar',
    comment: 'user name',
    length: 30,
  })
  name: string;

  @Column({
    type: 'varchar',
    comment: 'user email',
    length: 80,
    unique: true,
  })
  email: string;

  @Column({ type: 'varchar', comment: 'user password', length: 255 })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleted: Date;
}
