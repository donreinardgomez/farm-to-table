import { setDisplayItem } from '@actions/ui';
import { Camera, Close } from '@material-ui/icons';
import { IItem } from '@models/item';
import { IStore } from '@models/store';
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
    setDisplayItem({
      name: 'Heinz Tomato Ketchup',
      description:
        'Our classic Heinz Tomato Ketchup has been a staple at mealtimes since 1886. Its the unmistakable taste of our sun-ripened tomatoes, along with our passion and knowledge that gives our recipe its unique flavour - the irrisitible rich thick taste of Heinz you know and love. Grown not made, our tomato ketchup goes perfectly with just about anything. With absolutely no artificial colours, flavours, preservatives or thickeners, no other ketchup tastes quite like it.',
      id: 1,
      manufacturerId: 1,
      originCountry: 'Germany',
      price: 350,
      greenPoint: 500,
      image:
        'https://d36rz30b5p7lsd.cloudfront.net/640/studio/assets/v1630331419301_842414103/35563708_71000319_Heinz_TK_Glass_342g.png',
      distributionHistory: [
        { name: 'German Farm' },
        { name: 'Heinze Germany' },
        { name: 'Japan Imp[orting LTD' },
        { name: 'Costco Tamasakai' },
        { name: 'AEON Machida' },
      ],
    });
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
