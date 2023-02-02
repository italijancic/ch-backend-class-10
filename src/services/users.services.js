import { User } from '../models/User.model.js'

export const createUser = async (data) => {
  try {
    const foundedUser = await getUser(data.email)

    if (foundedUser) {
      throw new Error('User Already exist')
    } else {
      const createdUser = await User.create(data).lean()
      console.log(createdUser)
      return createdUser
    }

  } catch (error) {
   throw new Error(error.message)
  }
}

export const getUser = async (email) => {
  try {
    const users = await User.find({ email }).lean()
    return users[0]
  } catch (error) {
    throw new Error('Error searching user')
  }
}