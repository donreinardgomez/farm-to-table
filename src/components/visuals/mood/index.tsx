import {
  Face,
  Mood,
  MoodBad,
  SentimentDissatisfiedOutlined,
  SentimentSatisfied,
} from '@material-ui/icons';
import { TMoodRating } from '@models/staff';
import React from 'react';
import styles from './style.scss';

export const MoodEmoji: React.FC<Props> = ({ mood, className }) => {
  const renderMood = () => {
    switch (mood) {
      case 'happy':
        return <Mood className={`${styles.emoji} ${className} ${styles.emojiHappy}`} />;
      case 'angry':
        return <MoodBad className={`${styles.emoji} ${className} ${styles.emojiAngry}`} />;
      case 'stressed':
        return <Face className={`${styles.emoji} ${className} ${styles.emojiStressed}`} />;
      case 'normal':
        return (
          <SentimentSatisfied className={`${styles.emoji} ${className} ${styles.emojiNormal}`} />
        );
      case 'sad':
        return (
          <SentimentDissatisfiedOutlined
            className={`${styles.emoji} ${className} ${styles.emojiSad}`}
          />
        );
    }
  };

  return renderMood();
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  mood: TMoodRating;
  className?: string;
}

interface IDispatchProps {}
