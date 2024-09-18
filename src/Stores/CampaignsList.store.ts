import { ref } from "vue";

import CampaignApi from "@/Apis/Campaign.api";

let campaignsListData = ref();
let isLoading = ref(false);

const getCampaignsListData = async (page?: number) => {
  isLoading.value = true;
  const campaignReq = await CampaignApi.getAll(page);

  campaignsListData.value = campaignReq?.results;
  isLoading.value = false;
};

export default {
  isLoading,
  campaignsListData,
  getCampaignsListData,
};
