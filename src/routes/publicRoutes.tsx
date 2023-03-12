import Layout from '@/components/display/Layout';
import { lazy } from 'react';
const ContentType = lazy(() => import('@/screen/ContentType/ContentType'));
const Packages = lazy(() => import('@/screen/Packages/Packages'));
const PackageDetail = lazy(() => import('@/screen/PackageDetail/PackageDetail'));

import { RouteProperties } from './index';

export const root = '/';

export const publicPath = {
  contentType: root,
  packages: root + 'packages/:id',
  packageDetail: root + 'packages/detail/:packageId'
};

const publicRoutes: RouteProperties[] = [
  {
    path: '/',
    element: Layout,
    index: true,
    children: [
      {
        path: publicPath.contentType,
        element: ContentType
      },
      {
        path: publicPath.packages,
        element: Packages
      },
      {
        path: publicPath.packageDetail,
        element: PackageDetail
      }
    ]
  }
];
export default publicRoutes;
