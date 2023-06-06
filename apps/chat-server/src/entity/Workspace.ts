import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('workspace')
export class Workspace {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index({ unique: true })
  @Column({
    type: 'varchar',
    comment: 'Workspace Name',
    length: 30,
  })
  name: string;

  @Column({
    type: 'varchar',
    comment: 'Workspace url',
    length: 80,
    unique: true,
  })
  url: string;

  @Column({ type: 'varchar', comment: 'owner Id', length: 255 })
  ownerId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleted: Date;
}
