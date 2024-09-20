import {
  RequestResultType,
  PaginatedRequestResultType
} from '@/Utils/Types/Request.type'

type simpleRequestType = {
  req: Promise<any> | {}
}

type paginatedRequestType = {
  req: Promise<any> | {}
  currentPage?: number
  itemsPerPage?: number
}

export const simpleRequest = async ({
  req
}: simpleRequestType): Promise<RequestResultType<any>> => {
  const request = await req

  return {
    results: request
  }
}

export const paginatedRequest = async ({
  req,
  currentPage,
  itemsPerPage
}: paginatedRequestType): Promise<PaginatedRequestResultType<any>> => {
  const request = await req

  currentPage = currentPage || 1
  itemsPerPage = itemsPerPage || 20

  return {
    results: request.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    ),
    currentPage,
    itemsPerPage,
    totalPages: Array(request).length % itemsPerPage,
    totalItems: Array(request).length
  }
}
