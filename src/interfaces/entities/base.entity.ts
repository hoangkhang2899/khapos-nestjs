import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  siteId: string;

  @Column({ nullable: true })
  createdBy?: string;

  @CreateDateColumn()
  createdDate?: Date;

  @Column({ nullable: true })
  updatedBy?: string;

  @UpdateDateColumn()
  updatedDate?: Date;
}
