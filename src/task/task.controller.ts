import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskDto } from './task-dto/task-dto';
import { TaskService } from './task.service';
import { ITask } from './task.interface';

@Controller('api/v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post()
  async create(@Body() taskDto: TaskDto): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('Something wrong'), 15000);
      try {
        const result = this.taskService.create(taskDto);
        if (result !== null) {
          resolve(result);
        } else {
          reject(new Error('The service fail'));
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  @Get()
  finAll() {
    return this.taskService.finAll();
  }

  @Get(':id')
  finOne(@Param('id') id: string) {
    return this.taskService.finOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() taskDto: TaskDto): ITask {
    return this.taskService.update(id, taskDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return this.taskService.delete(id);
  }
}
