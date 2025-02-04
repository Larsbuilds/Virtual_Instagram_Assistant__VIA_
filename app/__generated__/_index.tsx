/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import type { FontAsset, ImageAsset } from "@webstudio-is/sdk";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, Box as Box, Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Link as Link, Image as Image, Text as Text, Button as Button, Slot as Slot, Heading as Heading, Paragraph as Paragraph, List as List, ListItem as ListItem, Separator as Separator, Input as Input } from "@webstudio-is/sdk-components-react";
import { NavigationMenu as NavigationMenu, NavigationMenuList as NavigationMenuList, NavigationMenuItem as NavigationMenuItem, NavigationMenuTrigger as NavigationMenuTrigger, NavigationMenuContent as NavigationMenuContent, NavigationMenuViewport as NavigationMenuViewport, Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";


      export const siteName = "VIA";

      export const favIconAsset: ImageAsset | undefined =
        {"id":"93855c4cc520ed55dbe42dc663eaa7836ce1704f8844f12794ef802e3bd923ee","name":"logo_r1qaJQiri6sK3rPyq-Sar.svg","description":null,"projectId":"a3b7207d-4a49-4b2a-9978-e5f461b55cfb","size":16100,"type":"image","format":"svg","createdAt":"2024-10-14T22:25:38.984+00:00","meta":{"width":280,"height":280}};

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: FontAsset[] =
        []

      export const pageBackgroundImageAssets: ImageAsset[] =
        [{"id":"21e12fa17a8b40e9bed0fd03d82d3611ed6ca0237ae716657304ab2ee7b86bb6","name":"Group_1_3Lze2enBpFNP3rVOtd0Yp.svg","description":null,"projectId":"a3b7207d-4a49-4b2a-9978-e5f461b55cfb","size":1202,"type":"image","format":"svg","createdAt":"2024-12-07T03:19:14.676+00:00","meta":{"width":1200,"height":1165}},{"id":"2a350ffc39b21bcef81a65271376a40fb5af51c62fa65ac888925a285195fc87","name":"App_Wide_2x_1_(2)_yiI7phUrEJxtQAVSp0ZeL.png","description":null,"projectId":"a3b7207d-4a49-4b2a-9978-e5f461b55cfb","size":63349,"type":"image","format":"png","createdAt":"2024-12-07T03:46:16.368+00:00","meta":{"width":1266,"height":707}},{"id":"607f5aefa37cb4cdd4bba0f54e95177142c930e84aa94e568d44685bc56646f7","name":"Pattern_79YdcihVRk2R5H0fuZxz7.svg","description":null,"projectId":"a3b7207d-4a49-4b2a-9978-e5f461b55cfb","size":349246,"type":"image","format":"svg","createdAt":"2024-12-07T05:06:02.105+00:00","meta":{"width":311,"height":504}},{"id":"6479b0482613423a655e4b09fb2c76a544c6c525b6282795af54fb0504048a66","name":"App_Wide_2x_1_(1)_69MShZLi3pDA9oCPN794H.webp","description":null,"projectId":"a3b7207d-4a49-4b2a-9978-e5f461b55cfb","size":121928,"type":"image","format":"webp","createdAt":"2024-12-07T03:43:04.116+00:00","meta":{"width":2196,"height":1587}},{"id":"737e20b30d1168ca163233ceb74401e6b343465007d5c1413e0a6cae230986bf","name":"Group_1_(1)_WG8mUOjVoPgiB8j45YY9z.svg","description":null,"projectId":"a3b7207d-4a49-4b2a-9978-e5f461b55cfb","size":349514,"type":"image","format":"svg","createdAt":"2024-12-07T20:24:21.074+00:00","meta":{"width":1100,"height":473}},{"id":"aec1f7df96ff761c71ca9bd34a32bb6f456a4b92a0e098ed8f5fc064bc3c42d4","name":"Pricing_NtpbcNgAxOEKqt33rNA--.svg","description":null,"projectId":"a3b7207d-4a49-4b2a-9978-e5f461b55cfb","size":468,"type":"image","format":"svg","createdAt":"2024-12-07T04:36:56.119+00:00","meta":{"width":1199,"height":793}},{"id":"d494c878d79b907045e3fd490f2e6f9d06ea4b5bb41838271e0ddd6dd897a774","name":"Property_1_Desktop_WC1IMy9iiJ9vL4er9JyJM.webp","description":null,"projectId":"a3b7207d-4a49-4b2a-9978-e5f461b55cfb","size":12972,"type":"image","format":"webp","createdAt":"2024-12-07T04:13:52.28+00:00","meta":{"width":1980,"height":802}},{"id":"dee14ebc8829835a675719f4b754d39ca0a027e73210a71e5cd746583b6bc82f","name":"Icons_Zs8GOxaeJO22wgbZCoQDR.svg","description":null,"projectId":"a3b7207d-4a49-4b2a-9978-e5f461b55cfb","size":986,"type":"image","format":"svg","createdAt":"2024-12-07T19:37:12.696+00:00","meta":{"width":15,"height":15}}]

      
            

            export const CustomCode = () => {
              return (<></>);
            }
          

      

      const Page = ({ }: { system: any; }) => {
return <Body
className={`w-body`}>
<Box
className={`w-box`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<style>\n  /* So we don't need to add a token to every paragraph to remove margin. */\n  p {\n    margin: 0;\n  }\n\n  /* * {\n    /* Make links scroll to their sections smoothly. */\n    scroll-behavior: smooth;\n  } */\n</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>\n:root {\n  --ani-duration: var(--duration-default, .2s);\n  --ani-delay: 0s;\n  --ani-slide-offset: 20%;\n  --ani-zoom-in-scale: 1;\n  --ani-zoom-out-scale: .85;\n  --ani-flip-rotate: 30deg;\n  --ani-easing: var(--easing-default, ease);\n  --ani-fill-mode: forwards;\n}\n[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}\n@keyframes fadeIn{from{opacity:0}\nto{opacity:1}}\n@keyframes fadeOut{from{opacity:1}\nto{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}\n@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}\nto{opacity:1;translate:none}}\n@keyframes slideOut{from{opacity:1;translate:none}\nto{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}\n@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}\nto{opacity:1;scale:1}}\n@keyframes zoomOut{from{opacity:1;scale:1}\nto{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}\n@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}\nto{rotate:y 0;opacity:1}}\n@keyframes flipOutY{from{rotate:y 0;opacity:1}\nto{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}\n@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}\nto{rotate:x 0;opacity:1}}\n@keyframes flipOutX{from{rotate:x 0;opacity:1}\nto{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}\n@keyframes expandDown{from{height:0}\nto{height:var(--newHeight)}}\n@keyframes expandUp{from{height:var(--newHeight)}\nto{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}\n@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}\n</style>"}
className={`w-html-embed`} />
<Box
tag={"header"}
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh cymtqb c1fysxfs`}>
<Box
className={`w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
href={"/"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
<Image
loading={"eager"}
src={"/assets/Logo_(1)_4DOjcRBy3o604SWE02Vw5.png"}
width={153}
height={152}
alt={"logo"}
className={`w-image coe1sx2`} />
</Link>
</Fragment_1>
</Slot>
<Box
tag={"nav"}
aria-label={"main"}
className={`w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t`}>
<Slot>
<Fragment_1>
<NavigationMenu
className={`w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf`}>
<NavigationMenuList
className={`w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y`}>
<NavigationMenuItem
data-ws-index="0"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
type={"button"}
className={`w-button catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
<Text
className={`w-text`}>
{"Features"}
</Text>
<Box
className={`w-box c7ewoh2 c5m8ase clv8gve ch2prsz cg4iiql c7cjz93 c1c9nyn co9inq6 c18nx7en c13zjl4p`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
data-ws-index="0"
className={`w-menu-content c1cvcmzo cdwd3jx copqmak c1117wcl c10zkoym c1f64byh c1hne9jt c3xzas1 c1n6cdq4 c82q2z`}>
<Box
className={`w-box cry9bxc c1lfjoq7 cn6056e c1117wcl`}>
<Link
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.3487 8.56625L9.12498 7.375L7.93748 4.14875C7.86716 3.95771 7.73992 3.79283 7.57295 3.67637C7.40598 3.5599 7.2073 3.49746 7.00373 3.49746C6.80015 3.49746 6.60147 3.5599 6.4345 3.67637C6.26753 3.79283 6.1403 3.95771 6.06998 4.14875L4.87498 7.375L1.64873 8.5625C1.45768 8.63282 1.29281 8.76005 1.17634 8.92702C1.05988 9.094 0.997437 9.29267 0.997437 9.49625C0.997437 9.69983 1.05988 9.8985 1.17634 10.0655C1.29281 10.2324 1.45768 10.3597 1.64873 10.43L4.87498 11.625L6.06248 14.8512C6.1328 15.0423 6.26003 15.2072 6.427 15.3236C6.59397 15.4401 6.79265 15.5025 6.99623 15.5025C7.1998 15.5025 7.39848 15.4401 7.56545 15.3236C7.73242 15.2072 7.85965 15.0423 7.92998 14.8512L9.12498 11.625L12.3512 10.4375C12.5423 10.3672 12.7071 10.2399 12.8236 10.073C12.9401 9.906 13.0025 9.70733 13.0025 9.50375C13.0025 9.30017 12.9401 9.1015 12.8236 8.93452C12.7071 8.76755 12.5423 8.64032 12.3512 8.57L12.3487 8.56625ZM8.56248 10.7638C8.49461 10.7888 8.43297 10.8282 8.38183 10.8793C8.33068 10.9305 8.29124 10.9921 8.26623 11.06L6.99998 14.4906L5.73623 11.0625C5.71125 10.9939 5.67157 10.9316 5.61996 10.88C5.56835 10.8284 5.50606 10.7887 5.43748 10.7638L2.00935 9.5L5.43748 8.23625C5.50606 8.21128 5.56835 8.17159 5.61996 8.11998C5.67157 8.06837 5.71125 8.00608 5.73623 7.9375L6.99998 4.50938L8.26373 7.9375C8.28874 8.00537 8.32818 8.067 8.37933 8.11815C8.43047 8.1693 8.49211 8.20874 8.55998 8.23375L11.9906 9.5L8.56248 10.7638ZM8.99998 3C8.99998 2.86739 9.05266 2.74021 9.14642 2.64645C9.24019 2.55268 9.36737 2.5 9.49998 2.5H10.5V1.5C10.5 1.36739 10.5527 1.24021 10.6464 1.14645C10.7402 1.05268 10.8674 1 11 1C11.1326 1 11.2598 1.05268 11.3535 1.14645C11.4473 1.24021 11.5 1.36739 11.5 1.5V2.5H12.5C12.6326 2.5 12.7598 2.55268 12.8535 2.64645C12.9473 2.74021 13 2.86739 13 3C13 3.13261 12.9473 3.25979 12.8535 3.35355C12.7598 3.44732 12.6326 3.5 12.5 3.5H11.5V4.5C11.5 4.63261 11.4473 4.75979 11.3535 4.85355C11.2598 4.94732 11.1326 5 11 5C10.8674 5 10.7402 4.94732 10.6464 4.85355C10.5527 4.75979 10.5 4.63261 10.5 4.5V3.5H9.49998C9.36737 3.5 9.24019 3.44732 9.14642 3.35355C9.05266 3.25979 8.99998 3.13261 8.99998 3ZM15.5 6C15.5 6.13261 15.4473 6.25979 15.3535 6.35355C15.2598 6.44732 15.1326 6.5 15 6.5H14.5V7C14.5 7.13261 14.4473 7.25979 14.3535 7.35355C14.2598 7.44732 14.1326 7.5 14 7.5C13.8674 7.5 13.7402 7.44732 13.6464 7.35355C13.5527 7.25979 13.5 7.13261 13.5 7V6.5H13C12.8674 6.5 12.7402 6.44732 12.6464 6.35355C12.5527 6.25979 12.5 6.13261 12.5 6C12.5 5.86739 12.5527 5.74021 12.6464 5.64645C12.7402 5.55268 12.8674 5.5 13 5.5H13.5V5C13.5 4.86739 13.5527 4.74021 13.6464 4.64645C13.7402 4.55268 13.8674 4.5 14 4.5C14.1326 4.5 14.2598 4.55268 14.3535 4.64645C14.4473 4.74021 14.5 4.86739 14.5 5V5.5H15C15.1326 5.5 15.2598 5.55268 15.3535 5.64645C15.4473 5.74021 15.5 5.86739 15.5 6Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"VIA goal setting"}
</Text>
<Paragraph
className={`w-paragraph catu86a`}>
{"Personalize Interactions"}
</Paragraph>
</Box>
</Link>
<Link
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.9412 5.0419C12.2931 4.39231 11.5228 3.87744 10.6747 3.527C9.82668 3.17655 8.91762 2.99745 8 3.00003H7.975C4.12937 3.01315 1 6.18753 1 10.0707V11.5C1 11.7652 1.10536 12.0196 1.29289 12.2071C1.48043 12.3947 1.73478 12.5 2 12.5H14C14.2652 12.5 14.5196 12.3947 14.7071 12.2071C14.8946 12.0196 15 11.7652 15 11.5V10C15.0026 9.07839 14.8219 8.16544 14.4684 7.31426C14.115 6.46307 13.5959 5.69065 12.9412 5.0419ZM14 11.5H7.48187L10.9044 6.79378C10.9824 6.68653 11.0147 6.55266 10.9941 6.42162C10.9735 6.29058 10.9016 6.1731 10.7944 6.09503C10.6871 6.01695 10.5533 5.98468 10.4222 6.00531C10.2912 6.02594 10.1737 6.09778 10.0956 6.20503L6.245 11.5H2V10.0707C2 9.87815 2.00937 9.68815 2.02688 9.50003H3.5C3.63261 9.50003 3.75979 9.44735 3.85355 9.35358C3.94732 9.25981 4 9.13264 4 9.00003C4 8.86742 3.94732 8.74024 3.85355 8.64647C3.75979 8.55271 3.63261 8.50003 3.5 8.50003H2.20438C2.84938 6.07128 4.95438 4.23503 7.5 4.02128V5.50003C7.5 5.63264 7.55268 5.75981 7.64645 5.85358C7.74021 5.94735 7.86739 6.00003 8 6.00003C8.13261 6.00003 8.25979 5.94735 8.35355 5.85358C8.44732 5.75981 8.5 5.63264 8.5 5.50003V4.02065C9.74041 4.12504 10.9178 4.61209 11.8694 5.4145C12.8211 6.21692 13.5001 7.29508 13.8125 8.50003H12.5C12.3674 8.50003 12.2402 8.55271 12.1464 8.64647C12.0527 8.74024 12 8.86742 12 9.00003C12 9.13264 12.0527 9.25981 12.1464 9.35358C12.2402 9.44735 12.3674 9.50003 12.5 9.50003H13.9794C13.9925 9.66565 14 9.8319 14 10V11.5Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Time-saving Automation"}
</Text>
<Paragraph
className={`w-paragraph catu86a`}>
{"Handle thousands of DMs"}
</Paragraph>
</Box>
</Link>
<Link
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.5 13.5C14.5 13.6326 14.4473 13.7598 14.3536 13.8536C14.2598 13.9473 14.1326 14 14 14H2C1.86739 14 1.74021 13.9473 1.64645 13.8536C1.55268 13.7598 1.5 13.6326 1.5 13.5V3.5C1.5 3.36739 1.55268 3.24021 1.64645 3.14645C1.74021 3.05268 1.86739 3 2 3C2.13261 3 2.25979 3.05268 2.35355 3.14645C2.44732 3.24021 2.5 3.36739 2.5 3.5V9.39812L5.67063 6.625C5.7569 6.54947 5.86652 6.5059 5.9811 6.50157C6.09569 6.49725 6.20828 6.53244 6.3 6.60125L9.97563 9.35812L13.6706 6.125C13.7191 6.07704 13.7768 6.0395 13.8403 6.01467C13.9038 5.98985 13.9717 5.97827 14.0398 5.98065C14.1079 5.98303 14.1749 5.99931 14.2365 6.0285C14.2981 6.05769 14.3531 6.09917 14.398 6.15038C14.443 6.2016 14.4771 6.26148 14.4981 6.32633C14.5191 6.39119 14.5266 6.45965 14.5201 6.52752C14.5137 6.59538 14.4935 6.66122 14.4607 6.72097C14.4279 6.78073 14.3832 6.83314 14.3294 6.875L10.3294 10.375C10.2431 10.4505 10.1335 10.4941 10.0189 10.4984C9.90431 10.5028 9.79173 10.4676 9.7 10.3988L6.02437 7.64313L2.5 10.7269V13H14C14.1326 13 14.2598 13.0527 14.3536 13.1464C14.4473 13.2402 14.5 13.3674 14.5 13.5Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Visual reports"}
</Text>
<Paragraph
className={`w-paragraph catu86a`}>
{"Your site’s performance."}
</Paragraph>
</Box>
</Link>
<Link
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14 4.94376C13.8823 5.00471 13.7452 5.01644 13.6189 4.97635C13.4925 4.93627 13.3873 4.84767 13.3262 4.73001C12.849 3.7872 12.1266 2.99033 11.235 2.42314C11.1794 2.38809 11.1313 2.34245 11.0934 2.2888C11.0554 2.23516 11.0285 2.17457 11.0139 2.1105C10.9994 2.04643 10.9977 1.98012 11.0088 1.91538C11.0199 1.85063 11.0437 1.78871 11.0787 1.73314C11.1138 1.67757 11.1594 1.62946 11.2131 1.59153C11.2667 1.55361 11.3273 1.52662 11.3914 1.51211C11.4554 1.4976 11.5217 1.49585 11.5865 1.50697C11.6512 1.51808 11.7132 1.54184 11.7687 1.57689C12.8078 2.24222 13.6516 3.17162 14.2137 4.27001C14.2747 4.38771 14.2864 4.5248 14.2463 4.65114C14.2062 4.77747 14.1176 4.88273 14 4.94376ZM2.23185 5.00001C2.32345 4.99998 2.41328 4.97477 2.49153 4.92716C2.56979 4.87955 2.63346 4.81135 2.6756 4.73001C3.15285 3.7872 3.87523 2.99033 4.76685 2.42314C4.87907 2.35236 4.95857 2.2399 4.98787 2.1105C5.01718 1.9811 4.99388 1.84536 4.9231 1.73314C4.85232 1.62092 4.73986 1.54141 4.61046 1.51211C4.48106 1.48281 4.34532 1.50611 4.2331 1.57689C3.19397 2.24222 2.35021 3.17162 1.7881 4.27001C1.74862 4.34621 1.72942 4.43129 1.73235 4.51706C1.73527 4.60283 1.76022 4.6864 1.8048 4.75973C1.84938 4.83307 1.91208 4.89369 1.98687 4.93577C2.06166 4.97785 2.14603 4.99998 2.23185 5.00001ZM13.8631 11.4963C13.9517 11.6482 13.9986 11.8207 13.9992 11.9966C13.9998 12.1724 13.9541 12.3453 13.8665 12.4978C13.779 12.6503 13.6528 12.7771 13.5007 12.8652C13.3485 12.9534 13.1758 12.9999 13 13H10.45C10.3352 13.5652 10.0286 14.0733 9.5821 14.4382C9.13559 14.8032 8.57665 15.0025 7.99997 15.0025C7.42329 15.0025 6.86435 14.8032 6.41784 14.4382C5.97134 14.0733 5.66473 13.5652 5.54997 13H2.99997C2.82423 12.9997 2.65169 12.953 2.49973 12.8648C2.34776 12.7765 2.22173 12.6498 2.13435 12.4973C2.04696 12.3448 2.00129 12.172 2.00195 11.9963C2.00261 11.8205 2.04957 11.6481 2.1381 11.4963C2.70122 10.5244 2.99997 9.14251 2.99997 7.50001C2.99997 6.17393 3.52676 4.90216 4.46444 3.96448C5.40212 3.0268 6.67389 2.50001 7.99997 2.50001C9.32605 2.50001 10.5978 3.0268 11.5355 3.96448C12.4732 4.90216 13 6.17393 13 7.50001C13 9.14189 13.2987 10.5238 13.8631 11.4963ZM9.41372 13H6.58622C6.68981 13.2921 6.88135 13.545 7.13451 13.7239C7.38767 13.9027 7.69002 13.9987 7.99997 13.9987C8.30993 13.9987 8.61227 13.9027 8.86543 13.7239C9.11859 13.545 9.31013 13.2921 9.41372 13ZM13 12C12.335 10.8581 12 9.34439 12 7.50001C12 6.43915 11.5785 5.42173 10.8284 4.67159C10.0783 3.92144 9.06084 3.50001 7.99997 3.50001C6.93911 3.50001 5.92169 3.92144 5.17154 4.67159C4.4214 5.42173 3.99997 6.43915 3.99997 7.50001C3.99997 9.34501 3.66372 10.8588 2.99997 12H13Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Revenue Boost"}
</Text>
<Paragraph
className={`w-paragraph catu86a`}>
{"Integrate affiliate links "}
{""}
<br />
{""}
{"and product promotions"}
</Paragraph>
</Box>
</Link>
</Box>
<Box
className={`w-box`}>
<Link
className={`w-link cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 czx9unu cn1jd01 c12hsjsj c1ru090q c1syziaj c119suh8 cnqbj7z c1semaqr c1kectvc c18nx7en c422x95 c13zjl4p c135vpv5 c1bkqfhr c1h61a8n ci33z0 ce02iuh c15hexcm c1axwber c1l2ougi c9p707e c4rln6h c11nocyb c58h60l ce4uoav c141dmt7`}>
<Text
className={`w-text c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Multi-Platform Optimization"}
</Text>
<Paragraph
className={`w-paragraph catu86a`}>
{"Perform complex SEO audits and optimizations with a single click."}
</Paragraph>
</Link>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="1"
className={`w-menu-item`}>
<Link
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Developers"}
</Link>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="2"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
type={"button"}
className={`w-button catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
<Text
className={`w-text`}>
{"Company"}
</Text>
<Box
className={`w-box c7ewoh2 c5m8ase clv8gve ch2prsz cg4iiql c7cjz93 c1c9nyn co9inq6 c18nx7en c13zjl4p`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
data-ws-index="1"
className={`w-menu-content c1cvcmzo cdwd3jx copqmak c1117wcl ceu66s9 c1f64byh c1hne9jt c3xzas1 c1n6cdq4 c82q2z`}>
<Box
className={`w-box cry9bxc c1lfjoq7 cn6056e c1117wcl`}>
<Link
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-users-round\"><path d=\"M18 21a8 8 0 0 0-16 0\"></path><circle cx=\"10\" cy=\"8\" r=\"5\"></circle><path d=\"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"About"}
</Text>
</Box>
</Link>
<Link
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-newspaper\"><path d=\"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2\"></path><path d=\"M18 14h-8\"></path><path d=\"M15 18h-5\"></path><path d=\"M10 6h8v4h-8V6Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Blog"}
</Text>
</Box>
</Link>
<Link
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-person-standing\"><circle cx=\"12\" cy=\"5\" r=\"1\"></circle><path d=\"m9 20 3-6 3 6\"></path><path d=\"m6 8 6 2 6-2\"></path><path d=\"M12 10v4\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Careers"}
</Text>
</Box>
</Link>
<Link
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-rss\"><path d=\"M4 11a9 9 0 0 1 9 9\"></path><path d=\"M4 4a16 16 0 0 1 16 16\"></path><circle cx=\"5\" cy=\"19\" r=\"1\"></circle></svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Press"}
</Text>
</Box>
</Link>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="3"
className={`w-menu-item`}>
<Link
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Blog"}
</Link>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="4"
className={`w-menu-item`}>
<Link
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Changelog"}
</Link>
</NavigationMenuItem>
</NavigationMenuList>
<Box
className={`w-box cdwd3jx c1lzcxwg cry9bxc ct02u4h cdtylqg chmjof8 czr2pxy c3xzas1 c1n6cdq4`}>
<NavigationMenuViewport
data-ani={"zoom"}
className={`w-menu-viewport cavd3zn cpkqq5o cfugi66 cv2gy63 cxn73lu c5dy17i c1hsfuam cbvt2h6 coapalq cm26ajs cd3iwfe c1yhcvvf cwc6hbl c11r52nx ceu30e1 ce02iuh`} />
</Box>
</NavigationMenu>
</Fragment_1>
</Slot>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl`}>
<Box
className={`w-box`}>
<Box
className={`w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c6d3y84 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r`}>
<Link
className={`w-link cnrz8fp c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c10ldywu cbm6zv4 c1b1wvmf c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cheslu6 cl60rel c1ib9cr2 cr2cdex`}>
{"Join waitlist"}
</Link>
</Box>
</Box>
<Slot>
<Fragment_1>
<Dialog>
<DialogTrigger>
<Button
aria-label={"Open mobile menu"}
type={"button"}
className={`w-button cnrz8fp ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c10ldywu cbm6zv4 c1b1wvmf c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cheslu6 c9x99qz cl60rel c1ib9cr2 cr2cdex c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</Button>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9`}>
<DialogContent
className={`w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2`}>
<Box
className={`w-box cx6c9kw c1nd8hlk`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
href={"/"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
<Image
loading={"eager"}
src={"/assets/Logo_(1)_4DOjcRBy3o604SWE02Vw5.png"}
width={153}
height={152}
alt={"logo"}
className={`w-image coe1sx2`} />
</Link>
</Fragment_1>
</Slot>
<DialogClose
aria-label={"Close mobile menu"}
className={`w-close-button cnrz8fp ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c10ldywu cbm6zv4 c1b1wvmf c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cheslu6 c9x99qz cl60rel c1ib9cr2 cr2cdex c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
</Box>
<Box
tag={"nav"}
aria-label={"Main mobile"}
className={`w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof`}>
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz`}>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Features"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Integration"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Updates"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"FAQ"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Pricing"}
</Link>
</ListItem>
</List>
</Box>
<Link
className={`w-link cnrz8fp c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c10ldywu cbm6zv4 c1b1wvmf c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cheslu6 cl60rel c1ib9cr2 cr2cdex`}>
{"DOWNLOAD APP"}
</Link>
</DialogContent>
</DialogOverlay>
</Dialog>
</Fragment_1>
</Slot>
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
<Box
tag={"main"}
className={`w-box`}>
<Box
tag={"section"}
className={`w-box ch3bbj5 c1mzb2kd c1030opg c1cozyp5 crv1a4t cbrrmm8 cuo9dm5 c5egcmi cxz9xjl c1dz3al c1cl2zap c8qdjaz c1uc2zh c1l8rbde cq8dnu3 cth1c7d`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g ceu66s9 c12ae6v5 c1fd0kk1 c11gzs80`}>
<Box
className={`w-box cry9bxc c1lfjoq7 ct8c5y2 c10zkoym c1qyy4dh c1wt8a7g`}>
<Link
className={`w-link c1pu3n16 csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p c1md20bl c1e892th c1qyy4dh ct02u4h cxk6kow conc6us c108v1a0 c81fpui coapalq c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c12sm2j2 c135vpv5 ca7cv43 cl60rel c1ib9cr2 c1d7u282`}>
<Text
className={`w-text cl7jefz c341xsy c11dowh9 c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c7vx2dq c1mgacbo cff1ay0 c14z73t1 ci6yy9q c1plv2ab ckmcr2z`}>
{"New"}
</Text>
<Text
className={`w-text`}>
{"Latest integration"}
</Text>
</Link>
<Heading
tag={"h1"}
className={`w-heading c11nr3ex cy1haag c32myit cwrra4i c4rpps8 c1d23h5a cnu4kgu c1yb3n9o cbrrmm8 cuo9dm5 c40zsbj c13cx24t c1my01bv c8itdy4 c74kosi c1qom380 c1357293 c9jnjeu c1dhz37v c1xzir7e`}>
{"VIA"}
{""}
<br />
{""}
{"Virtual Influencer Assistant "}
</Heading>
<Paragraph
className={`w-paragraph c16xpvrq c1qom380 c3fmn7t c1357293 c9jnjeu czt9u4x c1dhz37v`}>
{"Welcome to VIA – Your Virtual Influencer Assistant!"}
{""}
<br />
{""}
{"Revolutionize how you connect with your fans and manage your social media presence with VIA, the ultimate AI-powered chatbot designed specifically for influencers. VIA doesn’t just automate — it brings your personality to life, engaging with your followers as if it were you."}
</Paragraph>
<Box
className={`w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c6d3y84 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r`}>
<Link
className={`w-link c1plv2ab c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cn2jcgb cdcs8wy c1m1praz c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx cblpe2z cheslu6 cl60rel c1ib9cr2 c82bfcw c1ukphsi`}>
{"Start For Free"}
</Link>
</Box>
</Box>
<Box
className={`w-box`}>
<Image
src={"/assets/App_zL4i8sX2SEd6S0cbYRfyr.png"}
width={2400}
height={1518}
loading={"eager"}
alt={"Cover of dashboard"}
className={`w-image`} />
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80`}>
<Paragraph
className={`w-paragraph c16xpvrq c1qom380 c62q3t9 c1357293 c9jnjeu czt9u4x`}>
{"Trusted by the world’s most innovative teams"}
</Paragraph>
<Box
className={`w-box copqmak c10zkoym ct8c5y2 cori9ti cstj0zg c1vrexag cl5hb04 c174sw29 cas7ks9 c155h8oe cw7dtlx czsotsp`}>
<Box
className={`w-box cc9xhl5 c1nvgabo c1u0yu0y c1i2rq6e c12n5uks csb0ifw cg5j03k c8od1c4 czr2pxy c1bkqfhr cry9bxc c1qyy4dh ct02u4h c6d3y84 c1w2ebm1 cscr3j6 c1380t7s c1yvubyx cbxwzfl ckdqtrq c1qpskvc c1qoie81`}>
<Image
src={"/assets/acme_1_SzGM5wv_nXoJMNsxf3nMp.svg"}
width={155}
height={34}
alt={"Company logo"}
className={`w-image coejy3h c1fhiulb c1av00hf cji8cjn`} />
</Box>
<Box
className={`w-box cc9xhl5 c1nvgabo c1u0yu0y c1i2rq6e c12n5uks csb0ifw cg5j03k c8od1c4 czr2pxy c1bkqfhr cry9bxc c1qyy4dh ct02u4h c6d3y84 c1w2ebm1 cscr3j6 c1380t7s c1yvubyx cbxwzfl ckdqtrq c1qpskvc c1qoie81`}>
<Image
src={"/assets/acme_1_6gLv7ufQMzdLOOclvrYwV.svg"}
width={155}
height={34}
alt={"Company logo"}
className={`w-image coejy3h c1fhiulb c1av00hf cji8cjn`} />
</Box>
<Box
className={`w-box cc9xhl5 c1nvgabo c1u0yu0y c1i2rq6e c12n5uks csb0ifw cg5j03k c8od1c4 czr2pxy c1bkqfhr cry9bxc c1qyy4dh ct02u4h c6d3y84 c1w2ebm1 cscr3j6 c1380t7s c1yvubyx cbxwzfl ckdqtrq c1qpskvc c1qoie81`}>
<Image
src={"/assets/acme_1_HLWJfcLQuEP3J64rb6XKM.svg"}
width={155}
height={34}
alt={"Company logo"}
className={`w-image coejy3h c1fhiulb c1av00hf cji8cjn`} />
</Box>
<Box
className={`w-box cc9xhl5 c1nvgabo c1u0yu0y c1i2rq6e c12n5uks csb0ifw cg5j03k c8od1c4 czr2pxy c1bkqfhr cry9bxc c1qyy4dh ct02u4h c6d3y84 c1w2ebm1 cscr3j6 c1380t7s c1yvubyx cbxwzfl ckdqtrq c1qpskvc c1qoie81`}>
<Image
src={"/assets/acme_1_XA71WcU5185wrE6Mu6zhG.svg"}
width={155}
height={34}
alt={"Company logo"}
className={`w-image coejy3h c1fhiulb c1av00hf cji8cjn`} />
</Box>
<Box
className={`w-box cc9xhl5 c1nvgabo c1u0yu0y c1i2rq6e c12n5uks csb0ifw cg5j03k c8od1c4 czr2pxy c1bkqfhr cry9bxc c1qyy4dh ct02u4h c6d3y84 c1w2ebm1 cscr3j6 c1380t7s c1yvubyx cbxwzfl ckdqtrq c1qpskvc c1qoie81`}>
<Image
src={"/assets/acme_1_nw5epIpabXJ3uVi7QFcyc.svg"}
width={155}
height={34}
alt={"Company logo"}
className={`w-image coejy3h c1fhiulb c1av00hf cji8cjn`} />
</Box>
<Box
className={`w-box cc9xhl5 c1nvgabo c1u0yu0y c1i2rq6e c12n5uks csb0ifw cg5j03k c8od1c4 czr2pxy c1bkqfhr cry9bxc c1qyy4dh ct02u4h c6d3y84 c1w2ebm1 cscr3j6 c1380t7s c1yvubyx cbxwzfl ckdqtrq c1qpskvc c1qoie81`}>
<Image
src={"/assets/acme_1_uRdPm_9MYPZFZIQuEn4OC.svg"}
width={155}
height={34}
alt={"Company logo"}
className={`w-image coejy3h c1fhiulb c1av00hf cji8cjn`} />
</Box>
<Box
className={`w-box cc9xhl5 c1nvgabo c1u0yu0y c1i2rq6e c12n5uks csb0ifw cg5j03k c8od1c4 czr2pxy c1bkqfhr cry9bxc c1qyy4dh ct02u4h c6d3y84 c1w2ebm1 cscr3j6 c1380t7s c1yvubyx cbxwzfl ckdqtrq c1qpskvc c1qoie81`}>
<Image
src={"/assets/acme_1_tpqwq_LcM0bL22Ua7rhwu.svg"}
width={155}
height={34}
alt={"Company logo"}
className={`w-image coejy3h c1fhiulb c1av00hf cji8cjn`} />
</Box>
<Box
className={`w-box cc9xhl5 c1nvgabo c1u0yu0y c1i2rq6e c12n5uks csb0ifw cg5j03k c8od1c4 czr2pxy c1bkqfhr cry9bxc c1qyy4dh ct02u4h c6d3y84 c1w2ebm1 cscr3j6 c1380t7s c1yvubyx cbxwzfl ckdqtrq c1qpskvc c1qoie81`}>
<Image
src={"/assets/acme_1_tLX2aRXdIM-NXgBcKFoRh.svg"}
width={155}
height={34}
alt={"Company logo"}
className={`w-image coejy3h c1fhiulb c1av00hf cji8cjn`} />
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w c74kosi c1qom380 c1357293 c9jnjeu c1dhz37v`}>
{"Why Choose VIA?"}
</Heading>
<Box
className={`w-box copqmak c10zkoym ct8c5y2 cejtdrx co2qwzx c1vrexag cx6c9kw c174sw29`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 ce02iuh c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th`}>
<Image
src={"/assets/Visual_92J8YkAjOrgi5wnfkiE2L.png"}
width={530}
height={412}
alt={"3d object"}
className={`w-image`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Personalized Interactions"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"VIA mimics your unique tone and style, ensuring every fan interaction feels authentic."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 czx9unu cn1jd01 c12hsjsj c1ru090q c1syziaj c119suh8 cx97dnn c19wkfj2 colzpbp ce02iuh c15hexcm cyhujw8 c1l2ougi`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Time-Saving Automation"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Handle thousands of DMs, comments, and inquiries effortlessly."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 c28cf7m c5zb6ju c12hsjsj c1ru090q c1syziaj c119suh8 cx97dnn c19wkfj2 colzpbp ce02iuh c15hexcm c1axwber c1l2ougi`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Revenue Boost"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Seamlessly integrate affiliate links and product promotions into conversations."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 ce02iuh c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th`}>
<Image
src={"/assets/Visual_(1)__5uTpyEh4NIm5XedfvE3T.png"}
width={468}
height={468}
alt={"3d object"}
className={`w-image`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Multi-Platform Support"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Works across Instagram and TikTok for maximum reach."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd cblbfaz cnu4kgu c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi c1xzir7e`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w`}>
{"Key Features"}
</Heading>
<Box
className={`w-box copqmak c1s46o9r c162t7yy cejtdrx co2qwzx c1vrexag cx6c9kw c174sw29`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c1e7helk cr1aip5 c18knjwi`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th`}>
<Heading
tag={"h3"}
className={`w-heading cry9bxc c1qyy4dh c1wt8a7g c1md20bl c1e892th c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.9412 5.0419C12.2931 4.39231 11.5228 3.87744 10.6747 3.527C9.82668 3.17655 8.91762 2.99745 8 3.00003H7.975C4.12937 3.01315 1 6.18753 1 10.0707V11.5C1 11.7652 1.10536 12.0196 1.29289 12.2071C1.48043 12.3947 1.73478 12.5 2 12.5H14C14.2652 12.5 14.5196 12.3947 14.7071 12.2071C14.8946 12.0196 15 11.7652 15 11.5V10C15.0026 9.07839 14.8219 8.16544 14.4684 7.31426C14.115 6.46307 13.5959 5.69065 12.9412 5.0419ZM14 11.5H7.48187L10.9044 6.79378C10.9824 6.68653 11.0147 6.55266 10.9941 6.42162C10.9735 6.29058 10.9016 6.1731 10.7944 6.09503C10.6871 6.01695 10.5533 5.98468 10.4222 6.00531C10.2912 6.02594 10.1737 6.09778 10.0956 6.20503L6.245 11.5H2V10.0707C2 9.87815 2.00937 9.68815 2.02688 9.50003H3.5C3.63261 9.50003 3.75979 9.44735 3.85355 9.35358C3.94732 9.25981 4 9.13264 4 9.00003C4 8.86742 3.94732 8.74024 3.85355 8.64647C3.75979 8.55271 3.63261 8.50003 3.5 8.50003H2.20438C2.84938 6.07128 4.95438 4.23503 7.5 4.02128V5.50003C7.5 5.63264 7.55268 5.75981 7.64645 5.85358C7.74021 5.94735 7.86739 6.00003 8 6.00003C8.13261 6.00003 8.25979 5.94735 8.35355 5.85358C8.44732 5.75981 8.5 5.63264 8.5 5.50003V4.02065C9.74041 4.12504 10.9178 4.61209 11.8694 5.4145C12.8211 6.21692 13.5001 7.29508 13.8125 8.50003H12.5C12.3674 8.50003 12.2402 8.55271 12.1464 8.64647C12.0527 8.74024 12 8.86742 12 9.00003C12 9.13264 12.0527 9.25981 12.1464 9.35358C12.2402 9.44735 12.3674 9.50003 12.5 9.50003H13.9794C13.9925 9.66565 14 9.8319 14 10V11.5Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn ch2prsz cg4iiql c1qyy4dh ct02u4h`} />
<Text
tag={"span"}
className={`w-text`}>
{"Personality Imitation"}
</Text>
</Heading>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7`}>
<Paragraph
className={`w-paragraph`}>
{"Trained on your writing style to sound just like you—be it humorous, professional, or casual."}
{""}
<br />
{""}
{"Delivers responses that reflect your unique personality."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c1e7helk cr1aip5 c18knjwi`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th`}>
<Heading
tag={"h3"}
className={`w-heading cry9bxc c1qyy4dh c1wt8a7g c1md20bl c1e892th c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.5 13.5C14.5 13.6326 14.4473 13.7598 14.3536 13.8536C14.2598 13.9473 14.1326 14 14 14H2C1.86739 14 1.74021 13.9473 1.64645 13.8536C1.55268 13.7598 1.5 13.6326 1.5 13.5V3.5C1.5 3.36739 1.55268 3.24021 1.64645 3.14645C1.74021 3.05268 1.86739 3 2 3C2.13261 3 2.25979 3.05268 2.35355 3.14645C2.44732 3.24021 2.5 3.36739 2.5 3.5V9.39812L5.67063 6.625C5.7569 6.54947 5.86652 6.5059 5.9811 6.50157C6.09569 6.49725 6.20828 6.53244 6.3 6.60125L9.97563 9.35812L13.6706 6.125C13.7191 6.07704 13.7768 6.0395 13.8403 6.01467C13.9038 5.98985 13.9717 5.97827 14.0398 5.98065C14.1079 5.98303 14.1749 5.99931 14.2365 6.0285C14.2981 6.05769 14.3531 6.09917 14.398 6.15038C14.443 6.2016 14.4771 6.26148 14.4981 6.32633C14.5191 6.39119 14.5266 6.45965 14.5201 6.52752C14.5137 6.59538 14.4935 6.66122 14.4607 6.72097C14.4279 6.78073 14.3832 6.83314 14.3294 6.875L10.3294 10.375C10.2431 10.4505 10.1335 10.4941 10.0189 10.4984C9.90431 10.5028 9.79173 10.4676 9.7 10.3988L6.02437 7.64313L2.5 10.7269V13H14C14.1326 13 14.2598 13.0527 14.3536 13.1464C14.4473 13.2402 14.5 13.3674 14.5 13.5Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn ch2prsz cg4iiql c1qyy4dh ct02u4h`} />
<Text
tag={"span"}
className={`w-text`}>
{"Automated Fan Engagement"}
</Text>
</Heading>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7`}>
<Paragraph
className={`w-paragraph`}>
{"Answers FAQs like “Where’s your outfit from?” with affiliate links."}
{""}
<br />
{""}
{"Shares updates like video schedules or personalized greetings."}
{""}
<br />
{""}
{"Responds to story replies with tailored questions to boost engagement."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c1e7helk cr1aip5 c18knjwi`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th`}>
<Heading
tag={"h3"}
className={`w-heading cry9bxc c1qyy4dh c1wt8a7g c1md20bl c1e892th c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
<HtmlEmbed
code={"<svg width=\"16\" height=\"17\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.3487 8.56625L9.12498 7.375L7.93748 4.14875C7.86716 3.95771 7.73992 3.79283 7.57295 3.67637C7.40598 3.5599 7.2073 3.49746 7.00373 3.49746C6.80015 3.49746 6.60147 3.5599 6.4345 3.67637C6.26753 3.79283 6.1403 3.95771 6.06998 4.14875L4.87498 7.375L1.64873 8.5625C1.45768 8.63282 1.29281 8.76005 1.17634 8.92702C1.05988 9.094 0.997437 9.29267 0.997437 9.49625C0.997437 9.69983 1.05988 9.8985 1.17634 10.0655C1.29281 10.2324 1.45768 10.3597 1.64873 10.43L4.87498 11.625L6.06248 14.8512C6.1328 15.0423 6.26003 15.2072 6.427 15.3236C6.59397 15.4401 6.79265 15.5025 6.99623 15.5025C7.1998 15.5025 7.39848 15.4401 7.56545 15.3236C7.73242 15.2072 7.85965 15.0423 7.92998 14.8512L9.12498 11.625L12.3512 10.4375C12.5423 10.3672 12.7071 10.2399 12.8236 10.073C12.9401 9.906 13.0025 9.70733 13.0025 9.50375C13.0025 9.30017 12.9401 9.1015 12.8236 8.93452C12.7071 8.76755 12.5423 8.64032 12.3512 8.57L12.3487 8.56625ZM8.56248 10.7638C8.49461 10.7888 8.43297 10.8282 8.38183 10.8793C8.33068 10.9305 8.29124 10.9921 8.26623 11.06L6.99998 14.4906L5.73623 11.0625C5.71125 10.9939 5.67157 10.9316 5.61996 10.88C5.56835 10.8284 5.50606 10.7887 5.43748 10.7638L2.00935 9.5L5.43748 8.23625C5.50606 8.21128 5.56835 8.17159 5.61996 8.11998C5.67157 8.06837 5.71125 8.00608 5.73623 7.9375L6.99998 4.50938L8.26373 7.9375C8.28874 8.00537 8.32818 8.067 8.37933 8.11815C8.43047 8.1693 8.49211 8.20874 8.55998 8.23375L11.9906 9.5L8.56248 10.7638ZM8.99998 3C8.99998 2.86739 9.05266 2.74021 9.14642 2.64645C9.24019 2.55268 9.36737 2.5 9.49998 2.5H10.5V1.5C10.5 1.36739 10.5527 1.24021 10.6464 1.14645C10.7402 1.05268 10.8674 1 11 1C11.1326 1 11.2598 1.05268 11.3535 1.14645C11.4473 1.24021 11.5 1.36739 11.5 1.5V2.5H12.5C12.6326 2.5 12.7598 2.55268 12.8535 2.64645C12.9473 2.74021 13 2.86739 13 3C13 3.13261 12.9473 3.25979 12.8535 3.35355C12.7598 3.44732 12.6326 3.5 12.5 3.5H11.5V4.5C11.5 4.63261 11.4473 4.75979 11.3535 4.85355C11.2598 4.94732 11.1326 5 11 5C10.8674 5 10.7402 4.94732 10.6464 4.85355C10.5527 4.75979 10.5 4.63261 10.5 4.5V3.5H9.49998C9.36737 3.5 9.24019 3.44732 9.14642 3.35355C9.05266 3.25979 8.99998 3.13261 8.99998 3ZM15.5 6C15.5 6.13261 15.4473 6.25979 15.3535 6.35355C15.2598 6.44732 15.1326 6.5 15 6.5H14.5V7C14.5 7.13261 14.4473 7.25979 14.3535 7.35355C14.2598 7.44732 14.1326 7.5 14 7.5C13.8674 7.5 13.7402 7.44732 13.6464 7.35355C13.5527 7.25979 13.5 7.13261 13.5 7V6.5H13C12.8674 6.5 12.7402 6.44732 12.6464 6.35355C12.5527 6.25979 12.5 6.13261 12.5 6C12.5 5.86739 12.5527 5.74021 12.6464 5.64645C12.7402 5.55268 12.8674 5.5 13 5.5H13.5V5C13.5 4.86739 13.5527 4.74021 13.6464 4.64645C13.7402 4.55268 13.8674 4.5 14 4.5C14.1326 4.5 14.2598 4.55268 14.3535 4.64645C14.4473 4.74021 14.5 4.86739 14.5 5V5.5H15C15.1326 5.5 15.2598 5.55268 15.3535 5.64645C15.4473 5.74021 15.5 5.86739 15.5 6Z\" fill=\"white\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn ch2prsz cg4iiql c1qyy4dh ct02u4h`} />
<Text
tag={"span"}
className={`w-text`}>
{"Daily Interaction"}
</Text>
</Heading>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7`}>
<Paragraph
className={`w-paragraph`}>
{"Replies to comments and DMs to keep fans engaged."}
{""}
<br />
{""}
{"Initiates fun activities like challenges, polls, and quizzes to increase interaction."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c1e7helk cr1aip5 c18knjwi`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th`}>
<Heading
tag={"h3"}
className={`w-heading cry9bxc c1qyy4dh c1wt8a7g c1md20bl c1e892th c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14 8.50003C14 8.63264 13.9473 8.75982 13.8536 8.85359C13.7598 8.94736 13.6326 9.00003 13.5 9.00003H8C7.86739 9.00003 7.74022 8.94736 7.64645 8.85359C7.55268 8.75982 7.5 8.63264 7.5 8.50003C7.5 8.36743 7.55268 8.24025 7.64645 8.14648C7.74022 8.05271 7.86739 8.00003 8 8.00003H13.5C13.6326 8.00003 13.7598 8.05271 13.8536 8.14648C13.9473 8.24025 14 8.36743 14 8.50003ZM8 5.00003H13.5C13.6326 5.00003 13.7598 4.94736 13.8536 4.85359C13.9473 4.75982 14 4.63264 14 4.50003C14 4.36743 13.9473 4.24025 13.8536 4.14648C13.7598 4.05271 13.6326 4.00003 13.5 4.00003H8C7.86739 4.00003 7.74022 4.05271 7.64645 4.14648C7.55268 4.24025 7.5 4.36743 7.5 4.50003C7.5 4.63264 7.55268 4.75982 7.64645 4.85359C7.74022 4.94736 7.86739 5.00003 8 5.00003ZM13.5 12H8C7.86739 12 7.74022 12.0527 7.64645 12.1465C7.55268 12.2402 7.5 12.3674 7.5 12.5C7.5 12.6326 7.55268 12.7598 7.64645 12.8536C7.74022 12.9474 7.86739 13 8 13H13.5C13.6326 13 13.7598 12.9474 13.8536 12.8536C13.9473 12.7598 14 12.6326 14 12.5C14 12.3674 13.9473 12.2402 13.8536 12.1465C13.7598 12.0527 13.6326 12 13.5 12ZM5.14625 3.14628L3.5 4.79316L2.85375 4.14628C2.75993 4.05246 2.63269 3.99976 2.5 3.99976C2.36732 3.99976 2.24007 4.05246 2.14625 4.14628C2.05243 4.2401 1.99973 4.36735 1.99973 4.50003C1.99973 4.63272 2.05243 4.75996 2.14625 4.85378L3.14625 5.85378C3.19269 5.90027 3.24783 5.93715 3.30853 5.96231C3.36923 5.98748 3.4343 6.00043 3.5 6.00043C3.56571 6.00043 3.63077 5.98748 3.69147 5.96231C3.75217 5.93715 3.80732 5.90027 3.85375 5.85378L5.85375 3.85378C5.94757 3.75996 6.00028 3.63272 6.00028 3.50003C6.00028 3.36735 5.94757 3.2401 5.85375 3.14628C5.75993 3.05246 5.63269 2.99976 5.5 2.99976C5.36732 2.99976 5.24007 3.05246 5.14625 3.14628ZM5.14625 7.14628L3.5 8.79316L2.85375 8.14628C2.75993 8.05246 2.63269 7.99976 2.5 7.99976C2.36732 7.99976 2.24007 8.05246 2.14625 8.14628C2.05243 8.2401 1.99973 8.36735 1.99973 8.50003C1.99973 8.56573 2.01267 8.63079 2.03781 8.69148C2.06295 8.75218 2.0998 8.80733 2.14625 8.85378L3.14625 9.85378C3.19269 9.90027 3.24783 9.93715 3.30853 9.96231C3.36923 9.98748 3.4343 10.0004 3.5 10.0004C3.56571 10.0004 3.63077 9.98748 3.69147 9.96231C3.75217 9.93715 3.80732 9.90027 3.85375 9.85378L5.85375 7.85378C5.94757 7.75996 6.00028 7.63272 6.00028 7.50003C6.00028 7.36735 5.94757 7.2401 5.85375 7.14628C5.75993 7.05246 5.63269 6.99976 5.5 6.99976C5.36732 6.99976 5.24007 7.05246 5.14625 7.14628ZM5.14625 11.1463L3.5 12.7932L2.85375 12.1463C2.8073 12.0998 2.75215 12.063 2.69145 12.0378C2.63076 12.0127 2.5657 11.9998 2.5 11.9998C2.43431 11.9998 2.36925 12.0127 2.30856 12.0378C2.24786 12.063 2.19271 12.0998 2.14625 12.1463C2.0998 12.1927 2.06295 12.2479 2.03781 12.3086C2.01267 12.3693 1.99973 12.4343 1.99973 12.5C1.99973 12.5657 2.01267 12.6308 2.03781 12.6915C2.06295 12.7522 2.0998 12.8073 2.14625 12.8538L3.14625 13.8538C3.19269 13.9003 3.24783 13.9372 3.30853 13.9623C3.36923 13.9875 3.4343 14.0004 3.5 14.0004C3.56571 14.0004 3.63077 13.9875 3.69147 13.9623C3.75217 13.9372 3.80732 13.9003 3.85375 13.8538L5.85375 11.8538C5.94757 11.76 6.00028 11.6327 6.00028 11.5C6.00028 11.3674 5.94757 11.2401 5.85375 11.1463C5.75993 11.0525 5.63269 10.9998 5.5 10.9998C5.36732 10.9998 5.24007 11.0525 5.14625 11.1463Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn ch2prsz cg4iiql c1qyy4dh ct02u4h`} />
<Text
tag={"span"}
className={`w-text`}>
{"Revenue Generation"}
</Text>
</Heading>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7`}>
<Paragraph
className={`w-paragraph`}>
{"Embeds affiliate links directly into chats for effortless monetization."}
{""}
<br />
{""}
{"Filters collaboration requests and forwards them for review."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c1e7helk cr1aip5 c18knjwi`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th`}>
<Heading
tag={"h3"}
className={`w-heading cry9bxc c1qyy4dh c1wt8a7g c1md20bl c1e892th c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
<HtmlEmbed
code={"<svg width=\"16\" height=\"17\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.8669 5.6975C14.5607 7.14863 14.6924 8.80533 14.2366 10.3479C13.7808 11.8904 12.7697 13.2094 11.3986 14.0503C10.0274 14.8912 8.39342 15.1944 6.81186 14.9014C5.23031 14.6084 3.81335 13.74 2.83445 12.4637C1.85556 11.1874 1.38413 9.59372 1.51114 7.99027C1.63816 6.38683 2.35462 4.88727 3.52225 3.78101C4.68987 2.67474 6.22589 2.0402 7.83386 1.99985C9.44182 1.9595 11.0077 2.5162 12.2294 3.5625L13.6463 2.145C13.7401 2.05118 13.8673 1.99848 14 1.99848C14.1327 1.99848 14.2599 2.05118 14.3538 2.145C14.4476 2.23882 14.5003 2.36607 14.5003 2.49875C14.5003 2.63144 14.4476 2.75868 14.3538 2.8525L8.35375 8.8525C8.25993 8.94633 8.13268 8.99903 8 8.99903C7.86732 8.99903 7.74007 8.94633 7.64625 8.8525C7.55243 8.75868 7.49972 8.63144 7.49972 8.49875C7.49972 8.36607 7.55243 8.23882 7.64625 8.145L9.37875 6.4125C8.90922 6.10198 8.34863 5.959 7.78773 6.00672C7.22683 6.05444 6.69845 6.29007 6.28813 6.67546C5.87781 7.06084 5.60957 7.57343 5.52682 8.13024C5.44408 8.68705 5.55168 9.2555 5.8322 9.74355C6.11272 10.2316 6.54975 10.6107 7.07253 10.8194C7.59532 11.0282 8.17326 11.0544 8.7128 10.8939C9.25234 10.7333 9.72189 10.3953 10.0454 9.93466C10.369 9.47401 10.5276 8.91765 10.4956 8.35563C10.4919 8.28997 10.5012 8.22422 10.5229 8.16215C10.5446 8.10007 10.5784 8.04288 10.6222 7.99384C10.666 7.9448 10.7191 7.90487 10.7783 7.87633C10.8376 7.84779 10.9018 7.8312 10.9675 7.8275C11.1001 7.82005 11.2303 7.86557 11.3293 7.95406C11.3783 7.99788 11.4183 8.05093 11.4468 8.11018C11.4753 8.16943 11.4919 8.23372 11.4956 8.29938C11.5412 9.09487 11.314 9.8821 10.8516 10.531C10.3891 11.1798 9.71911 11.6515 8.95229 11.868C8.18547 12.0844 7.36774 12.0328 6.63425 11.7216C5.90075 11.4103 5.29541 10.8581 4.91826 10.1563C4.54112 9.45439 4.41475 8.64483 4.56004 7.86139C4.70533 7.07796 5.11359 6.36755 5.71734 5.84758C6.32108 5.32762 7.08418 5.02921 7.88049 5.0017C8.67681 4.97418 9.45868 5.2192 10.0969 5.69625L11.5188 4.27438C10.4768 3.40925 9.15186 2.95961 7.79854 3.0118C6.44521 3.064 5.15889 3.61436 4.18662 4.55717C3.21435 5.49999 2.62469 6.76878 2.5309 8.11985C2.43711 9.47093 2.8458 10.809 3.67848 11.8771C4.51115 12.9453 5.70909 13.6681 7.04222 13.9067C8.37535 14.1454 9.74967 13.8832 10.9012 13.1703C12.0527 12.4575 12.9003 11.3443 13.2811 10.0446C13.6619 8.7449 13.5491 7.35034 12.9644 6.12875C12.9072 6.00908 12.8999 5.87158 12.9441 5.74652C12.9883 5.62145 13.0803 5.51907 13.2 5.46188C13.3197 5.40469 13.4572 5.39739 13.5822 5.44158C13.7073 5.48577 13.8097 5.57783 13.8669 5.6975Z\" fill=\"white\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn ch2prsz cg4iiql c1qyy4dh ct02u4h`} />
<Text
tag={"span"}
className={`w-text`}>
{"One-Click Optimization"}
</Text>
</Heading>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7`}>
<Paragraph
className={`w-paragraph`}>
{"Perform complex SEO audits and optimizations with a single click."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c1e7helk cr1aip5 c18knjwi`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th`}>
<Heading
tag={"h3"}
className={`w-heading cry9bxc c1qyy4dh c1wt8a7g c1md20bl c1e892th c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14 4.94376C13.8823 5.00471 13.7452 5.01644 13.6189 4.97635C13.4925 4.93627 13.3873 4.84767 13.3262 4.73001C12.849 3.7872 12.1266 2.99033 11.235 2.42314C11.1794 2.38809 11.1313 2.34245 11.0934 2.2888C11.0554 2.23516 11.0285 2.17457 11.0139 2.1105C10.9994 2.04643 10.9977 1.98012 11.0088 1.91538C11.0199 1.85063 11.0437 1.78871 11.0787 1.73314C11.1138 1.67757 11.1594 1.62946 11.2131 1.59153C11.2667 1.55361 11.3273 1.52662 11.3914 1.51211C11.4554 1.4976 11.5217 1.49585 11.5865 1.50697C11.6512 1.51808 11.7132 1.54184 11.7687 1.57689C12.8078 2.24222 13.6516 3.17162 14.2137 4.27001C14.2747 4.38771 14.2864 4.5248 14.2463 4.65114C14.2062 4.77747 14.1176 4.88273 14 4.94376ZM2.23185 5.00001C2.32345 4.99998 2.41328 4.97477 2.49153 4.92716C2.56979 4.87955 2.63346 4.81135 2.6756 4.73001C3.15285 3.7872 3.87523 2.99033 4.76685 2.42314C4.87907 2.35236 4.95857 2.2399 4.98787 2.1105C5.01718 1.9811 4.99388 1.84536 4.9231 1.73314C4.85232 1.62092 4.73986 1.54141 4.61046 1.51211C4.48106 1.48281 4.34532 1.50611 4.2331 1.57689C3.19397 2.24222 2.35021 3.17162 1.7881 4.27001C1.74862 4.34621 1.72942 4.43129 1.73235 4.51706C1.73527 4.60283 1.76022 4.6864 1.8048 4.75973C1.84938 4.83307 1.91208 4.89369 1.98687 4.93577C2.06166 4.97785 2.14603 4.99998 2.23185 5.00001ZM13.8631 11.4963C13.9517 11.6482 13.9986 11.8207 13.9992 11.9966C13.9998 12.1724 13.9541 12.3453 13.8665 12.4978C13.779 12.6503 13.6528 12.7771 13.5007 12.8652C13.3485 12.9534 13.1758 12.9999 13 13H10.45C10.3352 13.5652 10.0286 14.0733 9.5821 14.4382C9.13559 14.8032 8.57665 15.0025 7.99997 15.0025C7.42329 15.0025 6.86435 14.8032 6.41784 14.4382C5.97134 14.0733 5.66473 13.5652 5.54997 13H2.99997C2.82423 12.9997 2.65169 12.953 2.49973 12.8648C2.34776 12.7765 2.22173 12.6498 2.13435 12.4973C2.04696 12.3448 2.00129 12.172 2.00195 11.9963C2.00261 11.8205 2.04957 11.6481 2.1381 11.4963C2.70122 10.5244 2.99997 9.14251 2.99997 7.50001C2.99997 6.17393 3.52676 4.90216 4.46444 3.96448C5.40212 3.0268 6.67389 2.50001 7.99997 2.50001C9.32605 2.50001 10.5978 3.0268 11.5355 3.96448C12.4732 4.90216 13 6.17393 13 7.50001C13 9.14189 13.2987 10.5238 13.8631 11.4963ZM9.41372 13H6.58622C6.68981 13.2921 6.88135 13.545 7.13451 13.7239C7.38767 13.9027 7.69002 13.9987 7.99997 13.9987C8.30993 13.9987 8.61227 13.9027 8.86543 13.7239C9.11859 13.545 9.31013 13.2921 9.41372 13ZM13 12C12.335 10.8581 12 9.34439 12 7.50001C12 6.43915 11.5785 5.42173 10.8284 4.67159C10.0783 3.92144 9.06084 3.50001 7.99997 3.50001C6.93911 3.50001 5.92169 3.92144 5.17154 4.67159C4.4214 5.42173 3.99997 6.43915 3.99997 7.50001C3.99997 9.34501 3.66372 10.8588 2.99997 12H13Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn ch2prsz cg4iiql c1qyy4dh ct02u4h`} />
<Text
tag={"span"}
className={`w-text`}>
{"Multi-Platform Integration"}
</Text>
</Heading>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7`}>
<Paragraph
className={`w-paragraph`}>
{"Instagram: Handles DMs, story replies, and comments."}
{""}
<br />
{""}
{"TikTok: Automates video replies, DMs, and comments."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd cktaign cowwg1a c1noghwu c1i7z02k c5hqtns c4a9xim c15xw1g2`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80 cmoe9jo c1obig1w`}>
<Box
className={`w-box cry9bxc c1lfjoq7 ct8c5y2 c10zkoym c1qyy4dh c1wt8a7g`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w c74kosi c1qom380 c1357293 c9jnjeu c1dhz37v`}>
{"Our Clients"}
</Heading>
<Paragraph
className={`w-paragraph c16xpvrq c1qom380 c62q3t9 c1357293 c9jnjeu czt9u4x`}>
{"Hear firsthand how VIA has boosted online success for users like you."}
</Paragraph>
</Box>
<Box
className={`w-box copqmak c10zkoym ct8c5y2 cevxs5e co2qwzx c1vrexag c9scc c9grybw crv1a4t cbrrmm8 cuo9dm5 c5egcmi c3hctjf cxz9xjl cx6c9kw c174sw29 c1dz3al c1cl2zap c8qdjaz c1uc2zh c1l8rbde cq8dnu3 c17jj8qr cth1c7d`}>
<Box
className={`w-box`}>
<Image
src={"/assets/Property_1_Mobile_G2IuZr4NZT5jICdghKCUw.png"}
width={634}
height={580}
alt={"Talia Taylor"}
className={`w-image cwvpjlf cf4s3xc`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c62q3t9 c1z0l37u c1ml0hr7 c16xs6ny ct02u4h cqtg27u c1rstvfo c1bulmrh c12f3mdq`}>
<Paragraph
className={`w-paragraph cpo5yh5 cnrz8fp c6oj68y c23h93x c1dhz37v cqe39x4`}>
{""}
<br />
{""}
{"“After implementing VIA, my engagement skyrocketed , I’m saving 15 hours weekly on fan interactions, and my affiliate income doubled!”"}
</Paragraph>
<Text
className={`w-text cnrz8fp`}>
{"- Sarah Karowicz"}
</Text>
<Box
className={`w-box cry9bxc c1lfjoq7 ctm7uqk cdqkcyf c16xs6ny ct02u4h c1rstvfo c1bulmrh`}>
<Text
className={`w-text`}>
{"Fashion & Lifestyle Influencer @ Instagram"}
</Text>
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd c17vqhen cnu4kgu crv1a4t cbrrmm8 cuo9dm5 c5egcmi c17mmneu`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80`}>
<Box
className={`w-box cry9bxc c1lfjoq7 ct8c5y2 c10zkoym c1qyy4dh c1wt8a7g`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w c74kosi c1qom380 c1357293 c9jnjeu c1dhz37v`}>
{"Pricing"}
</Heading>
<Paragraph
className={`w-paragraph c16xpvrq c1qom380 c62q3t9 c1357293 c9jnjeu czt9u4x`}>
{"Choose the right plan to meet your Virtual Instagram Assistant needs and start optimizing today."}
</Paragraph>
</Box>
<Box
className={`w-box copqmak c10zkoym ct8c5y2 cejtdrx co2qwzx c1vrexag cx6c9kw c174sw29`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c16r2hhi c1ozwq0i cv2gy63 cxn73lu c5dy17i c1hsfuam c1e7helk ce02iuh c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Pricing"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"$29/mo"}
</Paragraph>
</Box>
<Separator
className={`w-separator c57dhyt czr2pxy c32myit cwrra4i`} />
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7`}>
<List
className={`w-list c1cn3fw9 cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c34dwh1 c1y6imu0 c32myit`}>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"Keyword optimization"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"Automated meta tags"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"SEO monitoring"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"Monthly reports"}
</ListItem>
</List>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g c1lyhjp7`}>
<Link
className={`w-link c1mtjugd c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1gkfupp cbm6zv4 c1b1wvmf c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy ckz5c6u cl60rel c1ib9cr2 c1vlwcj`}>
{"Join Waitlist"}
</Link>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c16r2hhi c1ozwq0i cv2gy63 cxn73lu c5dy17i c1hsfuam c1e7helk c1yis186 cn1jd01 c12hsjsj c1ru090q c1syziaj c119suh8 cx97dnn ce02iuh c15hexcm cyhujw8 c1l2ougi`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Pro"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"$79/mo"}
</Paragraph>
</Box>
<Separator
className={`w-separator c57dhyt czr2pxy c32myit cwrra4i`} />
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7`}>
<List
className={`w-list c1cn3fw9 cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c34dwh1 c1y6imu0 c32myit`}>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"Keyword optimization"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"Automated meta tags"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"SEO monitoring"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"Monthly reports"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"Content suggestions"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"Link optimization"}
</ListItem>
</List>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g c1lyhjp7`}>
<Link
className={`w-link cnrz8fp c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c10ldywu cbm6zv4 c1b1wvmf c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cheslu6 cl60rel c1ib9cr2 cr2cdex`}>
{"Join Waitlist"}
</Link>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c16r2hhi c1ozwq0i cv2gy63 cxn73lu c5dy17i c1hsfuam c1e7helk ce02iuh c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Business"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"$149/mo"}
</Paragraph>
</Box>
<Separator
className={`w-separator c57dhyt czr2pxy c32myit cwrra4i`} />
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7`}>
<List
className={`w-list c1cn3fw9 cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c34dwh1 c1y6imu0 c32myit`}>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"Keyword optimization"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"Automated meta tags"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"SEO monitoring"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"Monthly reports"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"Content suggestions"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"Link optimization"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"Multi-user access"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"API integration"}
</ListItem>
</List>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g c1lyhjp7`}>
<Link
className={`w-link c1mtjugd c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1gkfupp cbm6zv4 c1b1wvmf c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy ckz5c6u cl60rel c1ib9cr2 c1vlwcj`}>
{"Join Waitlist"}
</Link>
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80 cc6wxoz cowwg1a ctgnupg c1i7z02k c5hqtns c4a9xim cqfle91`}>
<Box
className={`w-box cna0hdz c1mzb2kd c1qyy4dh c1wt8a7g cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cdiyoxz c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi c17mmneu c1dz3al c1cl2zap c8qdjaz c1uc2zh c1l8rbde cq8dnu3 cth1c7d`}>
<Box
className={`w-box cry9bxc c1lfjoq7 ct8c5y2 c10zkoym c1qyy4dh c1wt8a7g`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w c74kosi c1qom380 c1357293 c9jnjeu c1dhz37v`}>
{"AI-Driven VIA For Everyone."}
</Heading>
</Box>
<Box
className={`w-box cavd3zn c16euuik c1e2b3ev czsotsp cw7dtlx`}>
<Input
name={"input-email"}
id={"input-email"}
required={true}
placeholder={"Your email"}
type={"email"}
className={`w-text-input c1a8d7ts c1b2tb9q cuan1vj c1xm4ef6 ccfzz03 cub2gss cgcvr98 c1xjllne c1e7helk cg5i74l c1e3v5m0 cl60rel c2zsigv c1rqinhn c10oncvz`} />
<Button
className={`w-button c1plv2ab c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cn2jcgb cdcs8wy c1m1praz c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx cblpe2z cdwd3jx c1gmh7up cuf9c1i cimc1rz cheslu6 cl60rel c1ib9cr2 c82bfcw c1ukphsi c173sbc c1k8qtmf`}>
{"Join Waitlist"}
</Button>
</Box>
<Paragraph
className={`w-paragraph cgbme5g c1qom380 cx37ewc`}>
{"What Makes VIA Unique?"}
{""}
<br />
{""}
{"Unlike generic chatbots, VIA replicates the influencer’s personality for authentic interactions. Saves time by automating responses while maintaining a personal touch. Tailored to influencers’ needs — no pre-set templates, just real conversations."}
{""}
<br />
{""}
{""}
<br />
{""}
{"Ready to transform your influencer journey? "}
{""}
<br />
{""}
{""}
<br />
{""}
{"Let VIA take care of the details while you focus on creating amazing content!"}
</Paragraph>
</Box>
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80`}>
<Box
className={`w-box cry9bxc c18v2pa2 c174sw29 cmaksb1 c1i9o1yp`}>
<Link
href={"/"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p c1x4yn0w cl60rel c1ib9cr2 c1d7u282`}>
<Image
alt={"Logo"}
src={"/assets/Logo_(1)_4DOjcRBy3o604SWE02Vw5.png"}
width={153}
height={152}
className={`w-image c18apts0`} />
</Link>
<Box
className={`w-box cry9bxc c1lxiyww c1s46o9r cdczzub c1jjfh4b`}>
<Box
tag={"nav"}
aria-labelledby={"menu1Title"}
className={`w-box cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<Heading
tag={"h2"}
id={"menu1Title"}
className={`w-heading c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Product"}
</Heading>
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Features"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Integration"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Updates"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"FAQ"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Pricing"}
</Link>
</ListItem>
</List>
</Box>
<Box
tag={"nav"}
aria-labelledby={"menu2Title"}
className={`w-box cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<Heading
tag={"h2"}
id={"menu2Title"}
className={`w-heading c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Company"}
</Heading>
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"About"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Blog"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Careers"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Manifesto"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Press"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Contract"}
</Link>
</ListItem>
</List>
</Box>
<Box
tag={"nav"}
aria-labelledby={"menu3Title"}
className={`w-box cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<Heading
tag={"h2"}
id={"menu3Title"}
className={`w-heading c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Resources"}
</Heading>
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Examples"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Community"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Guides"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Docs"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Press"}
</Link>
</ListItem>
</List>
</Box>
<Box
tag={"nav"}
aria-labelledby={"menu4Title"}
className={`w-box cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<Heading
tag={"h2"}
id={"menu4Title"}
className={`w-heading c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Legal"}
</Heading>
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Privacy"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Terms"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Security"}
</Link>
</ListItem>
</List>
</Box>
</Box>
</Box>
<Box
className={`w-box cry9bxc ct02u4h c1lfjoq7 c16xs6ny`}>
<Box
className={`w-box cry9bxc c1qyy4dh ct02u4h c1z0l37u c1ml0hr7`}>
<Link
aria-label={"X"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
<HtmlEmbed
code={"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g opacity=\"0.4\">\n<path d=\"M20.1562 20.6109C20.0917 20.7286 19.9967 20.8267 19.8813 20.8951C19.7659 20.9636 19.6342 20.9998 19.5 21H15C14.8738 21 14.7496 20.9681 14.639 20.9073C14.5284 20.8465 14.4349 20.7587 14.3672 20.6522L10.5712 14.6869L5.055 20.7544C4.92053 20.8988 4.73454 20.9845 4.53735 20.9927C4.34017 21.0009 4.14769 20.9311 4.00163 20.7984C3.85558 20.6657 3.76773 20.4807 3.75713 20.2836C3.74653 20.0866 3.81403 19.8933 3.945 19.7456L9.73594 13.3706L3.86719 4.15313C3.79491 4.03973 3.75444 3.90898 3.75004 3.77458C3.74563 3.64018 3.77744 3.50707 3.84213 3.38918C3.90683 3.27129 4.00203 3.17296 4.11777 3.10449C4.23351 3.03603 4.36552 2.99993 4.5 3H9C9.12622 3.00004 9.2504 3.03194 9.36102 3.09274C9.47164 3.15353 9.56512 3.24127 9.63281 3.34781L13.4287 9.31312L18.945 3.24562C19.0795 3.10117 19.2655 3.01555 19.4626 3.00731C19.6598 2.99907 19.8523 3.06888 19.9984 3.20161C20.1444 3.33435 20.2323 3.51929 20.2429 3.71636C20.2535 3.91343 20.186 4.10674 20.055 4.25438L14.2641 10.6247L20.1328 19.8478C20.2047 19.9613 20.2448 20.0919 20.2489 20.2262C20.253 20.3604 20.221 20.4933 20.1562 20.6109Z\" fill=\"white\"></path>\n</g>\n</svg>\n"}
className={`w-html-embed`} />
</Link>
<Link
aria-label={"Instagram"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
<HtmlEmbed
code={"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g opacity=\"0.4\">\n<path d=\"M16.5 2.25H7.5C6.10807 2.25149 4.77358 2.80509 3.78933 3.78933C2.80509 4.77358 2.25149 6.10807 2.25 7.5V16.5C2.25149 17.8919 2.80509 19.2264 3.78933 20.2107C4.77358 21.1949 6.10807 21.7485 7.5 21.75H16.5C17.8919 21.7485 19.2264 21.1949 20.2107 20.2107C21.1949 19.2264 21.7485 17.8919 21.75 16.5V7.5C21.7485 6.10807 21.1949 4.77358 20.2107 3.78933C19.2264 2.80509 17.8919 2.25149 16.5 2.25ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4988 13.1931 16.0243 14.337 15.1806 15.1806C14.337 16.0243 13.1931 16.4988 12 16.5ZM17.625 7.5C17.4025 7.5 17.185 7.43402 17 7.3104C16.815 7.18679 16.6708 7.01109 16.5856 6.80552C16.5005 6.59995 16.4782 6.37375 16.5216 6.15552C16.565 5.93729 16.6722 5.73684 16.8295 5.5795C16.9868 5.42217 17.1873 5.31502 17.4055 5.27162C17.6238 5.22821 17.85 5.25049 18.0555 5.33564C18.2611 5.42078 18.4368 5.56498 18.5604 5.74998C18.684 5.93499 18.75 6.1525 18.75 6.375C18.75 6.67337 18.6315 6.95952 18.4205 7.1705C18.2095 7.38147 17.9234 7.5 17.625 7.5ZM15 12C15 12.5933 14.8241 13.1734 14.4944 13.6667C14.1648 14.1601 13.6962 14.5446 13.1481 14.7716C12.5999 14.9987 11.9967 15.0581 11.4147 14.9424C10.8328 14.8266 10.2982 14.5409 9.87868 14.1213C9.45912 13.7018 9.1734 13.1672 9.05764 12.5853C8.94189 12.0033 9.0013 11.4001 9.22836 10.8519C9.45542 10.3038 9.83994 9.83524 10.3333 9.50559C10.8266 9.17595 11.4067 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z\" fill=\"white\"></path>\n</g>\n</svg>\n"}
className={`w-html-embed`} />
</Link>
<Link
aria-label={"YouTube"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
<HtmlEmbed
code={"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g opacity=\"0.4\">\n<path d=\"M21.9684 6.5175C21.8801 6.17189 21.7109 5.85224 21.4747 5.58491C21.2385 5.31758 20.9421 5.11024 20.61 4.98C17.3962 3.73875 12.2812 3.75 12 3.75C11.7188 3.75 6.60375 3.73875 3.39 4.98C3.0579 5.11024 2.76153 5.31758 2.52534 5.58491C2.28915 5.85224 2.1199 6.17189 2.03156 6.5175C1.78875 7.45313 1.5 9.16313 1.5 12C1.5 14.8369 1.78875 16.5469 2.03156 17.4825C2.11977 17.8283 2.28895 18.1481 2.52515 18.4156C2.76136 18.6831 3.0578 18.8906 3.39 19.0209C6.46875 20.2088 11.2875 20.25 11.9381 20.25H12.0619C12.7125 20.25 17.5341 20.2088 20.61 19.0209C20.9422 18.8906 21.2386 18.6831 21.4748 18.4156C21.711 18.1481 21.8802 17.8283 21.9684 17.4825C22.2113 16.545 22.5 14.8369 22.5 12C22.5 9.16313 22.2113 7.45313 21.9684 6.5175ZM15.0553 12.6113L11.3053 15.2363C11.1931 15.3148 11.0616 15.3612 10.9249 15.3703C10.7883 15.3794 10.6517 15.351 10.5301 15.288C10.4085 15.225 10.3064 15.1299 10.235 15.013C10.1636 14.8962 10.1256 14.762 10.125 14.625V9.375C10.125 9.2378 10.1627 9.10324 10.2339 8.98597C10.3051 8.86869 10.4071 8.77319 10.5289 8.70987C10.6506 8.64655 10.7873 8.61783 10.9242 8.62683C11.0611 8.63584 11.1929 8.68222 11.3053 8.76094L15.0553 11.3859C15.154 11.4551 15.2345 11.547 15.2901 11.6539C15.3457 11.7608 15.3747 11.8795 15.3747 12C15.3747 12.1205 15.3457 12.2392 15.2901 12.3461C15.2345 12.453 15.154 12.5449 15.0553 12.6141V12.6113Z\" fill=\"white\"></path>\n</g>\n</svg>\n"}
className={`w-html-embed`} />
</Link>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g c1md20bl c1e892th c1y4fwd4`}>
<Text
className={`w-text`}>
{"© 2024 VIA, Inc."}
</Text>
<Link
href={"/credits"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Credits"}
</Link>
</Box>
</Box>
</Box>
</Box>
<Link
href={"https://webstudio.is/"}
target={"_blank"}
rel={"nofollow"}
className={`w-link cx7e777 cn12ej2 c1ngdwug c10yh23j c7f1npl c1sjzfnm c1trj0l7 cjqo3r0 cbuoy5w c393lej csxsvt6 c1oj4qw c183qt6d c1twgu0n c5r7m82 c1fhiulb cifio c1u7hg1c c1qqyhy5 c1mb8swa c1awhn4n c1qyy4dh ct02u4h csru8nn c135vpv5 c119suh8 cujxabw c17xbrdu c1lvufj2 c1oohece co9inq6 c18nx7en c13zjl4p ch9sscy c272dxa`}>
<Image
src={"/assets/logo_r1qaJQiri6sK3rPyq-Sar.svg"}
width={20}
height={20}
alt={"Webstudio Logo"}
optimize={false}
className={`w-image c13fq7lq c1ckxn0n`} />
<Text
tag={"span"}
className={`w-text`}>
{"Chat wit VIA"}
</Text>
</Link>
</Fragment_1>
</Slot>
</Box>
</Body>
}


      export { Page }
    