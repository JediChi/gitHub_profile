import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Get,
  Query,
  Res,
} from '@nestjs/common';
import { UserService } from 'src/users/services/user.service';
import { CreateUserRequestDto } from 'src/users/dto/request/create.user.request.dto';
import { ResponseData } from 'src/users/dto/response/data.response.dto';
import { IUser } from 'src/users/interfaces/user.interface';
import { GetUser } from 'src/decorators/get_user.decorator';
import { FindUserRequestDto } from 'src/users/dto/request/get.user.query.request.dto';

@Controller('api')
export class UserController {
  constructor(private user_service: UserService) {}

  @Post('/register')
  async create_user(
    @Body() user: CreateUserRequestDto,
  ): Promise<ResponseData<IUser>> {
    const result = await this.user_service.create_user(user);
    return {
      status: HttpStatus.OK,
      message: 'User account created successfully',
      data: result,
    };
  }

  @Get()
  async get_user(
    @Query() query: FindUserRequestDto,
    @Res() res,
  ): Promise<IUser> {
    const result = await this.user_service.findAll({}, query);
    const status = HttpStatus.OK;

    return res.status(HttpStatus.OK).send({
      slack_name: result.slack_name,
      current_day: result.current_day,
      utc_time: result.utc_time,
      track: result.track,
      github_file_url: result.github_file_url,
      github_repo_url: result.github_repo_url,
      status,
    });
    // return res.status(200){

    //   message: 'Auth data retrieved successfully',
    //   data: result,
    // };
  }
}
