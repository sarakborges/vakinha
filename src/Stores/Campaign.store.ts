import { ref } from 'vue'

import CampaignApi from '@/Apis/Campaign.api'

let campaignData = ref()
let isLoading = ref(false)

const getCampaignData = async (id: string) => {
  isLoading.value = true
  const campaignReq = await CampaignApi.getById(id)

  campaignData.value = campaignReq?.results
  isLoading.value = false
}

export default {
  isLoading,
  campaignData,
  getCampaignData
}
