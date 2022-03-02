import { isOk } from '@utils/is-ok';
import { Checkbox } from '@visuals/checkbox';
import { Radio } from '@visuals/radio';
import { TextDisplay } from '@visuals/text-display';
import hash from 'object-hash';
import React from 'react';
import styles from './style.scss';

export class ControlGroup extends React.PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    type: 'checkbox',
    selectedValues: [],
    selectedValue: null,
    layout: 'flex',
    isDisabled: false,
  };

  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    const { controlItems, className, layout, isDisabled } = this.props;
    if (!isOk(controlItems)) return <React.Fragment />;
    return (
      <>
        {this.renderLabel()}
        <div
          className={`${styles.controlGroupContainer} ${styles[layout]} ${
            isDisabled && styles.disabled
          } ${className}`}
        >
          {this.renderControlObjects()}
        </div>
      </>
    );
  }

  protected renderLabel(): JSX.Element {
    const { children } = this.props;
    if (!children) return;

    return (
      <div className={styles.controlGroupLabel}>
        <TextDisplay>{children}</TextDisplay>
      </div>
    );
  }
  protected renderControlObjects(): JSX.Element[] {
    const { controlItems, type, selectedValue, selectedValues, layout, isDisabled } = this.props;
    const controlItemObjects = controlItems.map((item, i) => {
      const { value, label, sideControl } = item;
      const sideControlObj = sideControl && <div className={styles.sideControl}>{sideControl}</div>;
      let controlObj;
      switch (type) {
        case 'checkbox':
          controlObj = (
            <Checkbox
              value={value}
              isDisabled={isDisabled}
              isChecked={selectedValues.includes(value)}
              onChange={(isChecked: boolean, value: string) =>
                this.handleSelectedValuesChange(isChecked, value)
              }
            >
              {label}
            </Checkbox>
          );
          break;
        case 'radio':
          controlObj = (
            <Radio
              value={value}
              isDisabled={isDisabled}
              isChecked={selectedValue === value}
              onChange={(isChecked: boolean, value: string) =>
                this.handleSelectedValueChange(isChecked, value)
              }
            >
              {label}
            </Radio>
          );
          break;
      }
      return (
        <div className={styles[`control-group-item-${layout}`]} key={hash(i)}>
          {controlObj}
          {sideControlObj}
        </div>
      );
    });

    return controlItemObjects;
  }

  // For Radio
  protected handleSelectedValueChange(isChecked: boolean, value: string) {
    const { onSelectedValueChange } = this.props;
    if (!isChecked) return;

    if (!onSelectedValueChange) return;
    onSelectedValueChange(value);
  }

  // For Checkboxes
  protected handleSelectedValuesChange(isChecked: boolean, value: string) {
    const { onSelectedValuesChange, selectedValues } = this.props;
    const newSelectedValues = [...selectedValues];
    if (isChecked) {
      newSelectedValues.push(value);
    } else {
      if (newSelectedValues.includes(value)) {
        const index = selectedValues.indexOf(value);
        newSelectedValues.splice(index, 1);
      }
    }

    if (!onSelectedValuesChange) return;
    onSelectedValuesChange(newSelectedValues);
  }
}

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  controlItems: IControlItem[];
  type?: 'checkbox' | 'radio';
  selectedValue?: string;
  selectedValues?: string[];
  children?: string;
  className?: string;
  layout?: 'flex' | 'block';
  isDisabled?: boolean;
}

interface IDispatchProps {
  // For Radio
  onSelectedValueChange: (selectedItem: string) => void;
  // For Checkbox
  onSelectedValuesChange: (selectedItems: string[]) => void;
}

interface IControlItem {
  label: string;
  value: string;
  sideControl?: React.ReactNode;
}
