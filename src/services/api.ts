import type { Currency } from '@/types/currency'
import { api } from './axios'

export const filterCurrency = async (payload: any): Promise<Currency[]> => {
  try {
    const response = await api.post<Currency[]>('/currency', payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (e: any) {
    return [];
  } 
}