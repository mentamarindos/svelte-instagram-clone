
/**
 * @roxi/routify 2.18.8
 * File generated Wed Aug 17 2022 04:45:33 GMT-0600 (hora estándar central)
 */

export const __version = "2.18.8"
export const __timestamp = "2022-08-17T10:45:33.504Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isPage": true,
      "path": "/feed",
      "id": "_feed",
      "component": () => import('../src/pages/feed.svelte').then(m => m.default)
    },
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isPage": true,
      "path": "/login",
      "id": "_login",
      "component": () => import('../src/pages/login.svelte').then(m => m.default)
    },
    {
      "isPage": true,
      "path": "/postDetails",
      "id": "_postDetails",
      "component": () => import('../src/pages/postDetails.svelte').then(m => m.default)
    },
    {
      "isPage": true,
      "path": "/signup",
      "id": "_signup",
      "component": () => import('../src/pages/signup.svelte').then(m => m.default)
    }
  ],
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

