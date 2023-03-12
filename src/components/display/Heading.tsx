import React from 'react';

interface HeadingProps {
  title: string;
  description: string;
}
export default function Heading(props: HeadingProps) {
  const { title, description } = props;
  return (
    <div className="textbox">
      <h6>{title}</h6>
      <p>{description}</p>
    </div>
  );
}
