# @yeonpm/react

## install

```bash
npm install @yeonpm/react
```

## description

A library that collects frequently used components and custom hooks in react projects

## can use

### component

- `<Wrapper />`
- `<Txt />`
- `<NavigationBar />`
- `<LoadingIndicator />`

#### component properties

All components support style props from `react-style-props`.

##### Layout Props

- `flex`: Enable flex display (boolean)
- `jc`: Enable flex and justify-content: center (boolean)
- `ac`: Enable flex and align-items: center (boolean)
- `between`: Enable flex with justify-content: space-between (boolean)
- `column`, `col`: Enable flex with flex-direction: column (boolean)
- `row`: Enable flex with flex-direction: row (boolean)
- `absolute`, `fixed`, `relative`, `sticky`: Set position (boolean)
- `flexDirection`: Set flex-direction (string)
- `alignItems`: Set align-items (string)
- `justifyContent`: Set justify-content (string)
- `flexGrow`: Set flex-grow (number | string)
- `flex1`: Set flex: 1 (boolean)
- `flexNum`: Set flex number (number)
- `gap`: Set gap (number | string)

##### Size Props

- `w`, `width`: Set element width (number | string)
- `h`, `height`: Set element height (number | string)
- `size`: Set both width and height (number | string | [number | string, number | string])
- `fullP`: Set width: 100% and height: 100% (boolean)
- `fullV`: Set width: 100vw and height: 100vh (boolean)
- `maxWidth`: Set max-width (number | string)
- `maxHeight`: Set max-height (number | string)
- `minWidth`: Set min-width (number | string)
- `minHeight`: Set min-height (number | string)

##### Margin & Padding Props

- `m`, `margin`: Set all margins (number | string)
- `mx`: Set horizontal margins (left & right) (number | string)
- `my`: Set vertical margins (top & bottom) (number | string)
- `mt`, `mr`, `mb`, `ml`: Set individual margins (number | string)
- `p`, `padding`: Set all padding (number | string)
- `px`: Set horizontal padding (number | string)
- `py`: Set vertical padding (number | string)
- `pt`, `pr`, `pb`, `pl`: Set individual padding (number | string)

##### Text Props

- `fs`, `fontSize`: Set font size (number | string)
- `fw`, `fontWeight`: Set font weight (number | string)
- `textCenter`: Set text-align: center (boolean)
- `textLeft`: Set text-align: left (boolean)
- `textRight`: Set text-align: right (boolean)
- `ellipsis`: Enable text ellipsis with overflow (boolean)
- `textAlign`: Set text-align (string)
- `lh`, `lineHeight`: Set line-height (number | string)
- `ff`, `fontFamily`: Set font-family (string)
- `ls`, `letterSpacing`: Set letter-spacing (number | string)
- `fst`, `fontStyle`: Set font-style (string)
- `textDecoration`: Set text-decoration (string)
- `textTransform`: Set text-transform (string)
- `textShadow`: Set text-shadow (string)
- `verticalAlign`: Set vertical-align (string)

##### Mouse Interaction Props

- `pointer`: Set cursor: pointer (boolean)
- `mouseCss`: Apply hover and active effects for mouse interaction (boolean)
- `cursor`: Set cursor (string)

##### Border Props

- `round3`, `round4`, `round5`, `round8`: Preset border-radius values (boolean)
- `border`: Set border style (string)
- `borderRadius`: Set border radius (number | string)
- `bt`, `borderTop`: Set border-top (string)
- `br`, `borderRight`: Set border-right (string)
- `bb`, `borderBottom`: Set border-bottom (string)
- `bl`, `borderLeft`: Set border-left (string)

##### Color Props

- `bg`, `backgroundColor`, `background`: Set background color (string)
- `color`: Set text color (string)
- `white`: Set white color (boolean)
- `red`: Set red color (boolean)

##### Display Props

- `none`: Set display: none (boolean)
- `block`: Set display: block (boolean)
- `inlineBlock`: Set display: inline-block (boolean)
- `inline`: Set display: inline (boolean)
- `display`: Set display (string)

##### Position Props

- `top`, `left`, `right`, `bottom`: Set position values (number | string)
- `zIndex`: Set z-index (number)

##### Other Props

- `mr0mlAuto`: Set margin-right: 0; margin-left: auto (boolean)
- `ml0mrAuto`: Set margin-left: 0; margin-right: auto (boolean)
- `mt0mbAuto`: Set margin-top: 0; margin-bottom: auto (boolean)
- `mb0mtAuto`: Set margin-bottom: 0; margin-top: auto (boolean)
- `overflow`: Set overflow (string)
- `overflowX`: Set overflow-x (string)
- `overflowY`: Set overflow-y (string)
- `opacity`: Set opacity (number | string)
- `boxShadow`: Set box-shadow (string)
- `transform`: Set transform (string)
- `transition`: Set transition (string)
- `animation`: Set animation (string)
- `backdropFilter`: Set backdrop-filter (string)
- `filter`: Set filter (string)

**More props are available. See [react-style-props GitHub](https://github.com/yeonpm/react-style-props/blob/main/src/style/configs/types/index.d.ts)**

##### Component-specific Additional Props

###### `<Wrapper />`

- All HTML div attributes supported
- All style props from `react-style-props` supported

###### `<Txt />`

- `span`: boolean - Use span tag (default: false, uses p tag)
- All HTML p/span attributes supported
- All style props from `react-style-props` supported

###### `<LoadingIndicator />`

- `size`: number - Loading indicator size (default: 24)
- All style props from `react-style-props` supported

### custom hook

<!-- - `useDebounce`
- `useInterval`
- `useOutsideClick`
- `useScrollLock`
- `useScrollLock` -->

### const

- `fontVariant`

#### Font System

`fontVariant` is a collection of font style constants that provides a consistent typography system.

##### Usage

```typescript
import { heading34B, text16R, text14M } from '@yeonpm/react';

// Use in components
<Txt {...heading34B}>Title Text</Txt>
<Txt {...text16R}>Body Text</Txt>
<Txt {...text14M}>Emphasized Text</Txt>
```

##### Font Style Classification

###### Heading (for titles)

- **Size**: 26px ~ 34px
- **line-height**: 180%
- **Purpose**: Page titles, section titles, main headings

```typescript
// 34px heading styles
heading34B; // Bold (800)
heading34SB; // SemiBold (700)
heading34M; // Medium (600)
heading34SM; // SemiMedium (500)
heading34R; // Regular (400)
heading34L; // Light (300)

// 32px heading styles
heading32B, heading32SB, heading32M, heading32SM, heading32R, heading32L;

// 30px heading styles
heading30B, heading30SB, heading30M, heading30SM, heading30R, heading30L;

// 28px heading styles
heading28B, heading28SB, heading28M, heading28SM, heading28R, heading28L;

// 26px heading styles
heading26B, heading26SB, heading26M, heading26SM, heading26R, heading26L;
```

###### Text (for body content)

- **Size**: 8px ~ 24px
- **line-height**: 160%
- **Purpose**: Body text, button text, description text

```typescript
// 24px text styles
text24B, text24SB, text24M, text24SM, text24R, text24L;

// 22px text styles
text22B, text22SB, text22M, text22SM, text22R, text22L;

// 20px text styles
text20B, text20SB, text20M, text20SM, text20R, text20L;

// 18px text styles
text18B, text18SB, text18M, text18SM, text18R, text18L;

// 16px text styles (default body)
text16B, text16SB, text16M, text16SM, text16R, text16L;

// 14px text styles
text14B, text14SB, text14M, text14SM, text14R, text14L;

// 12px text styles
text12B, text12SB, text12M, text12SM, text12R, text12L;

// 10px text styles
text10B, text10SB, text10M, text10SM, text10R, text10L;

// 8px text styles
text8B, text8SB, text8M, text8SM, text8R, text8L;
```

##### Font Weight

Each size provides 6 different weights:

- **B (Bold)**: 800 - Boldest text, for emphasis
- **SB (SemiBold)**: 700 - Bold text, for subtitles
- **M (Medium)**: 600 - Medium weight, for emphasized text
- **SM (SemiMedium)**: 500 - Slightly bold text
- **R (Regular)**: 400 - Default weight, for body text
- **L (Light)**: 300 - Light text, for additional information

##### Usage Example

```typescript
import { Txt } from "@yeonpm/react";
import {
  heading34B,
  heading28M,
  text16R,
  text14SM,
  text12L,
} from "@yeonpm/react";

function MyComponent() {
  return (
    <div>
      {/* Main title */}
      <Txt heading34B>Main Page Title</Txt>

      {/* Section title */}
      <Txt heading28M>Section Title</Txt>

      {/* Body text */}
      <Txt text16R>This is body text.</Txt>

      {/* Emphasized text */}
      <Txt text14SM>Important information</Txt>

      {/* Additional information */}
      <Txt text12L>Small additional info</Txt>
    </div>
  );
}
```

##### Design System Guidelines

- **Title hierarchy**: heading34B → heading28M → heading26SM
- **Body text**: text16R (default), text14R (smaller text)
- **Emphasized text**: text16M, text14M
- **Additional information**: text12L, text10L
- **Button text**: text16SB, text14SB
