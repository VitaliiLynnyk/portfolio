export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--foreground-default': '#08090A',
    '--background-default': '#d4dce2',
    '--primary-default': '#012A9A',
    '--background-secondary': '#A3B9CC',
    '--danger-color': '#BC0B0D',
    '--background-default-shadow': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    '--background-dark-shadow': '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)',
    '--img-filter': 'invert(1) sepia(20) saturate(10) hue-rotate(180deg)'
  }
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--foreground-default': '#A3B9CC',
    '--background-default': '#08090A',
    '--background-secondary': '#1f242f',
    '--primary-default': '#4E7DFD',
    '--danger-color': '#EC0505',
    '--background-default-shadow': '0 1px 3px rgba(255,255,255, 0.12), 0 1px 2px rgba(255,255,255, 0.24)',
    '--background-dark-shadow': '0 19px 38px rgba(255,255,255, 0.30), 0 15px 12px rgba(255,255,255, 0.22)',
    '--img-filter': 'invert(1) sepia(1) saturate(1) hue-rotate(155deg)'
  }
};
