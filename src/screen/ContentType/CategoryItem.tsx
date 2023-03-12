import classNames from 'classnames';
import React from 'react';
import { IContentType } from './contentTypeSchema';
interface CategoryItemProps extends IContentType {
  onClick: (id: string) => void;
  active: boolean;
}
export default function CategoryItem(props: CategoryItemProps) {
  const { title, description, onClick, id, active } = props;
  return (
    <div className={classNames('category', { active: active })} onClick={() => onClick(id)}>
      <h6 className="category-title">{title}</h6>
      <p className="category-description">{description}</p>
    </div>
  );
}
