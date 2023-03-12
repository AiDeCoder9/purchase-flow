import Heading from '@/components/display/Heading';
import React, { useState } from 'react';
import CategoryItem from './CategoryItem';
import LLApiClient from '@skillvestors/llapiclient';
import { IContentType } from './contentTypeSchema';
import Footer from '@/components/layout/Footer';
import { useNavigate } from 'react-router-dom';
import { sanitizeURL } from '@/utils/constants';
import { publicPath } from '@/routes/publicRoutes';
import Main from '@/components/display/Main';

export default function ContentType() {
  const contentTypes = LLApiClient.listContentTypes() as Array<IContentType>;
  const [contentId, setContentId] = useState<null | string>(null);

  const handleItemClick = (id: string) => {
    setContentId(id);
  };
  const navigate = useNavigate();
  return (
    <>
      <Main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <Heading
                title="What type of video content do you want to create?"
                description="Lorem Ipsum"
              />
              {contentTypes.map((content) => {
                return (
                  <CategoryItem
                    active={contentId === content.id}
                    onClick={handleItemClick}
                    {...content}
                    key={content.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Main>
      <Footer
        title="Next: Packages"
        progress={50}
        onNext={() => navigate(sanitizeURL(publicPath.packages, { id: contentId ?? 1 }))}
      />
    </>
  );
}
