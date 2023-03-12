import React, { useEffect, useState } from 'react';

import LLApiClient from '@skillvestors/llapiclient';
import { INDUSTRY_ID } from '@/utils/constants';
import { IPackageItem } from './packageSchema';
import Heading from '@/components/display/Heading';
import PackageItem from './PackageItem';
import Button from '@/components/inputs/Button';
import Footer from '@/components/layout/Footer';

import Main from '@/components/display/Main';
export default function Packages() {
  const [loadMore, setLoadMore] = useState(false);

  const topPackages = LLApiClient.getTopPackages(INDUSTRY_ID) as Array<IPackageItem>;
  const allPackages = LLApiClient.listPackages(INDUSTRY_ID) as Array<IPackageItem>;
  const [packages, setPackages] = useState<Array<IPackageItem>>(topPackages);
  useEffect(() => {
    if (loadMore) {
      setPackages(allPackages);
    } else {
      setPackages(topPackages);
    }
  }, [loadMore]);

  return (
    <>
      <Main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Heading
                title="Select a package or build a custom video. "
                description="Lorem Ipsum"
              />
              <div className="row">
                {packages.map((packageItem) => {
                  return <PackageItem key={packageItem.title} packageDetail={packageItem} />;
                })}
              </div>
              <div className="text-center">
                <Button
                  outline
                  color="secondary"
                  className="package-more"
                  onClick={() => setLoadMore(!loadMore)}>
                  {!loadMore ? 'See All Packages' : 'See Top Packages'}
                </Button>
              </div>

              <section className="section-chat">
                <h4>Not finding what you are looking for?</h4>
                <p>
                  Chat with an account executive and we will help you get exactly what you need.
                </p>
                <Button outline>Chat with Us</Button>
              </section>
            </div>
          </div>
        </div>
      </Main>
      <Footer title="Packages" progress={70} />
    </>
  );
}
