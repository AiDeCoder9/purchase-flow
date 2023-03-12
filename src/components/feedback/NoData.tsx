import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
interface NoDataProps {
  title?: string;
  description?: string;
}
export default function NoData(props: NoDataProps) {
  const { title = 'No Favorites yet', description = 'Add your favorites skills' } = props;
  return (
    <div className="noData-container">
      <div className="icon">
        <AiFillHeart size={32} />
      </div>
      <h6 className="noData-title">{title}</h6>
      <p className="noData-description">{description}</p>
    </div>
  );
}
