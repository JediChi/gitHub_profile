import { IsOptional, IsString } from 'class-validator';

export class FindUserRequestDto {
  @IsOptional()
  @IsString()
  slack_name: string;

  @IsOptional()
  @IsString()
  track: string;
}
