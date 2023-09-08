import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserRequestDto {
  @IsNotEmpty()
  @IsString()
  slack_name: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  current_day: string;

  @IsNotEmpty()
  @IsString()
  utc_time: string;

  @IsNotEmpty()
  @IsString()
  track: string;

  @IsNotEmpty()
  @IsString()
  github_file_url: string;

  @IsNotEmpty()
  @IsString()
  github_repo_url: string;
}
