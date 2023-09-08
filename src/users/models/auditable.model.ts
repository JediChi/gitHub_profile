import { Model, Column, CreatedAt, UpdatedAt } from 'sequelize-typescript';

export class Auditable extends Model {
  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}
