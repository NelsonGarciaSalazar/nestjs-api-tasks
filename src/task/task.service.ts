import { Injectable } from '@nestjs/common';
import { ITask } from './task.interface';
import { TaskDto } from './task-dto/task-dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  tasks: ITask[] = [];

  create(taskDto: TaskDto): ITask {
    const task = {
      id: uuidv4(),
      ...taskDto,
    };
    this.tasks.push(task);
    return task;
  }

  finAll(): ITask[] {
    return this.tasks;
  }

  finOne(id: string): ITask {
    return this.tasks.find((t) => t.id === id);
  }

  update(id: string, taskDto: TaskDto): ITask {
    const newTask = { id, ...taskDto };
    this.tasks = this.tasks.map((t) => (t.id === id ? newTask : t));
    return newTask;
  }

  delete(id: string): string {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    return 'Task deleted';
  }
}
