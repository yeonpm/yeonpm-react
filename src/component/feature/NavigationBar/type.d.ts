import React from "react";

export interface NavigationBarLayoutProps extends NavigationBarProps {
  children: React.ReactNode;
  disableSignUpButton?: boolean;
}

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
  disableSignUpButton?: boolean;
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
