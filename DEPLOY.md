# 公開手順（sekiboclub.github.io）

## 1. リポジトリを用意する

GitHubで **sekiboclub** というアカウント（またはOrganization）を作り、そこに
**`sekiboclub.github.io`** という名前でリポジトリを新規作成します。Publicにしてください。

リポジトリ名がアカウント名と完全に一致することが重要です。これで `https://sekiboclub.github.io/` になります。

## 2. ファイルを置く

このzipの中身（`index.html` などのファイル群と `img` フォルダ）を、**リポジトリの一番上の階層に**置きます。

```
sekiboclub.github.io/
  index.html
  about-us.html
  sekibo.html
  3d.html
  activity.html
  sekibokun.html
  mekasekibokun.html
  special.html
  press.html
  about.html
  style.css
  app.js
  .nojekyll
  img/
```

`index.html` がリポジトリ直下にある状態にしてください。`docs` というフォルダが挟まっていると表示されません。

ブラウザだけで済ませるなら、リポジトリの「Add file」→「Upload files」にファイルをドラッグ＆ドロップして Commit すれば完了です。`img` フォルダごとドロップできます。

## 3. Pagesを有効にする

リポジトリの **Settings → Pages** を開きます。

- Source：`Deploy from a branch`
- Branch：`main` / `(root)`
- Save

1〜3分で `https://sekiboclub.github.io/` が表示されます。

## 4. 動作確認

- トップの写真とロゴが表示されるか
- ナビの8項目がすべて開くか
- 右上のENで英語表示に切り替わるか

## 5. あとで独自ドメインを繋ぐとき

Wixのドメイン（www.sekiboclub.com）をこのサイトに向ける手順です。

1. リポジトリ直下に `CNAME` というファイルを作り、中身を `www.sekiboclub.com` の1行だけにする
2. Wixのドメイン管理で、`www` の CNAME レコードを `sekiboclub.github.io` に向ける
3. GitHubの Settings → Pages → Custom domain に `www.sekiboclub.com` を入力
4. DNSが反映されると「Enforce HTTPS」にチェックが入れられるようになるので、チェックする

Wixのサイト自体を解約する前に、この切り替えを済ませておくと空白期間が出ません。
