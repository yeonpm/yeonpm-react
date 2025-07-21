import React from "react";

export interface NavigationBarProps {
  navigationConfigs: NavigationConfigs;
  logo?: React.ReactNode;
  onClickSignOut?: () => void;
  signOutLabel?: string;
  /**
   * @description nextjs navigation: router
   */
  router: any;
  pathname: string;
  disableSignOutButton?: boolean;
  width?: string;
}

export interface NavigationConfigs {
  routePrefix?: string;
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
