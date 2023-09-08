import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelize_config } from 'src/config/sequelize.config';
import { config } from 'dotenv';
import { UsersModule } from 'src/users/modules/user.module';
config();

@Module({
  imports: [
    SequelizeModule.forRoot(sequelize_config()),
    UsersModule
  ],
})
export class AppModule {}
