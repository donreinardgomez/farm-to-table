import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import styles from './style.scss';

export const AppSectionHeader: React.FC<Props> = ({ children }) => {
  return (
    <TextDisplay color='white' className={styles.sectionHeader} weight='bold' size='large'>
      {children}
    </TextDisplay>
  );
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  children: string;
}

interface IDispatchProps {}
