export interface IPackageItem {
  title: string;
  subTitle: string;
  shortDescription: null | string;
  description: null | string;
  price: number;
  medias: Array<IMedia>;
  inclusions: Array<string>;
  id: string;
  currency: string;
  customizations: Array<ICustomizations>;
}

export interface ICustomizations {
  id: string;
  currency: string;
  description: null | string;
  price: number;
  shortDescription: null | string;
  title: string;
  subTitle: string;
  type: '"CUSTOMIZATION"';
}
