import { ResultType } from '@/Utils/Types/Result.type'
import { PaginationType } from '@/Utils/Types/Pagination.type'

export type RequestResultType<T> = {
  results: ResultType<T | undefined>
}

export type PaginatedRequestResultType<T> = PaginationType<T | undefined>
