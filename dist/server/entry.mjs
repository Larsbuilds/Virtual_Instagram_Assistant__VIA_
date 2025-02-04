import { setGlobalContext_buildEntry } from "vike/__internal";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/pages/credits",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/credits", "definedBy": "/pages/credits/" },
    loadConfigValuesAll: () => import("./entries/pages_credits.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/pages/index/" },
    loadConfigValuesAll: () => import("./entries/pages_index.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/style-guide",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/style-guide", "definedBy": "/pages/style-guide/" },
    loadConfigValuesAll: () => import("./entries/pages_style-guide.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-!~{005}~.js": {
    "file": "assets/static/app_generated_index-6937cd5a.BnzRO7Bk.css",
    "src": "_chunk-!~{005}~.js"
  },
  "_chunk-DK-mUwSY.js": {
    "file": "assets/chunks/chunk-DK-mUwSY.js",
    "name": "constants"
  },
  "node_modules/vike/dist/esm/client/server-routing-runtime/entry.js": {
    "file": "assets/entries/entry-server-routing.C-2oteeX.js",
    "name": "entries/entry-server-routing",
    "src": "node_modules/vike/dist/esm/client/server-routing-runtime/entry.js",
    "isEntry": true,
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/pages/credits",
      "virtual:vike:pageConfigValuesAll:client:/pages/index",
      "virtual:vike:pageConfigValuesAll:client:/pages/style-guide"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/credits": {
    "file": "assets/entries/pages_credits.B1xnpkex.js",
    "name": "entries/pages/credits",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/credits",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-DK-mUwSY.js"
    ],
    "css": [
      "assets/static/app_generated_index-6937cd5a.BnzRO7Bk.css"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/index": {
    "file": "assets/entries/pages_index.D404d4cn.js",
    "name": "entries/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-DK-mUwSY.js"
    ],
    "css": [
      "assets/static/app_generated_index-6937cd5a.BnzRO7Bk.css"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/style-guide": {
    "file": "assets/entries/pages_style-guide.B4_iAUyg.js",
    "name": "entries/pages/style-guide",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/style-guide",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-DK-mUwSY.js"
    ],
    "css": [
      "assets/static/app_generated_index-6937cd5a.BnzRO7Bk.css"
    ]
  }
};
  const pluginManifest = {
    "version": "0.4.220",
    "usesClientRouter": false,
    "baseServer": "/",
    "baseAssets": "/",
    "includeAssetsImportedByServer": true,
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setGlobalContext_buildEntry({
    pageFiles,
    assetsManifest,
    pluginManifest
  });
}
