import { Camera, Close } from '@material-ui/icons';
import { IStore } from '@models/store';
import { Logo } from '@visuals/logo';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { compose } from 'redux';
import styles from './style.scss';

const FakeARFC: React.FC<Props> = ({}) => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <Close className={styles.close} onClick={() => history.goBack()} />
      <Logo className={styles.image} type='fake-ar' />
      <Camera className={styles.camera} />
      <div className={styles.floatingTextContainer}>
        <TextDisplay
          display='inline'
          size='small'
          weight='bold'
          className={styles.floatingText}
          color='white'
        >
          Heinz Tomato Ketchup
        </TextDisplay>
      </div>
    </div>
  );
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  state: IStore;
}

interface IDispatchProps {}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

const mapDispatchToProps: IDispatchProps = {};

export const FakeAR = compose(connect(mapStateToProps, mapDispatchToProps))(FakeARFC);
