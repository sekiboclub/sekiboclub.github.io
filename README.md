# sekiboclub.github.io

石棒クラブ 公式サイト（静的サイト）。

## 構成

```
docs/
  index.html         トップ（Mission / NEWS / 石棒クラブとは / 石棒とは / 活動内容 + EN）
  about-us.html      わたしたち（MVV・はじまり・考古民俗館）
  sekibo.html        石棒とは
  3d.html            3Dデータ
  activity.html      活動内容
  sekibokun.html     石棒くん
  mekasekibokun.html メカ石棒くん
  special.html       石棒強化月間（年ごとのテーマはここに追記）
  press.html         掲載・登壇実績
  about.html         団体概要・お問い合わせ
  style.css      スタイル（色・書体はここの :root で一括変更）
  app.js         日英切替
  img/           写真（未配置）
```

## 公開手順（GitHub Pages）

1. GitHub で `sekiboclub` という名前の Organization もしくはユーザーアカウントを用意する
2. リポジトリ名を `sekiboclub.github.io` で新規作成
3. この `docs/` の中身をリポジトリ直下に置いて push
4. Settings → Pages → Source: `Deploy from a branch`、Branch: `main` / `(root)`
5. 数分で https://sekiboclub.github.io/ で公開されます

## 来年、独自ドメイン（www.sekiboclub.com）を接続する場合

- リポジトリ直下に `CNAME` ファイルを作り、中身を `www.sekiboclub.com` の1行だけにする
- ドメイン側で `www` の CNAME を `sekiboclub.github.io` に向ける
- Settings → Pages → Custom domain に入力し、Enforce HTTPS にチェック

## 写真

`docs/img/` に配置済み（長辺1600px・JPEG品質82に縮小してあります）。

| ファイル | 内容 | 使用箇所 |
| --- | --- | --- |
| logo-crop.png | 石棒クラブ ロゴ（余白を切り落としたもの） | 全ページのヘッダー・フッター |
| sekibokun.png | 石棒くん（ファビコン・OG画像兼用） | 石棒くん、トップ、石棒とは、強化月間 |
| meka-cut.png | メカ石棒くん（背景を透過処理） | メカ石棒くん、トップ、3Dデータ、強化月間 |
| sekibo-hero.jpg | 人の姿をかたどったような石棒 | トップ（メイン） |
| sekibo-vertical.jpg | 白背景の石棒3本 | 未使用（予備） |
| museum.jpg | 雪の考古民俗館・CLOSED看板 | トップ、わたしたち |
| museum-tour.jpg | 展示室での学芸員の解説 | トップ |
| sekibo-case.jpg | 製作工程ごとに並ぶ展示 | 石棒とは |
| exhibit-guide.jpg | 展示ケースを指さして解説 | 石棒とは |
| 3d-work.jpg | 3Dモデル生成の作業 | 3Dデータ |
| printed-sekibo.jpg | 出力した石棒と本物 | 3Dデータ |
| shooting.jpg | 収蔵庫での撮影 | 3Dデータ |
| talk-event.jpg | 縄文人の装いのトークイベント | 強化月間、活動内容 |
| ar-terrain.jpg | 地形模型のそばでの作業 | 活動内容 |
| storage-visit.jpg | 収蔵庫のバックヤードツアー | 活動内容 |
| forest.jpg | 森でのフィールドワーク | 団体概要 |
| il-jomon-pair.png | 石棒を持つ縄文人ペア | わたしたち、トップ、活動内容 |
| il-girl.png | 縄文人の女の子 | トップ、活動内容 |
| il-boy.png | 縄文人の男の子 | 3Dデータ |
| il-doki.png | 縄文土器 | トップ、団体概要 |
| il-tsurite.png | 釣手土器 | トップ、強化月間 |
| il-dogu.png | 土偶 | 石棒とは、掲載・登壇実績 |
| il-sekibo.png | 石棒のイラスト（渦模様） | トップ、石棒とは |

追加・差し替えは `<div class="ph ...">` の中身を置き換えます。

```html
<div class="ph w"><img src="img/newphoto.jpg" alt="写真の説明" /></div>
```

`ph v` が縦4:5、`ph w` が横16:7、`ph h` が横16:9です。

未配置：石棒くん・メカ石棒くんのイラスト、ロゴ、ファビコン、OG画像。

## 年ごとの強化月間テーマの追加

`special.html` の `<ul class="arch">` に1行足すだけです。

```html
<li><span class="off"><em>2026</em><span>テーマ名</span><i></i></span></li>
```

特設サイトのURLがある年はリンクにできます。

```html
<li><a href="URL"><em>2026</em><span>テーマ名</span><i>→</i></a></li>
```
