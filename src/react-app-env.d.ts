/// <reference types="react-scripts" />

type Primitive = string | boolean | number;
declare module '@skillvestors/llapiclient';

interface APIDetailType {
  /**Query Keys Action Name */
  queryKeyName: string;
  /**Request API URI */
  controllerName: string;
  /**Request Method; Defaults as GET */
  requestMethod?: RequestMethod;
  /**Request Body Type */
  requestBodyType?: RequestBodyType;
}

type RequestDataType = Primitive & (File | Array | { [key: string]: RequestData });

interface BasicResponse {
  count: number;
}
interface IMedia {
  extension: string;
  height: number;
  id: string;
  name: string;
  type: string;
  url: string;
  width: 200;
}
