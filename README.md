# ポートフォリオサイト

## サイトURL
[https://shinya77-hub.github.io/portfolio/ja/](https://shinya77-hub.github.io/portfolio/ja/)

## 使用技術
HTML（Pug）/ CSS（SCSS）/ JavaScript

## ディレクトリ構成

```
.
├── dist ※deploy root
│   ├── css
│   ├── en
│   ├── fonts
│   ├── img
│   ├── ja
│   └── js
├── src
│   ├── fonts
│   ├── img
│   ├── js
│   ├── pug
│   │   ├── includes
│   │   ├── layouts
│   │   └── pages
│   └── scss
├── README.md
├── package-lock.json
└── package.json
```
## 環境 
nodeのバージョン管理：volta（node : v24.12.0）  
ローカルサーバー：browser-sync

|        | 用途            |
| ------------- | --------------- |
| **npm i**        | **インストール**          |
| **npm run dev** | **開発** |
| **npm run build**      | **ビルド** |

※npm run build時、cross-envでGitHub Pagesにあわせてlang_hrefパス書き換え

## 主な機能
- IntersectionObserverを用いたヘッダー挙動制御
- filter()を使用した絞り込み
