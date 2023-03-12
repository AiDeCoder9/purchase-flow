import SearchInput from '@/components/inputs/SearchInput';
import Selection from '@/components/inputs/Selection';
import React from 'react';
import { ICustomizations } from '../Packages/packageSchema';
interface CustomizationProps extends ICustomizations {
  check?: string;
}
export default function Customization(props: CustomizationProps) {
  const { title, subTitle, price } = props;
  return (
    <div className="customization-item">
      <h6 className="customization-title">{title}</h6>
      <p className="link customization-link">{subTitle}</p>
      {title.toLowerCase().includes('location') ? (
        <SearchInput placeholder="Search City and State..." />
      ) : (
        <Selection name={title} label={`+ ${price}`} />
      )}
    </div>
  );
}
