import api, { handleError } from '@/services'

export default async (userId) => {
  if (!userId) {
    return handleError({ message: 'user ID is required' })
  }
  const response = await api.get(`users/${userId}`)
  return response.data
}
