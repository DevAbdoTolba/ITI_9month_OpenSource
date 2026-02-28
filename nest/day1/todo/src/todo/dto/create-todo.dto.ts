import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  title: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  task: string;

  @IsBoolean()
  done: boolean;
}
