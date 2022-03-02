import { Search, Visibility, VisibilityOff } from '@material-ui/icons';
import { formatString } from '@utils/format-string';
import { isOk } from '@utils/is-ok';
import { TextDisplay } from '@visuals/text-display';
import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import styles from './style.scss';

export const InputText: React.FC<Props> = ({
  placeholder,
  type,
  value,
  size,
  style,
  theme,
  decoration,
  hasCharCounter,
  children,
  className,
  autoFocus,
  isDisabled,
  onChange,
}) => {
  const textInputRef = useRef(null);
  const [isPasswordVisible, toggleIsPasswordVisible] = useState<boolean>(false);
  const [textCount, setTextCount] = useState(0);

  useEffect(() => {
    if (autoFocus && isOk(textInputRef)) {
      textInputRef?.current.focus();
    }
  }, [autoFocus]);

  const renderDecoration = (): JSX.Element => {
    if (!isOk(decoration)) return;
    let deco: React.ReactNode;
    switch (decoration) {
      case 'search':
        deco = <Search />;
        break;
      default:
        break;
    }
    return <div className={styles.decoration}>{deco}</div>;
  };

  const renderLabel = (): JSX.Element => {
    if (!children) return;
    return (
      <div className={styles.label}>
        <TextDisplay color='gray-2'>{children}</TextDisplay>
      </div>
    );
  };

  const getTextClassName = (): string =>
    [
      styles.inputContainer,
      styles[theme],
      styles[size],
      styles[type],
      isOk(decoration) && styles.hasDecoration,
      isDisabled && styles.disabled,
      className,
    ]
      .filter((style) => style)
      .join(' ');

  const getTextareaClassName = (): string =>
    [styles.textarea, styles[theme], isDisabled && styles.disabled, styles[size], className]
      .filter((style) => style)
      .join(' ');

  const handleOnChange = (newValue) => {
    if (!onChange) return;
    setTextCount(newValue.length);
    onChange(newValue);
  };

  const renderPasswordVisiblityToggle = useCallback((): JSX.Element => {
    if (type !== 'password') return;
    return (
      <div
        className={styles.visibilityToggle}
        onClick={() => toggleIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible)}
      >
        {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
      </div>
    );
  }, [isPasswordVisible, type]);

  const inputProps: InputHTMLAttributes<HTMLTextAreaElement | HTMLInputElement> = {
    placeholder,
    value: value || '',
    onChange: (e) => handleOnChange(e.currentTarget.value),
  };

  let textInputObj: JSX.Element;
  switch (type) {
    case 'text':
    case 'password':
      textInputObj = (
        <>
          {renderDecoration()}
          <div style={style} className={getTextClassName()}>
            <input
              disabled={isDisabled}
              className={`${styles.input} ${isDisabled && styles.disabled}`}
              ref={textInputRef}
              style={style}
              type={type === 'password' && isPasswordVisible ? 'text' : type}
              {...inputProps}
            />
            {renderPasswordVisiblityToggle()}
          </div>
        </>
      );
      break;
    case 'textarea':
      textInputObj = (
        <div className={`${styles.textareaWrapper} ${isDisabled && styles.disabled}`}>
          <textarea
            disabled={isDisabled}
            className={getTextareaClassName()}
            ref={textInputRef}
            style={style}
            {...inputProps}
          />
          {hasCharCounter && (
            <TextDisplay weight='bold' size='small' color='gray-3' className={styles.textCount}>
              {formatString('{count} chars', { count: String(textCount) })}
            </TextDisplay>
          )}
        </div>
      );
      break;
  }

  return (
    <>
      {renderLabel()}
      {textInputObj}
    </>
  );
};

InputText.defaultProps = {
  type: 'text',
  value: '',
  size: 'fit',
  theme: 'primary',
  autoFocus: false,
  isDisabled: false,
  hasCharCounter: true,
};

export type Props = StateProps & IDispatchProps;

interface StateProps {
  placeholder?: string;
  type?: 'text' | 'textarea' | 'password';
  value?: number | string;
  size?: 'full' | 'fit';
  style?: React.CSSProperties;
  theme?: 'primary' | 'secondary';
  children?: string;
  decoration?: 'search';
  className?: string;
  autoFocus?: boolean;
  isDisabled?: boolean;
  hasCharCounter?: boolean;
}

interface IDispatchProps {
  onChange?: (newValue: number | string) => void;
}
