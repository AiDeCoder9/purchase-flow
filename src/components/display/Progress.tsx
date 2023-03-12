import React from 'react';
import { Progress as RProgress, ProgressProps } from 'reactstrap';
interface ProgressProperties extends ProgressProps {
  height?: number;
}
export default function Progress(props: ProgressProperties) {
  return <RProgress {...props} />;
}
