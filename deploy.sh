#!/bin/bash

# 에러 발생 시 스크립트 중단
set -e

echo "🚀 배포를 시작합니다..."

# 1. package.json 버전 업데이트 (patch 버전 1 증가)
# --no-git-tag-version 옵션으로 git 커밋/태그 생성을 방지합니다.
echo " NPM 버전을 업데이트합니다..."
npm version patch --no-git-tag-version

# package.json에서 업데이트된 버전 정보 가져오기
version=$(node -p "require('./package.json').version")
echo "📦 새 버전: $version"

# 2. 프로젝트 빌드
echo "📦 프로젝트를 빌드합니다... (rollup -c --bundleConfigAsCjs)"
rollup -c --bundleConfigAsCjs

# 3. Git 변경사항 커밋 및 푸시
echo "💾 변경사항을 커밋하고 푸시합니다..."
git add .
git commit -m "release: v$version"
git push origin main

# 4. npm에 배포
echo "🚀 npm에 배포합니다..."
npm publish

echo "✅ 배포 완료! (버전: $version)" 