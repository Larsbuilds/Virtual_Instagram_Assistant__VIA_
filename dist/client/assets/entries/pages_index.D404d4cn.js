import{i,j as e,h as p,p as m,k as u,s as d,e as s,R as g,P as x,g as f}from"../chunks/chunk-DK-mUwSY.js";/* empty css                      */const j=({data:o})=>{const{pageMeta:t}=o,{origin:r}=new URL(o.url),n={"@context":"https://schema.org","@type":"WebSite",name:d,url:r};let l=t.socialImageUrl;return t.socialImageAssetName&&(l=`${r}${i({src:t.socialImageAssetName})}`),e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:site_name",content:d}),l&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:c})=>e.jsx("meta",{property:a,content:c},a)),p&&e.jsx("link",{rel:"icon",href:i({src:`${s}${p.name}`})}),m.map(a=>e.jsx("link",{rel:"preload",href:`${s}${a.name}`,as:"font",crossOrigin:"anonymous"},a.id)),u.map(a=>e.jsx("link",{rel:"preload",href:`${s}${a.name}`,as:"image"},a.id))]})},y=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),h=({data:o})=>{const{system:t,resources:r,url:n}=o;return e.jsx(g.Provider,{value:{imageLoader:i,assetBaseUrl:s,resources:r},children:e.jsx(x,{system:t},n)})},S=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{T as configValuesSerialized};
