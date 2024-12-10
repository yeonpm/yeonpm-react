# @yeonpm/react

## install

```bash
npm install @yeonpm/react
```

## description

A library that collects frequently used components and custom hooks in react projects

## usage

- `<Wrapper />`

## Next.js 13+ 설정

Next.js 13+ 서버 컴포넌트와 함께 사용하기 위해서는 다음과 같은 설정이 필요합니다:

`NextCacheProvider` 컴포넌트를 사용하여 캐시 프로바이더를 설정합니다.

```tsx
// app/layout.tsx
"use client";

import { NextCacheProvider } from "@yeonpm/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NextCacheProvider>{children}</NextCacheProvider>;
}
```
