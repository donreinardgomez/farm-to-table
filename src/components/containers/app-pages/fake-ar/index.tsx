import { setDisplayItem } from '@actions/ui';
import { Camera, Close } from '@material-ui/icons';
import { IItem } from '@models/item';
import { IStore } from '@models/store';
import { generateDummyItem } from '@store/dummy/item-pool';
import { Logo } from '@visuals/logo';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { compose } from 'redux';
import styles from './style.scss';

const FakeARFC: React.FC<Props> = ({ setDisplayItem }) => {
  const history = useHistory();

  const handleHeinzClick = () => {
    setDisplayItem(generateDummyItem());
    history.push('/app/item');
  };

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
          onClick={handleHeinzClick}
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

interface IDispatchProps {
  setDisplayItem: (item: IItem) => void;
}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

const mapDispatchToProps: IDispatchProps = {
  setDisplayItem,
};

export const FakeAR = compose(connect(mapStateToProps, mapDispatchToProps))(FakeARFC);
