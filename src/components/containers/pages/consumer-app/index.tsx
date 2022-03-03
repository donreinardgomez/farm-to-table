import { toggleMenu } from '@actions/ui';
import { IStore } from '@models/store';
import { AppHeader } from '@visuals/app-header';
import { PageContainer } from '@visuals/page-container';
import { RandomPic } from '@visuals/random-pic';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';
import styles from './style.scss';

const ConsumerAppFC: React.FC<Props> = ({
  state: {
    ui: { isMenuOn, displayConsumer },
  },
  toggleMenu,
}) => {
  const history = useHistory();
  document.body.style.backgroundColor = '#f5f7f9';
  return (
    <PageContainer mode='app' isMenuOn={isMenuOn} onLogoClick={() => history.push('/app')}>
      <AppHeader consumer={displayConsumer} onBurgerClick={toggleMenu} />
      <TextDisplay color='white' className={styles.sectionHeader} weight='bold' size='large'>
        Purchase History
      </TextDisplay>
      <RandomPic width={200} height={100} />
    </PageContainer>
  );
};

export type Props = IStateProps & IDispatchProps & RouteComponentProps;

interface IStateProps {
  state: IStore;
}

interface IDispatchProps {
  toggleMenu: () => void;
}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

const mapDispatchToProps: IDispatchProps = {
  toggleMenu,
};

export const ConsumerApp = compose(connect(mapStateToProps, mapDispatchToProps))(ConsumerAppFC);
