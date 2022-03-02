import { isOk } from '@utils/is-ok';
import React from 'react';

export class Image extends React.PureComponent<Props, State> {
  private readonly image = React.createRef<HTMLImageElement>();

  constructor(props: Props) {
    super(props);
    this.state = {
      imageStatus: 'normal',
    };
  }

  public render(): JSX.Element {
    const { imageUrl, imageBase64, placeHolderImage, className } = this.props;
    if (!isOk(imageUrl) && !isOk(imageBase64) && !isOk(placeHolderImage)) return <React.Fragment />;
    const { imageStatus } = this.state;
    const displayImageUrl = isOk(imageUrl)
      ? String(imageUrl)
      : isOk(imageBase64)
      ? `data:image/png;base64,${imageBase64}`
      : null;

    if (imageStatus !== 'normal' || !displayImageUrl) {
      return <>{placeHolderImage}</>;
    }

    return (
      <img
        className={className}
        src={displayImageUrl}
        onError={() => this.onImageLoadError()}
        onLoad={() => this.onHandleImageLoad()}
      />
    );
  }

  protected onImageLoadError() {
    this.setState({ imageStatus: 'error' });
  }

  protected onHandleImageLoad() {
    if (this.image?.current?.naturalWidth === 1) {
      /* If for some reason it returns a 1x1 image */
      this.setState({ imageStatus: 'error' });
    }
  }
}

export type Props = IStateProps;

interface IStateProps {
  imageUrl?: string;
  imageBase64?: string;
  placeHolderImage?: React.ReactNode;
  className?: string;
}

interface State {
  imageStatus: TImageStatus;
}

type TImageStatus = 'normal' | 'error';
