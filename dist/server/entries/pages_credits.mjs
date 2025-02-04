import { i as imageLoader, a as assetBaseUrl, b as import1 } from "../chunks/chunk-CMMkv9xN.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Body, Box, Heading, Paragraph, RichTextLink } from "@webstudio-is/sdk-components-react";
/* empty css                       */
import { ReactSdkContext } from "@webstudio-is/react-sdk/runtime";
import { redirect } from "vike/abort";
import { loadResources } from "@webstudio-is/sdk/runtime";
import "react-dom/server";
import "vike/server";
import "@webstudio-is/sdk-components-react-radix";
const siteName = "VIA";
const favIconAsset = { "id": "93855c4cc520ed55dbe42dc663eaa7836ce1704f8844f12794ef802e3bd923ee", "name": "logo_r1qaJQiri6sK3rPyq-Sar.svg", "description": null, "projectId": "a3b7207d-4a49-4b2a-9978-e5f461b55cfb", "size": 16100, "type": "image", "format": "svg", "createdAt": "2024-10-14T22:25:38.984+00:00", "meta": { "width": 280, "height": 280 } };
const pageFontAssets = [];
const pageBackgroundImageAssets = [];
const Page = ({}) => {
  return /* @__PURE__ */ jsx(
    Body,
    {
      className: `w-body`,
      children: /* @__PURE__ */ jsx(
        Box,
        {
          className: `w-box`,
          children: /* @__PURE__ */ jsx(
            Box,
            {
              tag: "main",
              className: `w-box`,
              children: /* @__PURE__ */ jsx(
                Box,
                {
                  tag: "section",
                  className: `w-box cna0hdz c1mzb2kd`,
                  children: /* @__PURE__ */ jsxs(
                    Box,
                    {
                      className: `w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g cn6056e c1117wcl c1fd0kk1 c11gzs80`,
                      children: [
                        /* @__PURE__ */ jsx(
                          Heading,
                          {
                            className: `w-heading c11nr3ex cy1haag c32myit cwrra4i c4rpps8 c1d23h5a cnu4kgu c1yb3n9o cbrrmm8 cuo9dm5 c40zsbj c13cx24t c1my01bv c8itdy4 c1dhz37v c1xzir7e`,
                            children: "Credits & License"
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          Box,
                          {
                            className: `w-box c1rco612`,
                            children: [
                              /* @__PURE__ */ jsxs(
                                Paragraph,
                                {
                                  className: `w-paragraph`,
                                  children: [
                                    "This template was adapted from ",
                                    /* @__PURE__ */ jsx(
                                      RichTextLink,
                                      {
                                        href: "https://www.figma.com/@framer",
                                        target: "_blank",
                                        rel: "nofollow",
                                        className: `w-rich-text-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`,
                                        children: "@Framer's"
                                      }
                                    ),
                                    " ",
                                    /* @__PURE__ */ jsx(
                                      RichTextLink,
                                      {
                                        href: "https://www.figma.com/community/file/1387793529956204409",
                                        target: "_blank",
                                        className: `w-rich-text-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`,
                                        children: "original design"
                                      }
                                    ),
                                    " in the Figma Community. "
                                  ]
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                Paragraph,
                                {
                                  className: `w-paragraph`,
                                  children: "Some modifications were made to the design to adapt it to Webstudio."
                                }
                              ),
                              /* @__PURE__ */ jsxs(
                                Paragraph,
                                {
                                  className: `w-paragraph`,
                                  children: [
                                    "Licensed under ",
                                    /* @__PURE__ */ jsx(
                                      RichTextLink,
                                      {
                                        href: "https://creativecommons.org/licenses/by/4.0/",
                                        target: "_blank",
                                        className: `w-rich-text-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`,
                                        children: "CC BY 4.0"
                                      }
                                    )
                                  ]
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                }
              )
            }
          )
        }
      )
    }
  );
};
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
    title: "Credits and License",
    description: "",
    excludePageFromSearch: true,
    language: "",
    socialImageAssetName: void 0,
    socialImageUrl: "",
    status: 200,
    redirect: "",
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
    definedAtData: { "filePathToShowToUser": "/pages/credits/+Head.tsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/credits/+Page.tsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import3
    }
  },
  ["data"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/credits/+data.ts", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import4
    }
  }
};
export {
  configValuesSerialized
};
