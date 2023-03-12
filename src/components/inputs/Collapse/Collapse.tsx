import React, { useState } from 'react';
import { RxCaretRight } from 'react-icons/rx';
import { Collapse as RCollapse } from 'reactstrap';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  collapsed?: boolean;
}
export default function Collapse(props: CollapseProps) {
  const { title, children, collapsed = true } = props;
  const [isOpen, toggleCollapse] = useState(!collapsed);
  return (
    <>
      <div className="collapse-header">
        <button
          onClick={() => toggleCollapse(!isOpen)}
          className="d-flex align-items-center btn p-0">
          <RxCaretRight size={24} />
          <h6 className="des">{title}</h6>
        </button>
      </div>
      <RCollapse isOpen={isOpen}>{children}</RCollapse>
    </>
  );
}
