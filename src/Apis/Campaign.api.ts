import campaignMock from '@/Apis/Mocks/Campaign.mock.json'

import { CampaignType } from '@/Utils/Types/Campaign.type'
import {
  RequestResultType,
  PaginatedRequestResultType
} from '@/Utils/Types/Request.type'
import { paginatedRequest, simpleRequest } from './Request.api'

const getById = async (
  id: string
): Promise<RequestResultType<CampaignType>> => {
  const campaign = await simpleRequest({
    req: campaignMock
  })

  return {
    results: campaign.results.find(
      (mockItem: CampaignType) => mockItem?.id === id
    )
  }
}

const getAll = async (
  page?: number
): Promise<PaginatedRequestResultType<CampaignType[]>> => {
  const campaigns = await paginatedRequest({
    req: campaignMock,
    currentPage: page || 1
  })

  return {
    ...campaigns
  }
}

export default {
  getById,
  getAll
}
