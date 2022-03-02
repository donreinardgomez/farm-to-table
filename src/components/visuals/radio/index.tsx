import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import styles from './style.scss';
export class Radio extends React.PureComponent<Props> {
  public render() {
    const { isChecked, isDisabled } = this.props;
    return (
      <label className={styles.radioContainer}>
        <input
          type='radio'
          className={`${styles.radio} ${isDisabled && styles.disabled} ${
            !isDisabled && styles.enabled
          }`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleOnChange(e)}
          checked={isChecked}
          disabled={isDisabled}
          autoComplete='off'
        />
        {this.renderLabelText()}
      </label>
    );
  }

  protected renderLabelText(): JSX.Element {
    const { children, isDisabled } = this.props;
    return (
      <div className={styles.label}>
        <TextDisplay color={isDisabled ? 'gray-3' : 'gray-1'} size='large'>
          {children}
        </TextDisplay>
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
  value: string;
  isChecked?: boolean;
  isDisabled?: boolean;
}

interface IDispatchProps {
  onChange?: (isChecked: boolean, value?: string) => void;
}
