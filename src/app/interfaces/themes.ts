export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--foreground-default': '#08090A',
    '--background-default': '#FCFCF4',
    '--primary-default': '#088FFF',
    '--background-secondary': '#FCFCF4',
    '--danger-color': '#BC0B0D',
    '--background-default-shadow': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '--header-default-shadow': '0 0 20px rgba(0,0,0,.1)',
    '--background-dark-shadow': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '--text-dark-shadow': '-1px 1px 0 #000,1px 1px 0 #000'
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
    '--header-default-shadow': '0 0 20px rgba(255,255,255,.2)',
    '--background-dark-shadow': '0 14px 28px rgba(255,255,255,0.25), 0 10px 10px rgba(255,255,255,0.22)',
    '--text-default-shadow': '3px 1px 6px rgba(135, 206,235,0.6)',
  }
};
