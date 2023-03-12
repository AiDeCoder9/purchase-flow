import { PNGImage } from '@/assets/images';
import React from 'react';
import { IPackageItem } from './packageSchema';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/inputs/Button';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { publicPath } from '@/routes/publicRoutes';
import { sanitizeURL } from '@/utils/constants';
interface PackageItemProps {
  packageDetail: IPackageItem;
}
export default function PackageItem(props: PackageItemProps) {
  const { packageDetail } = props;
  const navigate = useNavigate();
  return (
    <div className="col-sm-6 col-md-4 mt-3">
      <div className="package">
        <img src={PNGImage} alt={packageDetail.title} />
        <h5 className="package-title">{packageDetail.title}</h5>
        <div className="package-body">
          <p className="package-price">${packageDetail.price}</p>
          <ul className="package-list">
            {packageDetail.inclusions.map((item, index) => {
              return <li key={item + index}>{item}</li>;
            })}
          </ul>
          <Button
            className="package-btn"
            onClick={() =>
              navigate(sanitizeURL(publicPath.packageDetail, { packageId: packageDetail.id }))
            }>
            <AiOutlineArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
