import { Dialog, DialogContent } from '@material-ui/core';
import { isOk } from '@utils/is-ok';
import { Button, TColorSet, TSize } from '@visuals/button';
import { TextDisplay } from '@visuals/text-display';
import hash from 'object-hash';
import React from 'react';
import styles from './style.scss';

export class PopupTemplate<T> extends React.PureComponent<Props<T>> {
  public render(): JSX.Element {
    const {
      isPopupOpen,
      onPopupClose,
      onConfirm,
      onCancel,
      title,
      icon,
      confirmButtonName,
      children,
      isConfirmButtonDisabled,
      theme,
      additionalButtons,
    } = this.props;

    return (
      <Dialog open={isPopupOpen} onClose={onPopupClose}>
        <DialogContent style={{ padding: 0 }}>
          {title && (
            <div className={styles.title}>
              <div className={`${styles.icon} ${styles[theme || 'normal']}`}>{icon}</div>
              <TextDisplay
                color={theme === 'alert' ? 'alert' : 'primary'}
                size='x-large'
                weight='bold'
              >
                {title}
              </TextDisplay>
            </div>
          )}
          <div className={styles.contents}>{children}</div>
          <div className={styles.buttonContainer}>
            {isOk(onCancel) ? (
              <Button size='small' colorSet='gray' onClick={onCancel}>
                Cancel
              </Button>
            ) : (
              <div />
            )}
            <div className={styles.buttonMain}>
              {isOk(additionalButtons) &&
                additionalButtons.map((item, i) => (
                  <Button
                    key={hash(i)}
                    className={styles.buttonMainItem}
                    onClick={item?.onClick}
                    colorSet={item?.colorSet}
                    size={item?.size}
                  >
                    {item?.label}
                  </Button>
                ))}
              <Button
                className={styles.buttonMainItem}
                size='small'
                colorSet={theme === 'alert' ? 'alert' : 'normal'}
                isDisabled={isConfirmButtonDisabled}
                onClick={onConfirm}
              >
                {confirmButtonName || 'Confirm'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}
export type Props<T> = IStateProps & IDispatchProps<T>;

interface IStateProps {
  children?: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  isPopupOpen?: boolean;
  confirmButtonName?: string;
  isConfirmButtonDisabled?: boolean;
  additionalButtons?: TAdditionalButton[];
  theme?: 'normal' | 'alert';
}

export interface IDispatchProps<T> {
  onPopupClose?: () => void;
  onConfirm?: (params?: T) => void;
  onCancel?: () => void;
}

export interface TAdditionalButton {
  onClick: () => void;
  label: string;
  size?: TSize;
  colorSet?: TColorSet;
}

export interface TAdditionalButton {
  onClick: () => void;
  label: string;
  size?: TSize;
  colorSet?: TColorSet;
}
