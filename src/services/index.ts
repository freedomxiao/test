import { getContext } from '@alife/magic-request';

export interface ILatestSuggestionListParams {
  pageNumber: number;
  pageSize: number;
}

export const listLatestSuggestionPages = async (params: ILatestSuggestionListParams) => {
  return getContext('listenu/listLatestSuggestionPages')(params);
};

export const anonymousListLatestSuggestionPages = async (params: ILatestSuggestionListParams) => {
  return getContext('listenu/anonymousListLatestSuggestionPages')(params);
};

export interface ILastRewardsParams {
  limit: number;
}
export const listLastRewards = async (params: ILastRewardsParams) => {
  return getContext('listenu/listLastRewards')(params);
};

export const anonymousListLastRewards = async (params: ILastRewardsParams) => {
  return getContext('listenu/anonymousListLastRewards')(params);
};

export const listProductTrees = async (params: { nameLike: string | null }) => {
  return getContext('listenu/listProductTrees')(params);
};
export const anonymousListProductTrees = async (params: { nameLike: string | null }) => {
  return getContext('listenu/anonymousListProductTrees')(params);
};

export const describePersonalInfo = async () => {
  return getContext('listenu/describePersonalInfo')();
};

export const describePersonalCreditsSummary = async () => {
  return getContext('listenu/describePersonalCreditsSummary')();
};

export interface IListSuggestionPagesParams {
  orderType?: number;
  typeCode?: number;
  statusCode?: number;
  pageNumber: number;
  pageSize: number;
  productIdList?: number[];
  keyword?: string;
}
export const listSuggestionPages = async (params: IListSuggestionPagesParams) => {
  return getContext('listenu/listSuggestionPages')(params);
};

export const anonymousListSuggestionPages = async (params: IListSuggestionPagesParams) => {
  return getContext('listenu/anonymousListSuggestionPages')(params);
};

export const getSuggestionDetail = async (params: { suggestionId: number }) => {
  return getContext('listenu/getSuggestionDetail')(params);
};

export const anonymousGetSuggestionDetail = async (params: { suggestionId: number }) => {
  return getContext('listenu/anonymousGetSuggestionDetail')(params);
};

export interface IListCommentParams {
  suggestionId: number;
  pageNumber: number;
  pageSize: number;
}

export const listSuggestionComments = async (params: IListCommentParams) => {
  return getContext('listenu/listSuggestionComments')(params);
};

export const anonymousListSuggestionComments = async (params: IListCommentParams) => {
  return getContext('listenu/anonymousListSuggestionComments')(params);
};

export interface ICreateCommentParams {
  suggestionId: number;
  toCommentId?: number;
  content: string;
  attachmentList: any[];
}
export const createComment = async (params: ICreateCommentParams) => {
  return getContext('listenu/createComment')(params);
};

export const deleteComment = async (params: { commentId: number }) => {
  return getContext('listenu/deleteComment')(params);
};

export interface IUpdateSuggestionParams {
  suggestionId?: number;
  type: number;
  title: string;
  content: string;
  productId: number;
  isPublic: number;
  channel: number;
  attachmentList: any[];
}

export const createSuggestion = async (params: IUpdateSuggestionParams) => {
  return getContext('listenu/createSuggestion')(params);
};
export const updateSuggestion = async (params: IUpdateSuggestionParams) => {
  return getContext('listenu/updateSuggestion')(params);
};

export interface listPersonalSuggestionPagesParams {
  personalSuggestionType: number;
  pageNumber: number;
  pageSize: number;
}

export const listPersonalSuggestionPages = async (params: listPersonalSuggestionPagesParams) => {
  return getContext('listenu/listPersonalSuggestionPages')(params);
};

export interface IListThematicCampaignsParams {
  statusCodeList: number[];
  pageNumber: number;
  pageSize: number;
}
export const listThematicCampaigns = async (params: IListThematicCampaignsParams) => {
  return getContext('listenu/listThematicCampaigns')(params);
};

export const anonymousListThematicCampaigns = async (params: IListThematicCampaignsParams) => {
  return getContext('listenu/anonymousListThematicCampaigns')(params);
};

export const getCampaignDetail = async (params: { code: string }) => {
  return getContext('listenu/getCampaignDetail')(params);
};

export const anonymousGetCampaignDetail = async (params: { code: string }) => {
  return getContext('listenu/anonymousGetCampaignDetail')(params);
};

export const deleteSuggestion = async (params: { suggestionId: string }) => {
  return getContext('listenu/deleteSuggestion')(params);
};

export const listPersonalCreditsDetailPages = async (params: {
  pageNumber: number;
  pageSize: number;
  monthTimestamp?: number;
  statusCodeList?: string[];
}) => {
  return getContext('listenu/listPersonalCreditsDetailPages')(params);
};

export const listPersonalCampaigns = async (params: { pageNumber: number; pageSize: number }) => {
  return getContext('listenu/listPersonalCampaigns')(params);
};

export const listPersonalCommentPages = async (params: {
  pageNumber: number;
  pageSize: number;
}) => {
  return getContext('listenu/listPersonalCommentPages')(params);
};

export const listPersonalFollowPages = async (params: { pageNumber: number; pageSize: number }) => {
  return getContext('listenu/listPersonalFollowPages')(params);
};

export const listPersonalLikePages = async (params: { pageNumber: number; pageSize: number }) => {
  return getContext('listenu/listPersonalLikePages')(params);
};

export const followSuggestion = async (params: { suggestionId: number }) => {
  return getContext('listenu/followSuggestion')(params);
};

export const unFollowSuggestion = async (params: { suggestionId: number }) => {
  return getContext('listenu/unFollowSuggestion')(params);
};

export const getSuggestionExt = async (params: { suggestionId: number }) => {
  return getContext('listenu/getSuggestionExt')(params);
};

export const likeSuggestion = async (params: { suggestionId: number }) => {
  return getContext('listenu/likeSuggestion')(params);
};

export const unlikeSuggestion = async (params: { suggestionId: number }) => {
  return getContext('listenu/unlikeSuggestion')(params);
};

export const likeComment = async (params: { commentId: number }) => {
  return getContext('listenu/likeComment')(params);
};

export const listPersonalMedal = async (params: { typeIdList: number[] }) => {
  return getContext('listenu/listPersonalMedal')(params);
};

export const listRepeatSuggestionPages = async (params: {
  suggestionId: number;
  pageSize: number;
  pageNumber: number;
}) => {
  return getContext('listenu/listRepeatSuggestionPages')(params);
};

export const anonymousListRepeatSuggestionPages = async (params: {
  suggestionId: number;
  pageSize: number;
  pageNumber: number;
}) => {
  return getContext('listenu/anonymousListRepeatSuggestionPages')(params);
};

export interface ICreateCampaignSuggestionParams {
  code: string;
  typeCode: number;
  suggestionTitle: number;
  suggestionContent: string;
  productId: number;
  suggestionIsPublic: number;
  suggestionAttachmentList: any[];
}

export const createCampaignSuggestion = async (params: ICreateCampaignSuggestionParams) => {
  return await getContext('listenu/createCampaignSuggestion')(params);
};

export const describeSuggestionDistribution = async () => {
  return getContext('listenu/describeSuggestionDistribution')();
};

export const signUpCampaign = async (params: { code: string }) => {
  return getContext('listenu/signUpCampaign')(params);
};

export const getCampaignPermission = async (params: { code: string }) => {
  return getContext('listenu/getCampaignPermission')(params);
};

export const getScoreDetail = async (params: { code: string }) => {
  return getContext('listenu/getScoreDetail')(params);
};

export const getListenuOssPolicy = async (params: { key: string }) => {
  return getContext('listenu/getListenuOssPolicy')(params);
};

export interface IItemListProps {
  id: number;
  score: number;
}
export const createCampaignScore = async (params: {
  code: string;
  id: number;
  itemList: IItemListProps[];
}) => {
  return getContext('listenu/createCampaignScore')(params);
};

export const getListenuOssDownloadUrl = async (params: { url: string }) => {
  return getContext('listenu/getListenuOssDownloadUrl')(params);
};

export const listPersonalCouponPages = async (params: { pageNumber: number; pageSize: number }) => {
  return getContext('listenu/listPersonalCouponPages')(params);
};

export const describeRewardSummary = async () => {
  return getContext('listenu/describeRewardSummary')();
};

export const listHotSuggestionPages = async (params: { pageNumber: number; pageSize: number }) => {
  return getContext('listenu/listHotSuggestionPages')(params);
};

export const anonymousListHotSuggestionPages = async (params: {
  pageNumber: number;
  pageSize: number;
}) => {
  return getContext('listenu/anonymousListHotSuggestionPages')(params);
};

export const unlikeComment = async (params: { commentId: number }) => {
  return getContext('listenu/unlikeComment')(params);
};

export const getCommentDetail = async (params: { commentId: number }) => {
  return getContext('listenu/getCommentDetail')(params);
};

export const updateComment = async (params: {
  commentId: number;
  content: string;
  attachmentList: any[];
}) => {
  return getContext('listenu/updateComment')(params);
};

export const listThematicCampaignSuggestions = async (params: {
  code: string;
  pageNumber: number;
  pageSize: number;
}) => {
  return getContext('listenu/listThematicCampaignSuggestions')(params);
};

export const getProductRecommendPermission = async (params: { productId: number }) => {
  return getContext('listenu/getProductRecommendPermission')(params);
};

export const createProductRecommend = async (params: {
  score: number;
  productId: number;
  remark: string;
  reasonList: string[];
}) => {
  return getContext('listenu/createProductRecommend')(params);
};

export const getCreateSuggestionPermission = async (params: { productId: number }) => {
  return getContext('listenu/getCreateSuggestionPermission')(params);
};

export const checkAccountInfo = async (params: { nickname: string }) => {
  return getContext('listenu/checkAccountInfo')(params);
};

export const updatePersonalInfo = async (params: { nickname: string; profile: string }) => {
  return getContext('listenu/updatePersonalInfo')(params);
};

//self-service-center
export const searchQa = async (content: {
  query: string;
  pageSize: number;
  pageNumber: number;
}) => {
  return getContext('smartservice2/searchQa')(content);
};
export const anonymousSearchQa = async (content: {
  query: string;
  pageSize: number;
  pageNumber: number;
}) => {
  return getContext('smartservice2/anonymousSearchQa')(content);
};
