"use client";

import { useState } from "react";
import Wrapper from "../../common/Wrapper";
import Txt from "../../common/Txt";
import { capitalize } from "yeonpm-modules";
import {
  ArrowIconProps,
  NavigationBarLayoutProps,
  NavigationBarProps,
  NavigationConfig,
} from "./type";

export const NavigationBarLayout = ({
  navigationConfigs,
  router,
  pathname,
  logo,
  children,
  disableSignUpButton,
}: NavigationBarLayoutProps) => {
  return (
    <Wrapper
      className="main-layout-wrapper"
      overflowX="hidden"
      overflowY="auto"
      flex
      fullV
      bg="#F9FAFB"
    >
      <NavigationBar
        navigationConfigs={navigationConfigs}
        logo={logo}
        router={router}
        pathname={pathname}
        disableSignUpButton={disableSignUpButton}
      />
      <Wrapper className="main-layout-body-wrapper" fullP>
        {children}
      </Wrapper>
    </Wrapper>
  );
};

const NavigationBar = ({
  navigationConfigs,
  logo,
  onClickSignOut,
  signOutLabel,
  router,
  pathname,
  disableSignUpButton = false,
}: NavigationBarProps) => {
  return (
    <Wrapper
      className="main-layout-navigation-bar-wrapper"
      h={"100%"}
      minWidth={230}
      bg={"#ffffff"}
      column
      borderRight={"1px solid #f2f2f2"}
    >
      {logo && (
        <Wrapper w="100%" ac h={100} jc>
          {logo}
        </Wrapper>
      )}
      <Wrapper flex1 overflowY="auto">
        {navigationConfigs.configs.map(
          (config: NavigationConfig, index: number) => (
            <NavigationItem
              key={index}
              router={router}
              pathname={pathname}
              config={config}
              depth={0}
              routePrefix={navigationConfigs.routePrefix}
            />
          )
        )}
      </Wrapper>
      {!disableSignUpButton && (
        <Wrapper
          h={100}
          ac
          jc
          onClick={() =>
            onClickSignOut
              ? onClickSignOut()
              : (window.location.href = "/signOut")
          }
        >
          <Wrapper white mouseCss>
            <Txt
              fv={{ fontSize: 14 }}
              color="#afafaf"
              textDecoration="underline"
            >
              {signOutLabel || "sign out"}
            </Txt>
          </Wrapper>
        </Wrapper>
      )}
    </Wrapper>
  );
};

export default NavigationBar;

const NavigationItem = ({
  config,
  depth,
  routePrefix,
  parentPath,
  router,
  pathname,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = config.children && config.children.length > 0;
  const path = `${parentPath ? `/${parentPath}` : ""}/${config.value}`;
  const isNowPath = `${routePrefix}${path}` === pathname;
  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    } else {
      router.push(`${routePrefix}${path}`);
    }
  };

  return (
    <Wrapper column>
      <Wrapper
        className="navigation-item"
        h={50}
        onClick={handleClick}
        mouseCss
        white
        flex
        w="100%"
      >
        {config.icon && (
          <Wrapper className="navigation-item-icon" pl={24} h="100%" ac jc>
            {config.icon}
          </Wrapper>
        )}
        <Wrapper pl={depth * 20 + 16} pr={16} ac h="100%">
          <Txt
            fv={{
              fontSize:
                depth === 0 ? 16 : depth === 1 ? 14 : depth === 2 ? 12 : 16,
            }}
            textDecoration={isNowPath ? "underline" : "none"}
          >
            {capitalize(config.label || config.value)}
          </Txt>
          <ArrowIcon isOpen={isOpen} enable={hasChildren} />
        </Wrapper>
      </Wrapper>

      <Wrapper
        column
        css={`
          height: ${isOpen ? "auto" : "0"};
          opacity: ${isOpen ? "1" : "0"};
          overflow: hidden;
          transition: all 0.2s ease-in-out;
        `}
      >
        {hasChildren && (
          <Wrapper column>
            {config.children?.map((child: any, index: number) => (
              <NavigationItem
                key={index}
                config={child}
                depth={depth + 1}
                routePrefix={routePrefix}
                parentPath={path}
              />
            ))}
          </Wrapper>
        )}
      </Wrapper>
    </Wrapper>
  );
};

const ArrowIcon = ({ isOpen, enable }: ArrowIconProps) => {
  return (
    <>
      {enable && (
        <Wrapper
          className="arrow-icon"
          w={24}
          h={24}
          ac
          jc
          ml="auto"
          css={`
            transform: ${isOpen ? "rotate(180deg)" : "none"};
            transition: transform 0.3s ease;
            &::before {
              content: "";
              width: 0;
              height: 0;
              border-left: 6px solid transparent;
              border-right: 6px solid transparent;
              border-top: 6px solid #dadadaed;
            }
          `}
        />
      )}
    </>
  );
};
