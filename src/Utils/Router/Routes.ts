import HomePage from '@/Pages/Home/Home.page.vue'
import LoginPage from '@/Pages/Login/Login.page.vue'
import CampaignPage from '@/Pages/Campaign/Campaign.page.vue'
import CampaignsListPage from '@/Pages/CampaignsList/CampaignsList.page.vue'

export const HOME = {
  path: '/',
  name: 'Home',
  component: HomePage
}

export const LOGIN = {
  path: '/login',
  name: 'Login',
  component: LoginPage
}

export const CAMPAIGN = {
  path: '/campaign/:id',
  name: 'Campaign',
  component: CampaignPage
}

export const CAMPAIGNS_LIST = {
  path: '/campaigns/:page',
  name: 'CampaignsList',
  component: CampaignsListPage
}

export default [HOME, LOGIN, CAMPAIGN, CAMPAIGNS_LIST]
