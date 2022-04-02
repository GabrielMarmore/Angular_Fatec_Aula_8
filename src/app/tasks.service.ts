import { Injectable } from '@angular/core';

interface Task {
  name: string;
  weekday: string;
  hour: number;
}
@Injectable()
export class TasksService {
  list: Array<Task> = [];
  constructor() {}

  getList() {
    return this.list;
  }

  add(name: string, weekday: string, hour: number) {
    this.list.push({ name, weekday, hour });
  }

  remove(index: number) {
    this.list.slice(index, 1);
  }
}
