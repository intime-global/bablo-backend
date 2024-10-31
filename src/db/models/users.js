import { model, Schema } from 'mongoose';

const usersSchema = new Schema(
  {
    bablo: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const UsersCollection = model('users', usersSchema);
