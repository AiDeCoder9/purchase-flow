import React, { InputHTMLAttributes } from 'react';
interface SelectionProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export default function Selection(props: SelectionProps) {
  const { label, ...args } = props;

  return (
    <div className="selection">
      <label className="container">
        <input {...args} type="radio" value="yes" checked />
        No Thanks
        <span className="indicator"></span>
      </label>
      <label className="container">
        <input {...args} type="radio" value="no" />
        Yes
        <span className="indicator indicator-right"></span>
        <span>{label}</span>
      </label>
    </div>
  );
}
