import { IsBoolean, IsEmail, IsEnum, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Role } from 'src/utils';
import { AVATAR_DEFAULT } from '../../../constants';

export class AccountCreateDto {
  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(50)
  @Matches(/([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*/, {
    message: 'Password must include at least 1 number and 1 character',
  })
  password: string;

  @IsString()
  @MaxLength(200)
  @Matches(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/, {
    message: 'Name contains only alphabets',
  })
  name: string;

  @IsEnum(Role)
  role: Role = Role.TRAVELER;

  @IsOptional()
  @IsString()
  avatar: string = AVATAR_DEFAULT;
}

export class SignInDto {
  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(50)
  @Matches(/([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*/, {
    message: 'Password must include at least 1 number and 1 character',
  })
  password: string;
}

export class GoogleAccountDto {
  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(200)
  name: string;

  @IsEnum(Role)
  role: Role = Role.TRAVELER;

  @IsOptional()
  @IsString()
  avatar: string = AVATAR_DEFAULT;
}

export class EmailConfirmationDto {
  @IsString()
  context: string;

  @IsString()
  email: string;
}

export class FacebookAccountDto {
  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(200)
  name: string;

  @IsEnum(Role)
  role: Role = Role.TRAVELER;

  @IsOptional()
  @IsString()
  avatar: string = AVATAR_DEFAULT;
}

export class resetPasswordTokenDto {
  @IsString()
  token: string;

  @IsBoolean()
  isUsed: false;
}
