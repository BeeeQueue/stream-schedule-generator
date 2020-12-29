# VueDX slowdown example

### Reproduction steps

Found on `node 14.15.1`, `yarn 1.22.10`

1. Install dependencies - `yarn`
1. Go to [`src/modules/sidebar/Tabs.vue`](./src/modules/sidebar/Tabs.vue)
1. Uncomment line 28 as stated in comments
1. The error on `asdasd` should not appear until running the `Restart TypeScript Service` action, or waiting an ungodly amount of time

### What causes it

[Line 13 in `tsconfig.json`](./tsconfig.json), the `@vuedx/typescript-plugin-vue` plugin.

Commenting this line and restarting the TS service will return everything to the normal speed.
