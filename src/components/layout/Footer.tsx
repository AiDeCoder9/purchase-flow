import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Progress from '../display/Progress';
import Button from '../inputs/Button';
interface FooterProps {
  title: string;
  progress: number;
  onNext?: () => void;
}
export default function Footer(props: FooterProps) {
  const { title, progress, onNext } = props;
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="footer-navigation">
              <Button className="previous" onClick={() => navigate(-1)}>
                <AiOutlineArrowLeft size={20} />
                Back
              </Button>
              {onNext && (
                <Button className="next" onClick={onNext}>
                  {title}
                </Button>
              )}
            </div>
            <Progress value={progress} />
          </div>
        </div>
      </div>
    </footer>
  );
}
