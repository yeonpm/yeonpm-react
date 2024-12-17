export interface NavigationConfigs {
  routePrefix: string;
  configs: NavigationConfig[];
}

export interface NavigationConfig {
  label?: string;
  value: string;
  children?: NavigationConfig[];
}

export interface ArrowIconProps {
  isOpen: boolean;
  enable: boolean;
}
