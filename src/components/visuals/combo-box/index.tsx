import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { isOk } from '@utils/is-ok';
import { TextDisplay } from '@visuals/text-display';
import hash from 'object-hash';
import React from 'react';

export class ComboBox extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedValue: props.selectedValue,
    };
  }
  public render(): JSX.Element {
    const { children, selectItems } = this.props;
    const { selectedValue } = this.state;
    if (!isOk(selectItems)) return <React.Fragment />;

    return (
      <FormControl>
        {children && (
          <InputLabel>
            <TextDisplay>{children}</TextDisplay>
          </InputLabel>
        )}
        <Select
          value={selectedValue}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
            this.handleOnChange(String(event.target.value))
          }
        >
          {selectItems.map((item, i) => (
            <MenuItem key={hash(i)} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  protected handleOnChange(selectedValue: string) {
    const { onChange } = this.props;
    this.setState({
      selectedValue,
    });
    if (!onChange) return;
    onChange(selectedValue);
  }
}

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  selectItems: Item[];
  children?: string;
  selectedValue?: string;
}

interface IDispatchProps {
  onChange?: (value: string) => void;
}

interface Item {
  label: string;
  value: string;
}

interface State {
  selectedValue?: string;
}
