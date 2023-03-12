import { PlayCircle, PNGImage } from '@/assets/images';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LLApiClient from '@skillvestors/llapiclient';
import { IPackageItem } from '../Packages/packageSchema';
import Customization from './Customization';
import { publicPath } from '@/routes/publicRoutes';
import Footer from '@/components/layout/Footer';
import Main from '@/components/display/Main';
import { MdOutlineForum } from 'react-icons/md';
import { CiBookmark } from 'react-icons/ci';
export default function PackageDetail() {
  const { packageId } = useParams();
  const packageDetail = LLApiClient.getPackage(packageId) as IPackageItem;
  console.log('check1>>>', packageDetail);
  const navigate = useNavigate();
  console.log(navigate, publicPath);
  return (
    <>
      <Main alternate>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-2">
              <div className="player">
                <img src={PNGImage} alt={packageDetail.title} className="player-background" />
                <img src={PlayCircle} alt="Play Button" className="player-button" />
              </div>
              <div className="player-link">
                <Link to={'/'} className="link ">
                  Watch Examples
                </Link>
              </div>
              <div className="forum">
                <MdOutlineForum size={36} color="#888888" />
                <h6 className="forum-title">Have questions about buying this video?</h6>
                <Link to={'/'} className="link forum-link">
                  Chat with a production executive
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="detail">
                <h6 className="title">{packageDetail.title}</h6>
                <p className="package-price">${packageDetail.price}</p>
                <p>{packageDetail.subTitle}</p>
                <ul className="package-list">
                  {packageDetail.inclusions.map((item, index) => {
                    return <li key={item + index}>{item}</li>;
                  })}
                </ul>
              </div>
              <div className="customization">
                {packageDetail.customizations.map((item) => {
                  return <Customization {...item} key={item.title} />;
                })}
              </div>
              <div className="card">
                <h6>Need a moment?</h6>
                <p>
                  Keep all your selections by saving this video to Your Saves, then come back
                  anytime and pick up right where you left off.
                </p>
                <Link to="/" className="link">
                  <CiBookmark color="#0766cc" /> Save for later
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer title="Packages" progress={70} />
    </>
  );
}
