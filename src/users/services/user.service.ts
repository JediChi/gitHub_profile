import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/models/user.model';
import { CreateUserRequestDto } from 'src/users/dto/request/create.user.request.dto';
import { IUser } from 'src/users/interfaces/user.interface';

import * as argon from 'argon2';
import * as moment from 'moment';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private user_model: typeof User,
  ) {}

  async create_user(user: CreateUserRequestDto): Promise<IUser> {
    const currentDay = moment().tz('UTC').format('dddd');
    const utcTime = new Date().toISOString();

    const password = await argon.hash(user.password);
    const [result, created] = await this.user_model.findOrCreate({
      where: { slack_name: user.slack_name },
      defaults: {
        ...user,
        password,
        current_day: currentDay,
        utc_time: utcTime,
      },
    });

    if (!created) {
      throw new BadRequestException('user already exist');
    }

    return {
      slack_name: result.slack_name,
      track: result.track,
      current_day: result.current_day,
      utc_time: result.utc_time,
      github_file_url: result.github_file_url,
      github_repo_url: result.github_repo_url,
    };
  }

  async findAll(where?: any, query?: any): Promise<IUser | null> {
    const result = await this.user_model.findOne({
      where: {
        ...where,
        ...query,
      },
    });
    return {
      slack_name: result.slack_name,
      track: result.track,
      current_day: result.current_day,
      utc_time: result.utc_time,
      github_file_url: result.github_file_url,
      github_repo_url: result.github_repo_url,
    };
  }
}
