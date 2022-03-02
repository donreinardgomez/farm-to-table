import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import styles from './style.scss';

export class DatePicker extends React.PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    value: new Date(),
    isDisabled: false,
  };

  public render(): JSX.Element {
    const { value, isDisabled } = this.props;
    return (
      <>
        {this.renderLabel()}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disabled={isDisabled}
            onKeyDown={(e) => e.preventDefault()}
            style={{ height: '46px' }}
            className={`${styles.datePicker} ${isDisabled && styles.disabled}`}
            disableToolbar
            variant='inline'
            format='yyyy/MM/dd'
            margin='normal'
            value={value}
            onChange={(date: Date) => this.handleOnChange(date)}
            inputVariant='outlined'
          />
        </MuiPickersUtilsProvider>
      </>
    );
  }

  protected renderLabel() {
    const { children } = this.props;
    if (!children) return;
    return (
      <div className={styles.label}>
        <TextDisplay color='gray-2'>{children}</TextDisplay>
      </div>
    );
  }

  protected handleOnChange(date: Date) {
    const { onChange } = this.props;
    if (!onChange) return;
    onChange(date);
  }
}

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  value?: Date;
  children: string;
  isDisabled?: boolean;
}

interface IDispatchProps {
  onChange?: (date: Date) => void;
}
