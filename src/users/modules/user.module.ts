import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserService } from 'src/users/services/user.service';
import { User } from 'src/users/models/user.model';
import { UserController } from 'src/users/controllers/user.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
  ],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UsersModule {}
