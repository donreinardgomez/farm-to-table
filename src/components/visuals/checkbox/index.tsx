import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import styles from './style.scss';

export class Checkbox extends React.PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    isChecked: false,
    theme: 'normal',
    isDisabled: false,
  };

  public render(): JSX.Element {
    const { children, isChecked, theme, isDisabled } = this.props;
    return (
      <div className={styles.checkboxContainer}>
        <label className={styles.label}>
          <input
            type='checkbox'
            disabled={isDisabled}
            className={`${styles.checkbox} ${styles[theme]}`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleOnChange(e)}
            checked={isChecked}
          />
          <span className={styles.checkIcon} />
          <TextDisplay size='large'>{children}</TextDisplay>
        </label>
      </div>
    );
  }

  protected handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, onChange } = this.props;
    if (!onChange) return;
    onChange(e.target.checked, value);
  }
}

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  children: string;
  value?: string;
  isChecked?: boolean;
  theme?: 'normal' | 'alert';
  isDisabled?: boolean;
}

interface IDispatchProps {
  onChange?: (isChecked: boolean, value?: string) => void;
}
