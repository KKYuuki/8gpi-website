# For Future Developers

This is a guide for deploying NextJs projects to Clouflare Workers (using [OpenNext](https://opennext.js.org/cloudflare/get-started))

> Initial notes: Workers only support uploading files below 25MB, so if you have an asset that exceeds that, try out Handbrake (Video) or XnConvert (Images)

## Installation & Project Setup

### Package Installation

First of all, _cd_ to your project directory (where the package.json is found).

Install **OpenNext** using your package manager

```cli
npm install @opennextjs/cloudflare@latest
```

> I recommend using pnpm, npm is tiring and uses too much space

Also install wrangler and opennext types as a dev dependency so you can work on stuff and test it out

```cli
npm install --save-dev wrangler@latest @opennextjs/aws
```

### Files

Create a `.dev.vars` file in your root directory (where this readme is located)

```
NEXTJS_ENV=development
```

> The NEXTJS_ENV variable defines the environment to use when loading Next.js .env files. It defaults to "production" when not defined.

[*Optional*] Create a `open-next.config.ts` in the root directory. You may skip this step as it can be generated if you preview locally.

```ts
import { defineCloudflareConfig } from "@opennextjs/cloudflare"
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache"

export default defineCloudflareConfig({
    incrementalCache: r2IncrementalCache,
})
```

For Static Caching, create a ```_headers``` file in your ```/public``` directory
```
/_next/static/*
  Cache-Control: public,max-age=31536000,immutable
```

## Configuration

Create the _wrangler_ (`wrangler.jsonc`) file once again in the root directory

```jsonc
{
    "$schema": "node_modules/wrangler/config-schema.json",
    "main": ".open-next/worker.js",
    "name": "my-app",
    "compatibility_date": "2024-12-30",
    "compatibility_flags": [
        // Enable Node.js API
        // see https://developers.cloudflare.com/workers/configuration/compatibility-flags/#nodejs-compatibility-flag
        "nodejs_compat",
        // Allow to fetch URLs in your app
        // see https://developers.cloudflare.com/workers/configuration/compatibility-flags/#global-fetch-strictly-public
        "global_fetch_strictly_public"
    ],
    "assets": {
        "directory": ".open-next/assets",
        "binding": "ASSETS"
    },
    "services": [
        {
            "binding": "WORKER_SELF_REFERENCE",
            // The service should match the "name" of your worker
            "service": "my-app"
        }
    ],
    "r2_buckets": [
        // Create a R2 binding with the binding name "NEXT_INC_CACHE_R2_BUCKET"
        // {
        //   "binding": "NEXT_INC_CACHE_R2_BUCKET",
        //   "bucket_name": "<BUCKET_NAME>",
        // },
    ],
    "vars": {
        // Variables Here
        "VARIABLE_NAME": "<VARIABLE-CONTENT"
    },
    "routes": [
        // Domain Binding (Useful if we have access to the domain in our cloudflare dashboard)
        // {
        //   "pattern": "domain.com",
        //   "custom_domain": true
        // }
    ]
}
```

Update your ```package.json``` scripts to utilize **OpenNext**
```json
"build": "next build",
"preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
"deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy",
"upload": "opennextjs-cloudflare build && opennextjs-cloudflare upload",
"cf-typegen": "wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts",
```

Then finally add ```.open-next``` to your ```.gitignore``` to prevent uploading the build output

## Cloudflare Workers Deployment

Once project is setup and no issues are present anymore, **push** to Github then set-up/create a new **worker** in cloudflare.

Import the Repository you created then setup the **Build & deploy commands** for the worker

**Build**

```
npx opennextjs-cloudflare build
```

**Deploy**

```
npx opennextjs-cloudflare deploy
```

After you do that, it should be done!
