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
