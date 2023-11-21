import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class TaskDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  readonly description: string;
  @IsNotEmpty()
  @IsBoolean()
  readonly isDone: boolean;
}
