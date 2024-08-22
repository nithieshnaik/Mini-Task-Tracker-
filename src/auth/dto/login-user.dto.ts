// src/auth/dto/login-user.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
