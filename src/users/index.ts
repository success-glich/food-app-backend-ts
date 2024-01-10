import {
  Column,
  Table,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  Default,
} from "sequelize-typescript";

enum UserType {
  Client = "client",
  Admin = "admin",
}

@Table({
  timestamps: true,
  tableName: "users",
  modelName: "User",
})
class User extends Model {
  @Default(DataType.UUIDV4)
  @Column({
    primaryKey: true,
    type: DataType.UUID,
  })
  declare id: string;

  @Column({ type: DataType.STRING })
  declare userName: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  declare email: string;

  @Column({ type: DataType.STRING })
  declare password: string;

  @Default(UserType.Client)
  @Column({ type: DataType.STRING })
  declare userType: UserType;

  @Column({ type: DataType.STRING })
  declare profile: String;

  @CreatedAt
  @Column
  declare created_at: Date;

  @UpdatedAt
  @Column
  declare updated_at: Date;
}

export default User;
