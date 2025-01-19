import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class CreatedUpdatedEntity {
  @Column({ nullable: true })
  createdBy?: string;

  @CreateDateColumn()
  createdDate?: Date;

  @Column({ nullable: true })
  updatedBy?: string;

  @UpdateDateColumn()
  updatedDate?: Date;
}
