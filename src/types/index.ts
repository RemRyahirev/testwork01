export enum ToastType {
  live = 'live',
  dead = 'dead',
  life = 'life',
}

export type TToast = {
  id: number;
  type: ToastType;
};
