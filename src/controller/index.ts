import { RequestBodyType, RequestMethod } from '@/utils/enum';

const apiDetails = {
  mock: {
    controllerName: 'mock',
    queryKeyName: 'GET_MOCK',
    requestBodyType: RequestBodyType.NOAUTH,
    requestMethod: RequestMethod.GET
  }
};

type ApiList = typeof apiDetails;

export const apiList: ApiList = apiDetails;
