
/**
 * @roxi/routify 2.18.8
 * File generated Tue Oct 04 2022 22:18:13 GMT-0600 (hora estándar central)
 */

export const __version = "2.18.8"
export const __timestamp = "2022-10-05T04:18:13.344Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "feed.svelte",
      "filepath": "/feed.svelte",
      "name": "feed",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/xampp/htdocs/PROYECTOS/instaclone/src/pages/feed.svelte",
      "importPath": "../src/pages/feed.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/feed",
      "id": "_feed",
      "component": () => import('../src/pages/feed.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/xampp/htdocs/PROYECTOS/instaclone/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "login.svelte",
      "filepath": "/login.svelte",
      "name": "login",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/xampp/htdocs/PROYECTOS/instaclone/src/pages/login.svelte",
      "importPath": "../src/pages/login.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/login",
      "id": "_login",
      "component": () => import('../src/pages/login.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "postDetails.svelte",
      "filepath": "/postDetails.svelte",
      "name": "postDetails",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/xampp/htdocs/PROYECTOS/instaclone/src/pages/postDetails.svelte",
      "importPath": "../src/pages/postDetails.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/postDetails",
      "id": "_postDetails",
      "component": () => import('../src/pages/postDetails.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "signup.svelte",
      "filepath": "/signup.svelte",
      "name": "signup",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/xampp/htdocs/PROYECTOS/instaclone/src/pages/signup.svelte",
      "importPath": "../src/pages/signup.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/signup",
      "id": "_signup",
      "component": () => import('../src/pages/signup.svelte').then(m => m.default)
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

