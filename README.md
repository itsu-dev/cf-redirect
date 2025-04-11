# cf-redirect (Japanese)
任意の場所に恒久的にリダイレクトするための Cloudflare Workers スクリプト

## 使用方法
1. Cloudflare Worker を作成する
2. スクリプトをデプロイする
3. 環境変数 `URL` を設定し、リダイレクト先の URL を指定する
4. リダイレクト元の URL に一致する Workers Route を設定する

## 例
https://kdb.itsu.dev -> https://make-it-tsukuba.github.io/alternative-tsukuba-kdb/

---

# cf-redirect (English)
Cloudflare Workers script for permanently redirecting to anywhere.

## Usage
1. Create a new Cloudflare Worker.
2. Deploy the script.
3. Set a environment variable named `URL` with the URL you want to redirect to.
4. Set up a route for the Worker to match the URL you want to redirect from.

## Example
https://kdb.itsu.dev -> https://make-it-tsukuba.github.io/alternative-tsukuba-kdb/
