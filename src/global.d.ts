type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

interface ClipboardItem {
  readonly types: string[];
  readonly presentationStyle: 'unspecified' | 'inline' | 'attachment';
  getType(): Promise<Blob>;
}

interface ClipboardItemData {
  [mimeType: string]: Blob | string | Promise<Blob | string>;
}

declare const ClipboardItem: {
  prototype: ClipboardItem;
  new (itemData: ClipboardItemData): ClipboardItem;
};

interface Clipboard {
  read(): Promise<DataTransfer>;
  write(data: ClipboardItem[]): Promise<void>;
}

declare module '*.html' {
  const content: string;
  export default content;
}

declare const image: Blob;
