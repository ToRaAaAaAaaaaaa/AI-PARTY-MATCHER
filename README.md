# AI政党マッチング

Claude AIを使用した日本の政党マッチングアプリケーションです。ユーザーの政治的な考えや重視する政策を入力すると、AIが分析して最適な政党を提案します。

## 前提条件

このプロジェクトを実行するには、以下がインストールされている必要があります：

- **Node.js** (バージョン 18 以上推奨)
- **npm** (Node.jsに同梱されています)

### Node.jsのインストール

**まだインストールしていない場合：**

- [Node.js公式サイト](https://nodejs.org/)からダウンロードしてインストール
- LTS（長期サポート）版を推奨

**インストール確認：**

```bash
node --version
npm --version
```

## セットアップ方法

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. APIキーの設定

`.env.example` を `.env` にコピーします：

```bash
cp .env.example .env
```

`.env` ファイルを開いて、Anthropic APIキーを設定します：

```env
VITE_ANTHROPIC_API_KEY=sk-ant-xxxxx
```

**APIキーの取得方法：**

- [Anthropic Console](https://console.anthropic.com/)にアクセス
- アカウントを作成またはログイン
- API Keysセクションで新しいAPIキーを作成
- 取得したキーを`.env`ファイルに貼り付け

### 3. アプリケーションの起動

#### 方法1: 簡単起動（推奨）

```bash
npm start
```

バックエンドサーバーとフロントエンド開発サーバーが同時に起動します。

#### 方法2: 個別起動

**ターミナル1（バックエンドサーバー）:**

```bash
npm run server
```

**ターミナル2（フロントエンド開発サーバー）:**

```bash
npm run dev
```

ブラウザで `http://localhost:5174` を開いてアプリケーションにアクセスできます。

### 再起動方法（VSCodeを閉じた後）

VSCodeを閉じた後、再度アプリケーションを起動する手順：

1. **プロジェクトディレクトリに移動**

```bash
cd /home/tora/projects/ai-party-matcher
```

2. **アプリケーションを起動**

```bash
npm start
```

3. **ブラウザでアクセス**

http://localhost:5174 を開く

**停止方法:** `Ctrl + C` を押す

## アーキテクチャ

このアプリケーションは、フロントエンドとバックエンドで構成されています：

- **フロントエンド** (React + Vite): ポート 5174
  - ユーザーインターフェース
  - ユーザー入力の収集と結果表示

- **バックエンド** (Express): ポート 3001
  - Claude APIとの通信
  - APIキーの安全な管理
  - CORS対応

## 使用技術

- **React** - UIライブラリ
- **Vite** - フロントエンドビルドツール
- **Express** - バックエンドサーバー
- **Tailwind CSS** - スタイリング
- **Lucide React** - アイコン
- **Claude API (Sonnet 4)** - AI分析エンジン

## 機能

- ユーザーの政治的な考えをテキストで入力
- Claude AIによる政策志向の分析
- 適合度の高い政党を3つ提案
- 各政党の推薦理由を詳しく表示

## セキュリティとプライバシー

### APIキーの管理

- **重要**: `.env`ファイルは`.gitignore`に含まれており、Gitにコミットされません
- APIキーは絶対に公開リポジトリにコミットしないでください
- `.env.example`はコミット可能（実際のキーは含まれていません）

### リポジトリの共有

このプロジェクトを他の人と共有する場合：

1. **GitHubでプライベートリポジトリとして公開**
   - Settings → Danger Zone → Change visibility → Make private

2. **特定のユーザーのみに共有**
   - Settings → Collaborators and teams → Add people
   - ユーザー名/メールアドレスを入力して招待

3. **共有相手への案内**
   - このREADMEの「セットアップ方法」に従って環境構築
   - 各自で`.env`ファイルを作成し、自分のAPIキーを設定

## Collaborator（コラボレーター）として追加する方法

### オーナー側：Collaboratorを招待する手順

#### 1. GitHubリポジトリにアクセス
- このリポジトリのGitHubページを開きます
- URL: `https://github.com/[あなたのユーザー名]/AI-PARTY-MATCHER`

#### 2. Settings（設定）を開く
- リポジトリページの上部にある **Settings** タブをクリックします
- （リポジトリのオーナーまたは管理者権限が必要です）

#### 3. Collaborators and teamsを選択
- 左サイドバーの **Access** セクションから **Collaborators and teams** をクリックします
- プライベートリポジトリの場合、パスワード確認を求められることがあります

#### 4. Collaboratorを追加
- **Add people** ボタンをクリックします
- 招待したい人の以下のいずれかを入力します：
  - GitHubユーザー名
  - GitHubに登録しているメールアドレス
  - フルネーム（GitHubプロフィールに登録されている場合）

#### 5. 権限レベルの選択
招待時に以下の権限レベルから選択できます：

- **Read（読み取り）**: コードの閲覧とクローンのみ可能
- **Triage（トリアージ）**: Issueやプルリクエストの管理も可能
- **Write（書き込み）**: コードのプッシュとプルリクエストのマージが可能（推奨）
- **Maintain（メンテナンス）**: プロジェクトの管理（設定変更など）も可能
- **Admin（管理者）**: すべての権限（リポジトリの削除なども可能）

**開発協力の場合は通常 "Write" 権限を推奨します。**

#### 6. 招待を送信
- **Add [ユーザー名] to this repository** ボタンをクリックします
- 相手に招待メールが送信されます

### 招待された側：Collaboratorとして参加する手順

#### 1. 招待メールを確認
- GitHubに登録しているメールアドレスに招待メールが届きます
- 件名: "[ユーザー名] invited you to [リポジトリ名]"
- メール内の **View invitation** リンクをクリックします

#### 2. GitHubで招待を受諾
- GitHubの招待ページが開きます
- **Accept invitation** ボタンをクリックして招待を受諾します
- これでリポジトリへのアクセス権が付与されます

#### 3. リポジトリをクローン
ローカル環境にリポジトリをクローンします：

```bash
# HTTPSを使用する場合
git clone https://github.com/[オーナーのユーザー名]/AI-PARTY-MATCHER.git

# SSHを使用する場合（SSH鍵を設定済みの場合）
git clone git@github.com:[オーナーのユーザー名]/AI-PARTY-MATCHER.git
```

#### 4. プロジェクトのセットアップ
クローンしたディレクトリに移動してセットアップを行います：

```bash
cd AI-PARTY-MATCHER
```

##### 4.1 依存パッケージのインストール
```bash
npm install
```

##### 4.2 環境変数の設定
`.env.example` をコピーして `.env` を作成します：

```bash
cp .env.example .env
```

**重要**: `.env` ファイルに自分のAnthropic APIキーを設定してください：

```env
VITE_ANTHROPIC_API_KEY=sk-ant-xxxxx
```

**APIキーの取得方法**:
1. [Anthropic Console](https://console.anthropic.com/)にアクセス
2. アカウントを作成またはログイン
3. API Keysセクションで新しいAPIキーを作成
4. 取得したキーを`.env`ファイルに貼り付け

**セキュリティ注意**: 
- APIキーは個人ごとに異なります
- 他の人のAPIキーを使用しないでください
- `.env`ファイルは絶対にGitにコミットしないでください（`.gitignore`で除外されています）

##### 4.3 アプリケーションの起動
```bash
npm start
```

ブラウザで `http://localhost:5174` を開いてアプリケーションにアクセスできます。

#### 5. 開発作業の開始
セットアップが完了したら、開発を開始できます：

```bash
# 新しいブランチを作成
git checkout -b feature/your-feature-name

# コードを編集

# 変更をコミット
git add .
git commit -m "説明的なコミットメッセージ"

# リモートにプッシュ
git push origin feature/your-feature-name
```

### Collaboratorの確認と管理

#### 現在のCollaboratorを確認
1. リポジトリの **Settings** → **Collaborators and teams** を開く
2. 現在のCollaboratorのリストが表示されます
3. 各Collaboratorの権限レベルも確認できます

#### Collaboratorの権限を変更
1. Collaboratorのリストから対象のユーザーを探す
2. 権限レベルのドロップダウンをクリック
3. 新しい権限レベルを選択

#### Collaboratorを削除
1. Collaboratorのリストから対象のユーザーを探す
2. **Remove** ボタンをクリック
3. 確認ダイアログで削除を承認

### トラブルシューティング

#### 招待メールが届かない場合
1. GitHubの通知設定を確認：
   - GitHubにログイン → Settings → Notifications
   - メール通知が有効になっているか確認
2. 迷惑メールフォルダを確認
3. GitHubの通知ページで確認：
   - `https://github.com/notifications` にアクセス
   - 招待通知が表示されます

#### クローンできない場合
- **権限エラー**: 招待を受諾したか確認してください
- **認証エラー**: GitHubの認証情報（パスワードまたはSSH鍵）を確認してください
- **プライベートリポジトリ**: HTTPSでクローンする場合、パーソナルアクセストークンが必要な場合があります

#### APIキーが動作しない場合
1. `.env`ファイルが正しく作成されているか確認
2. APIキーの形式が正しいか確認（`sk-ant-`で始まる）
3. Anthropic Consoleでアカウントのクレジットを確認
4. サーバーを再起動（`Ctrl + C`で停止後、`npm start`で再起動）

### 安全な使用のために

- バックエンド（Express）がAPIキーを管理し、フロントエンドには公開されません
- APIキーはサーバーサイドでのみ使用されます
- CORS設定により、localhost以外からのアクセスは制限されています

## 注意事項

- このアプリケーションの分析結果はAIによる参考情報です
- 実際の投票判断には各政党の公式サイトやマニフェストを確認することをおすすめします

## ビルド

```bash
npm run build
```

ビルドされたファイルは `dist` フォルダに出力されます。
