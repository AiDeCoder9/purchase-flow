import classNames from 'classnames';
import React from 'react';
interface MainProps {
  children: React.ReactNode;
  alternate?: boolean;
}
export default function Main(props: MainProps) {
  const { alternate = false } = props;
  return (
    <main className={classNames('app-main-layout position-relative', { alternate })}>
      <div className="app-absolute-layout scrollable">
        <section className="section">{props.children}</section>
      </div>
    </main>
  );
}
