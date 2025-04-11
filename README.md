# cf-redirect
Cloudflare Workers script for permanently redirecting to anywhere.

## Usage
1. Create a new Cloudflare Worker.
2. Deploy the script.
3. Set a environment variable named `URL` with the URL you want to redirect to.
4. Set up a route for the Worker to match the URL you want to redirect from.

## Example
https://kdb.itsu.dev -> https://make-it-tsukuba.github.io/alternative-tsukuba-kdb/
