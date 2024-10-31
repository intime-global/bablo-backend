import { UsersCollection } from '../db/models/users.js';

export const getUserById = async (id) => {
  return await UsersCollection.findById(id);
};

export const createUser = async (payload) => {
  return await UsersCollection.create(payload);
};

export const updateUser = async (id, payload) => {
  const rawResult = await UsersCollection.findByIdAndUpdate(
    {
      _id: id,
    },
    payload,
    {
      new: true,
      includeResultMetadata: true,
    },
  );

  if (!rawResult) return null;

  return rawResult.value;
};
