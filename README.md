# approve-form-with-GAS

## これは何？

GAS を利用した Google Form ベースの承認申請受け付けと、それに対する決裁をするウェブアプリケーションです。

Google Form のオーナーが決裁権を持ち、Google Form の編集権限を持つユーザーが決裁状況を確認できます。

煩雑なメールのやり取りを省略しつつも、メール上に証跡を残しつつ、決裁フローを回すことが可能になります。

ざっくりとしたフローは以下の図の通りです。

![シーケンス図](http://www.plantuml.com/plantuml/png/hPBBJi9068NtynGJzhv05mOJuyf4eqymj0Df0XHx8N47dP20Q63X9H0lY9T4YKOa6iK67sReXHMl86qppLJGk73NPBxp_-USlqbDHwfkvB80855NL9Xm3mTUh-wLAWc8DBXIA6Hb4ULra5ACl8JKNKPGSaJDEqeiIZe1keLt3ApfQugQus2dzkdT7r3IzadpZGrLbIBUH1dCjeOOjzK7LFOw7jRjUij-l0vUDz9fMSH0GZfA8Gr7XintIghKxF9kjcTw7dNwG--gJCa3DPy2RXMBieJNbGm0KLQujCod4M3eRZmwctGitvDSH3gE1UQ-cPfj5w3R-fZiFyUP6HJcY4-VbDhknStKgb9o6NJRcrgrEINhvozQ2Iyq37YBlcNkA08C6tL8nUxqxSQnFJg9OiUknup41qIPfbR3RjxEFW3twBDHwm8CRn47k7BSbwPpVheusdTDTC3VPH9UcEL_6ecIpKtWVxrmGYm0dtdlrHcKtUxGR-udjqcSbunSzWi0)


## 導入方法

Google Form のオーナーを決裁権限者とします。導入手順は原則決裁権限者ののアカウントでやる方が混乱がないでしょう。
GAS のコードの編集は編集者でも可能ですが、ウェブアプリケーションのデプロイ、トリガーの設定はオーナーのアカウントでやる必要があります。

1. Google Form を作成する（要オーナーアカウント）
2. Google Form に紐づいた GAS プロジェクトを作成する（要オーナーアカウント）
3. GAS プロジェクトに src ディレクトリ内のファイルをアップロードする
4. GCP プロジェクトを作成し、GAS プロジェクトを紐づける（要オーナーアカウント）
5. GCP プロジェクトで OAuth 同意画面を設定する
6. GCP プロジェクトで Google Drive API を有効化する
7. GAS プロジェクトで フォーム送信時のトリガーを設定する（要オーナーアカウント）
8. Form に質問を設定する
9. 質問の item ID を config.gs に書き込む
10. GAS プロジェクトで web アプリケーションをデプロイする（要オーナーアカウント）
11. ログ記録用のスプレッドシートを作成する（要オーナーアカウント）
12. GAS プロジェクトでスクリプトプロパティを設定する

### Google Form を作成する

### Google Form に紐づいた GAS プロジェクトを作成する

### GAS プロジェクトに src ディレクトリ内のファイルをアップロードする

### GCP プロジェクトを作成し、GAS プロジェクトを紐づける

### GCP プロジェクトで OAuth 同意画面を設定する

### GCP プロジェクトで Google Drive API を有効化する

### GAS プロジェクトで フォーム送信時のトリガーを設定する

### Form に質問を設定する

### 質問の item ID を config.gs に書き込む

### GAS プロジェクトで web アプリケーションをデプロイする（要オーナーアカウント）

### ログ記録用のスプレッドシートを作成する

### GAS プロジェクトでスクリプトプロパティを設定する

## カスタマイズについて
