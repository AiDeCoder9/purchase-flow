import React from 'react';
import { ICustomizations } from '../Packages/packageSchema';
interface CustomizationProps extends ICustomizations {
  check?: string;
}
export default function Customization(props: CustomizationProps) {
  const { title, subTitle } = props;
  return (
    <div>
      <h6>{title}</h6>
      <p className="link">{subTitle}</p>
    </div>
  );
}
