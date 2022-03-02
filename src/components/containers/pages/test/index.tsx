import { IGraphConfig } from '@models/graph-config';
import { IStore } from '@models/store';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';
import { TestBarGraph } from './test-bar';

const TestFC: React.FC<Props> = () => {
  const graphConfig1: IGraphConfig = {
    categories: ['CAT 11', 'CAT 12', 'CAT 13', 'CAT 14'],
    series: [
      {
        type: 'column',
        name: 'DATA 1',
        data: [10000, 11000, 12000, 13000],
      },
      {
        type: 'column',
        name: 'DATA 2',
        data: [20000, 21000, 22000, 23000],
      },
      {
        type: 'column',
        name: 'DATA 3',
        data: [30000, 31000, 32000, 33000],
      },
    ],
  };

  const graphConfig2: IGraphConfig = {
    categories: ['CAT 21', 'CAT 22', 'CAT 23', 'CAT 24'],
    series: [
      {
        type: 'column',
        name: 'DATA 21',
        data: [110000, 111000, 112000, 113000],
      },
      {
        type: 'column',
        name: 'DATA 22',
        data: [120000, 121000, 122000, 123000],
      },
      {
        type: 'column',
        name: 'DATA 23',
        data: [130000, 131000, 132000, 133000],
      },
    ],
  };

  return (
    <>
      <TestBarGraph graphConfig={graphConfig1} title='GRAPH 1' />
      <br />
      <TestBarGraph graphConfig={graphConfig2} title='GRAPH 2' />
    </>
  );
};

export type Props = IStateProps & RouteComponentProps;

interface IStateProps {
  state: IStore;
}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

export const Test = compose(connect(mapStateToProps))(TestFC);
