import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelize_config } from 'src/config/sequelize.config';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    SequelizeModule.forRoot(sequelize_config())
  ],
})
export class AppModule {}
