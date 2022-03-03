import loremPicsum from 'lorem-picsum';
import React from 'react';

export const RandomPic: React.FC<Props> = ({ width, height, className }) => {
  return (
    <img
      src={loremPicsum({
        width,
        height,
      })}
      className={className}
    />
  );
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  width: number;
  height: number;
  className?: string;
}

interface IDispatchProps {}
