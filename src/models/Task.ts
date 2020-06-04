import * as dayjs from 'dayjs';

function isNullOrUndefined(object: any): boolean {
  if (object === null || object === undefined)
    return true;
  return false;
}

class Task {
  public id?: number;
  public text: string;
  public date: dayjs.Dayjs;
  public completed: boolean;
  public monthly: boolean;

  public constructor(params: { id?: number, text: string, date?: Date, completed?: boolean, monthly?: boolean }) {
    // id
    if (!isNullOrUndefined(params.id)) {
      this.id = params.id;
    }

    // text
    this.text = params.text;

    // date
    if (!isNullOrUndefined(params.date)) {
      this.date = dayjs(params.date);
    } else {
      this.date = dayjs();
    }

    // completed
    if (!isNullOrUndefined(params.completed)) {
      this.completed = params.completed!;
    } else {
      this.completed = false;
    }

    // monthly
    if (!isNullOrUndefined(params.monthly)) {
      this.monthly = params.monthly!;
    } else {
      this.monthly = false;
    }
  }
}

export default Task;
