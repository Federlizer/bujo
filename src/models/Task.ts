import * as dayjs from 'dayjs';

class Task {
  id?: number;
  text: string;
  date: dayjs.Dayjs;
  completed: boolean;

  constructor(params: { id?: number, text: string, date?: Date, completed?: boolean }) {
    if (!(params.id === null || params.id === undefined))
      this.id = params.id;

    this.text = params.text;

    if (!(params.date === null || params.completed === undefined))
      this.date = dayjs(params.date);
    else
      this.date = dayjs();

    if (!(params.completed === null || params.completed === undefined))
      this.completed = params.completed;
    else
      this.completed = false;
  }
}

export default Task;
