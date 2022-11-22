import { URL, VERSION } from './client';

export const itemImageUrl = (image: string) => {
  return `${URL}/cdn/${VERSION}/img/item/${image}`;
};

export const championImageUrl = (image: string) => {
  return `${URL}/cdn/${VERSION}/img/champion/${image}`;
};

export const championImagePreviewUrl = (image: string) => {
  return `${URL}/cdn/img/champion/tiles/${image}`;
};

export const championImagePassiveUrl = (image: string) => {
  return `${URL}/cdn/${VERSION}/img/passive/${image}`;
};

export const championImageSpellUrl = (image: string) => {
  return `${URL}/cdn/${VERSION}/img/spell/${image}`;
};
