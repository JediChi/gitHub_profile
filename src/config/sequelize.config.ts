import { registerAs } from '@nestjs/config';
import { Dialect } from 'sequelize/types';
import { config } from 'dotenv';

config();

const sql_dialect = process.env.DATABASE_DIALECT ?? 'mysql';

export const sequelize_config_name = () => 'sequelize';

export const sequelize_config = () => ({
  dialect: sql_dialect as Dialect,
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: parseInt(process.env.DATABASE_PORT ?? '3306'),
  username: process.env.DATABASE_USER ?? 'root',
  password: process.env.DATABASE_PASSWORD ?? '',
  database: process.env.DATABASE_NAME ?? 'database',
  autoLoadModels: true,
  synchronize: false,
  logging: false,
});

export default registerAs(sequelize_config_name(), sequelize_config);
