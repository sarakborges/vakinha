import { ResultType } from '@/Utils/Types/Result.type'

export type PaginationType<T> = {
  results: ResultType<T | undefined>
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
