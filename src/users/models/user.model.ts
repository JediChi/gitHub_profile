import { AutoIncrement, Column, PrimaryKey, Table } from 'sequelize-typescript';
import { Auditable } from 'src/users/models/auditable.model';

import * as moment from 'moment-timezone';

@Table({
  tableName: 'users',
})
export class User extends Auditable {
  @PrimaryKey
  @AutoIncrement
  @Column({
    allowNull: false,
  })
  id: number;

  @Column({
    allowNull: false,
    unique: true,
  })
  slack_name: string;

  @Column({
    allowNull: false,
  })
  current_day: string;

  @Column({
    allowNull: false,
  })
  password: string;

  @Column({
    allowNull: false,
  })
  utc_time: string;

  @Column({
    allowNull: false,
  })
  track: string;

  @Column({
    allowNull: false,
  })
  github_file_url: string;

  @Column({
    allowNull: false,
  })
  github_repo_url: string;
}
