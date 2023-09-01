import axios from 'axios'
import { BankAccount } from '../type/bank-account.type'

export const getBankAccountPath = (id: string) => `/bank-accounts/${id}`

export const getBankAccount = async ({ id }: { id: string }) => {
  const { data } = await axios.get<BankAccount>(getBankAccountPath(id))
  return data
}
