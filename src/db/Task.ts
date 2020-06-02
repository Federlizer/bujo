import sequelize from './index';
import { Model, DataTypes } from 'sequelize';

class Task extends Model {
  public id!: number;
  public text!: string;
  public date!: Date;
  public completed!: boolean;
  public monthly!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAd!: Date;
}

Task.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  text: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
  },
  monthly: {
    type: DataTypes.BOOLEAN,
  },
}, {
  sequelize,
  tableName: 'tasks',
});

export default Task;
