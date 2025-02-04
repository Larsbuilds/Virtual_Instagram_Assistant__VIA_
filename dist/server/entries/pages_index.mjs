import { i as imageLoader, f as favIconAsset, p as pageFontAssets, c as pageBackgroundImageAssets, s as siteName, a as assetBaseUrl, P as Page, b as import1 } from "../chunks/chunk-CMMkv9xN.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
/* empty css                       */
import { ReactSdkContext } from "@webstudio-is/react-sdk/runtime";
import { redirect } from "vike/abort";
import { loadResources } from "@webstudio-is/sdk/runtime";
import "react-dom/server";
import "vike/server";
import "@webstudio-is/sdk-components-react";
import "@webstudio-is/sdk-components-react-radix";
const Head = ({ data: data2 }) => {
  const { pageMeta } = data2;
  const { origin } = new URL(data2.url);
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: origin
  };
  let socialImageUrl = pageMeta.socialImageUrl;
  if (pageMeta.socialImageAssetName) {
    socialImageUrl = `${origin}${imageLoader({
      src: pageMeta.socialImageAssetName
    })}`;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    data2.url && /* @__PURE__ */ jsx("meta", { property: "og:url", content: data2.url }),
    /* @__PURE__ */ jsx("title", { children: pageMeta.title }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: pageMeta.title }),
    pageMeta.description && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("meta", { name: "description", content: pageMeta.description }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: pageMeta.description })
    ] }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: siteName }),
    socialImageUrl && /* @__PURE__ */ jsx("meta", { property: "og:image", content: pageMeta.socialImageUrl }),
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(ldJson, null, 2)
        }
      }
    ),
    pageMeta.excludePageFromSearch && /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" }),
    pageMeta.custom.map(({ property, content }) => /* @__PURE__ */ jsx("meta", { property, content }, property)),
    favIconAsset && /* @__PURE__ */ jsx(
      "link",
      {
        rel: "icon",
        href: imageLoader({
          src: `${assetBaseUrl}${favIconAsset.name}`
        })
      }
    ),
    pageFontAssets.map((asset) => /* @__PURE__ */ jsx(
      "link",
      {
        rel: "preload",
        href: `${assetBaseUrl}${asset.name}`,
        as: "font",
        crossOrigin: "anonymous"
      },
      asset.id
    )),
    pageBackgroundImageAssets.map((asset) => /* @__PURE__ */ jsx(
      "link",
      {
        rel: "preload",
        href: `${assetBaseUrl}${asset.name}`,
        as: "image"
      },
      asset.id
    ))
  ] });
};
const import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Head
}, Symbol.toStringTag, { value: "Module" }));
const PageComponent = ({ data: data2 }) => {
  const { system, resources, url } = data2;
  return /* @__PURE__ */ jsx(
    ReactSdkContext.Provider,
    {
      value: {
        imageLoader,
        assetBaseUrl,
        resources
      },
      children: /* @__PURE__ */ jsx(Page, { system }, url)
    }
  );
};
const import3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PageComponent
}, Symbol.toStringTag, { value: "Module" }));
const getResources = (_props) => {
  const _data = /* @__PURE__ */ new Map([]);
  const _action = /* @__PURE__ */ new Map([]);
  return { data: _data, action: _action };
};
const getPageMeta = ({
  system,
  resources
}) => {
  return {
    title: "Boost your rankings with AI.",
    description: "Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.",
    excludePageFromSearch: false,
    language: void 0,
    socialImageAssetName: "ascend-cover_aPSGjSz0r-u7Gec3vty3n.png",
    socialImageUrl: void 0,
    status: void 0,
    redirect: void 0,
    custom: []
  };
};
const data = async (pageContext) => {
  const url = new URL(pageContext.urlOriginal, "http://url");
  const headers = new Headers(pageContext.headers ?? {});
  const host = headers.get("x-forwarded-host") || headers.get("host") || "";
  url.host = host;
  url.protocol = "https";
  const params = pageContext.routeParams;
  const system = {
    params,
    search: Object.fromEntries(url.searchParams),
    origin: url.origin
  };
  const resources = await loadResources(fetch, getResources().data);
  const pageMeta = getPageMeta({ system, resources });
  if (pageMeta.redirect) {
    const status = pageMeta.status === 301 || pageMeta.status === 302 ? pageMeta.status : 302;
    throw redirect(pageMeta.redirect, status);
  }
  return {
    url: url.href,
    system,
    resources,
    pageMeta
  };
};
const import4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
const configValuesSerialized = {
  ["isClientRuntimeLoaded"]: {
    type: "computed",
    definedAtData: null,
    valueSerialized: {
      type: "js-serialized",
      value: true
    }
  },
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/renderer/+onRenderHtml.tsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import1
    }
  },
  ["Head"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/index/+Head.tsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/index/+Page.tsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import3
    }
  },
  ["data"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/index/+data.ts", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import4
    }
  }
};
export {
  configValuesSerialized
};
