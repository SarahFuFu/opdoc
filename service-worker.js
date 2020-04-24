/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/hexo/2019/02/18/hello/index.html","fa190dfa8e5a3bec060ef8144a592a34"],["/hexo/about/index.html","96f9da752dc49c2a8a3574ab34e91e4c"],["/hexo/api/index.html","f17060f91d31e6f8a4752e8f307d54d2"],["/hexo/archives/2019/02/index.html","a1403c6db73771a743987f8353260913"],["/hexo/archives/2019/index.html","a1403c6db73771a743987f8353260913"],["/hexo/archives/index.html","a1403c6db73771a743987f8353260913"],["/hexo/atom.xml","fbfc181316a3d580cfc53ea156d76635"],["/hexo/browserconfig.xml","8c40dafb3e79c8e6a182e03f7c27a475"],["/hexo/coc/index.html","2434875ea57b451b84fd6ddf6a6e95fd"],["/hexo/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/hexo/css/index.css","3f1d917ba13afab3f681f2dfa9394bdf"],["/hexo/css/page.css","fddbfad77a4902970987e695bf743444"],["/hexo/css/search.css","98bc5fed33d9deaea04ed36de435afd7"],["/hexo/examples/commits.html","ec465f0bd2e8f4735c325f589ef3fe38"],["/hexo/examples/elastic-header.html","7ddb7d232733946c66a83d00955a59c0"],["/hexo/examples/firebase.html","cd5f8cb3cc57f4fd8519581f28e3f1ec"],["/hexo/examples/grid-component.html","f6a4b8bf96199f538cb7c4c321d12512"],["/hexo/examples/hackernews.html","5869e6309331596d440d0180d936cb25"],["/hexo/examples/index.html","536d8c2fd4ba34cb513e34fdae5ef078"],["/hexo/examples/modal.html","d1002be8585c2797b6ab2c4182ad562a"],["/hexo/examples/select2.html","d5488099aa99c46056a723b121d8717d"],["/hexo/examples/svg.html","5186b5b1f82438b5d1d69f0cf17321f6"],["/hexo/examples/todomvc.html","2de8cffec099f7ec07948f1a0719129a"],["/hexo/examples/tree-view.html","ec54435d12bf7a8431ae2d6a0dddfd4d"],["/hexo/fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/hexo/fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["/hexo/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["/hexo/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["/hexo/fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["/hexo/guide/class-and-style.html","d064f77e70b79d1a4cd3f551ab3e57b3"],["/hexo/guide/comparison.html","73a913b34a7be68bc2071dd802a27776"],["/hexo/guide/components.html","19cd9986ab5033d4fa93d450439e57f2"],["/hexo/guide/computed.html","7a520300a8d88441c607c4d8aa7a2b76"],["/hexo/guide/conditional.html","4fc1e0669c8329894ee95f2c896badd3"],["/hexo/guide/custom-directive.html","6f3c136940032d8d8f54637874f44fbc"],["/hexo/guide/deployment.html","6c6d7887631b025e182b551581ce449d"],["/hexo/guide/events.html","61d3744f2efdab8da7b46c0f44eba6aa"],["/hexo/guide/forms.html","cc60749c84851dff632c642d976ac019"],["/hexo/guide/index.html","7fcca002d3c4992f94cdc372f0c384e7"],["/hexo/guide/installation.html","5b061275ba02253bf16d2b0ead4cdbed"],["/hexo/guide/instance.html","672dd061287717e9ba55fe7716a59089"],["/hexo/guide/join.html","5db0265dd5fed95bcb1722eb734efb01"],["/hexo/guide/list.html","d7f50a18efa5ccf36e9b7bce8f57a6cf"],["/hexo/guide/migration-vue-router.html","8bae7152a13cbc06d6a4adaf378ca6bc"],["/hexo/guide/migration-vuex.html","b492094b05a700421dc2fd60f75105d2"],["/hexo/guide/migration.html","9e514ab3387e1220e12e09024b019b5a"],["/hexo/guide/mixins.html","30717a0867c07ecfa1e3f8c7636926e4"],["/hexo/guide/plugins.html","26501572c7d8fbf979cecba716a292b4"],["/hexo/guide/reactivity.html","6601aa34e97ae75d0d49a2f880821c54"],["/hexo/guide/render-function.html","83139894008206fce0fb872d124e6779"],["/hexo/guide/routing.html","0437929e2ec33d81c9557832586af57e"],["/hexo/guide/single-file-components.html","5639693e5ab6154adfdd82d2c68079e8"],["/hexo/guide/ssr.html","babf7d86cf805dad7bc1c48da95f4c2a"],["/hexo/guide/state-management.html","1243626073c24558a234f60634e9faad"],["/hexo/guide/syntax.html","6b24b053a1676dc891a41c84f71c5591"],["/hexo/guide/transitioning-state.html","a67f312344107f8e43f927cb5ee97061"],["/hexo/guide/transitions.html","f1649820dc1b0e5796d530dde58ce7f6"],["/hexo/guide/unit-testing.html","1bae101264893dce26a487dba369ef4f"],["/hexo/images/Monterail.png","bf1ec94a0ca48f0e6be0c97fa60a42c0"],["/hexo/images/aaha.png","77bfeb59f772f37444c9cefe00785cf2"],["/hexo/images/accelebrate.png","e030e08131cebe8b43c89df18d710ded"],["/hexo/images/alligator_io.svg","1ffe0191e22a65337f9cb224790f5222"],["/hexo/images/bacancy_technology.png","9a0590eb4ce29289b454240415611162"],["/hexo/images/bestvpn_co.png","afbe252b6b59bc3cdac2e7dec69eac39"],["/hexo/images/bit.png","9638a3f44bf471876effb80ea0659f73"],["/hexo/images/blokt_cryptocurrency_news.png","0ecada49bad35aabc864a8df221fd816"],["/hexo/images/breakpoint_hit.png","114924925a4ec0f23236012bc3dc8422"],["/hexo/images/breakpoint_set.png","6439856732303cfeb3806d52dd681191"],["/hexo/images/chaitin.png","549e43997790dc624c477424acbfe228"],["/hexo/images/check.png","c634675b753a1a03b587c43d8b535600"],["/hexo/images/cloudstudio.png","fc480cf4c2b06591f58e7e91666226af"],["/hexo/images/coding.png","10c55345da3c2374563b096f5c86d781"],["/hexo/images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["/hexo/images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["/hexo/images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["/hexo/images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["/hexo/images/components.png","b5c08269dfc26ae6d7db3801e9efd296"],["/hexo/images/config_add.png","353cd8b2a1bdf9fc4c74a80c5f38090a"],["/hexo/images/daily.png","c9a8b2a897dba41c7d5aa6f9cd876d82"],["/hexo/images/data.png","5de7af21d4c2de951720c006f84b98fc"],["/hexo/images/dcloud.gif","8c42ba02dacede9906687d31530120f6"],["/hexo/images/derek_pollard.png","b1c4d535b619865d80d6cf1b2e370300"],["/hexo/images/devexpress.png","a6d9c786a373088c8d238ca643293c17"],["/hexo/images/devsquad.png","e639ea4fd0d7053fc0928d4ff9fefb2a"],["/hexo/images/devtools-storage-chrome.png","ac1f3b275b87e2fec9c4df951347be81"],["/hexo/images/devtools-storage-edge.png","3e92a3bea017b8398e71db0a2419a191"],["/hexo/images/devtools-storage.png","e742c3b1d526bee7be77c050f4bffc92"],["/hexo/images/devtools-timetravel.gif","fca84f3fb8a8d10274eb2fc7ed9b65f9"],["/hexo/images/dom-tree.png","f70b86bfbbfe1962dc5d6125105f1122"],["/hexo/images/dopamine.png","17222090b66cfca59f1ccf8b9843f595"],["/hexo/images/down.png","2f948222df409af3121254d5fe0ed377"],["/hexo/images/earthlink.png","88f1bd15252b11484834176965844e22"],["/hexo/images/energy_comparison.png","1f3f2809057b867842c99679e2723b3e"],["/hexo/images/fastcoding_inc.png","08a0a7652db79fa3395c0ef28d49f0cd"],["/hexo/images/fastcoding_inc.svg","9d33d7905c4fb224aba61de096505794"],["/hexo/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/hexo/images/firestick_tricks.png","1ee05223a5b12fe910cb8428d57223d8"],["/hexo/images/frontend_love.png","b514babc53a0f3ddc854b0b14a54a489"],["/hexo/images/frontendlove.png","b514babc53a0f3ddc854b0b14a54a489"],["/hexo/images/geekbang-ad.jpg","7ab75cf133fd8bc36861403f743cea82"],["/hexo/images/geekbang-vue-ad.gif","e7fae85ac459b6e43a71948c0561ef12"],["/hexo/images/gitee.png","429b3c31a180461c4fb66e5ac20e1385"],["/hexo/images/gridsome.png","e82a2f872ec319bbb5d0a804288cd9b7"],["/hexo/images/hn-architecture.png","b42f49a4e265649f870685b171e4b170"],["/hexo/images/hn.png","99176cdebac521e823be519aef514bb3"],["/hexo/images/html_burger.png","c7ce1344d001e7a236a89694ed59d988"],["/hexo/images/icons.png","ad6ee8c400066e15712cdef4342023da"],["/hexo/images/icons/android-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/hexo/images/icons/android-icon-192x192.png","5d10eaab941eb596ee59ffc53652d035"],["/hexo/images/icons/android-icon-36x36.png","bb757d234def1a6b53d793dbf4879578"],["/hexo/images/icons/android-icon-48x48.png","0d33c4fc51e2bb020bf8dd7cd05db875"],["/hexo/images/icons/android-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/hexo/images/icons/android-icon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/hexo/images/icons/apple-icon-114x114.png","f4fd30f3a26b932843b8c5cef9f2186e"],["/hexo/images/icons/apple-icon-120x120.png","b6a574d63d52ef9c89189b67bcac5cbd"],["/hexo/images/icons/apple-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/hexo/images/icons/apple-icon-152x152.png","f53787bf41febf2b044931a305ccaf2a"],["/hexo/images/icons/apple-icon-180x180.png","9f6b1e3b92b2c5bd5b7d79501bb6e612"],["/hexo/images/icons/apple-icon-57x57.png","83f622ba0994866abc56ace068b6551c"],["/hexo/images/icons/apple-icon-60x60.png","643f761bc39f86c70f17cd1fed3b8e08"],["/hexo/images/icons/apple-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/hexo/images/icons/apple-icon-76x76.png","94d9af047b86d99657b5efb88a0d1c7b"],["/hexo/images/icons/apple-icon-precomposed.png","707758f591323153a4f1cb3a8d9641fa"],["/hexo/images/icons/apple-icon.png","707758f591323153a4f1cb3a8d9641fa"],["/hexo/images/icons/bacancy_technology.png","5810bb8253b1e35ba437373ff83f82d3"],["/hexo/images/icons/favicon-16x16.png","a5a9da66870189b0539223c38c8a7749"],["/hexo/images/icons/favicon-32x32.png","3d60db0d77303b2414ddd50cf2472bf7"],["/hexo/images/icons/favicon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/hexo/images/icons/ms-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/hexo/images/icons/ms-icon-150x150.png","e8cdf492981122a2548bc247c7b4067d"],["/hexo/images/icons/ms-icon-310x310.png","1721f8303ec2349002b5980a01f27cef"],["/hexo/images/icons/ms-icon-70x70.png","a110cf0132b00b23a8605ca72a8874ba"],["/hexo/images/icons_8.png","ffcdd01817ecdb32b92bd2f1e4d75e84"],["/hexo/images/inkoop.png","1cff77d2c927657d3aceeba2c12db892"],["/hexo/images/intygrate.png","fdd390b44a4aeed763f53f4e8f6529e4"],["/hexo/images/isle_of_code.png","42f662ab71b943889f8f8b56515350f2"],["/hexo/images/jqwidgets_.png","b6a0a55c85816adb196e1f7450a7f3d7"],["/hexo/images/jqwidgets_ltd.png","6d209e39ca89483f3677ae859edca4d7"],["/hexo/images/laravel.png","9a2fba3eca41e26743dc731e3a4469b6"],["/hexo/images/lifecycle.png","b3251a15e5779fcfec925b78a149f5c8"],["/hexo/images/logged-proxied-data.png","716e3c41aacf453cfaedd61c2795f0ec"],["/hexo/images/logo.png","cf23526f451784ff137f161b8fe18d5a"],["/hexo/images/marcus_hiles.png","8b55f40abd154200ce72b8cdb6a8d90f"],["/hexo/images/memory-leak-example.png","c2fae8bd6d8fa50632f9cde80be8b3f6"],["/hexo/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/hexo/images/modus.png","6498c04fee5b8542449b350e77180379"],["/hexo/images/mvvm.png","4fbd3c1bc80d47038f3e66cf1478a1a3"],["/hexo/images/nativescript.png","05c94493b428db55bb441faaca4b02d8"],["/hexo/images/neds.png","1f1a2a46c2575019ae07a90205f60b65"],["/hexo/images/onsen_ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["/hexo/images/op-depends.png","d604691bd7dc8573175129515d590030"],["/hexo/images/opteo.png","e80eaa359d4722af5fd8fed79fb9eec5"],["/hexo/images/oxford-comma.jpg","8a220093d78172e4eb9d98529f9fba05"],["/hexo/images/passionate_people.png","03e59e28347e1dcd165e4e1525afb545"],["/hexo/images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["/hexo/images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["/hexo/images/philip_john_basile.gif","35fc21939087e126d93d173491900c70"],["/hexo/images/piratebay_proxy.png","c3049e3d886a22dfd0d5c8eaba67b8ff"],["/hexo/images/piratebayproxy.png","c3049e3d886a22dfd0d5c8eaba67b8ff"],["/hexo/images/programmers_io.png","02cb415eb9a8e9ce6579c7aff03759dd"],["/hexo/images/props-events.png","8996ef20503fbf264a0bfdeafccca74a"],["/hexo/images/pullrequest.svg","50847513b306736d33234d50b11c5e1d"],["/hexo/images/retool.png","aaad6a749deb625da5771750dcb51920"],["/hexo/images/roadster.png","080fb711e736d686f182358a582d7c6b"],["/hexo/images/search-by-algolia.png","3f22d84b817bb896bd5bef0705ff8fc7"],["/hexo/images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/hexo/images/shopware_ag.png","e2ded483c0660bd629938e37f388d9fb"],["/hexo/images/shopware_ag.svg","5d2a8176b6e1b0a348339746de3edf28"],["/hexo/images/special-sponsor-spot.png","860ea231e9bd1b3ff35e627eb83bb936"],["/hexo/images/staff_augmentation.png","999025bb7194afd0fb71a94dbe77146f"],["/hexo/images/state.png","6a05b01942c7d2cff4ea0033ded59ebb"],["/hexo/images/stdlib.png","8693858c969505b29339bf84c0a5cbdf"],["/hexo/images/storekit.png","cacf47116e5efe9fc2dcd60ebc197707"],["/hexo/images/syncfusion.png","fd1617455479c2e3265656c167faeb91"],["/hexo/images/tee__.png","ea5fd763d459d3942e50c323fa32988a"],["/hexo/images/tenant-carpermission.png","b2896c65cf76a9fb6c2bf766ee278335"],["/hexo/images/tenant-structure.png","9e30d5a7ab776dbeff7a95410c1ee217"],["/hexo/images/tencent-ad.png","adf85e09ed9c9a5c91d83b9ecf7bd3dd"],["/hexo/images/tidelift.png","831935bd53d7d2d4eea9427c5f874816"],["/hexo/images/tighten_co.png","003364e7044150e2979cbfe03d640cec"],["/hexo/images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["/hexo/images/transition.png","5990c1dff7dc7a8fb3b34b4462bd0105"],["/hexo/images/typescript-type-error.png","1665e7350370c091d397383a7355d3a6"],["/hexo/images/unicorn_io.svg","1a8c5cb8217f6d83468bcd4746bb02e8"],["/hexo/images/usave.png","5cffd5053b1d75ae49c9b6eb176e0ccf"],["/hexo/images/valuecoders.png","818ca42a745e018ace0c55c36a7ae3dd"],["/hexo/images/vant.png","802bad3fb5ca2a791682fc27c5af22f8"],["/hexo/images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["/hexo/images/vpnranks.png","a657f71ef96eb8c22c7f1496c01ca53a"],["/hexo/images/vue-component-with-preprocessors.png","a5cb959052c9cda793e23a6e3a6a122c"],["/hexo/images/vue-component.png","6a7040cfd4330a536d980c69e2e8dd18"],["/hexo/images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["/hexo/images/vuemastery.png","6f09ce143467fba22039bde3f2070c19"],["/hexo/images/vueschool.png","3d92b4f1a8fcbe3be0d0e89950a1a705"],["/hexo/images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["/hexo/images/watchcartoononline.png","f7cf1082b14003908496f02f9eb2ae00"],["/hexo/images/webdock.png","6b8d3d271ba4d05daf83ad75d21221d1"],["/hexo/images/wilderminds.png","cd98b69653b51369da2e765097f13d6f"],["/hexo/images/writers_per_hour.jpg","2033e6d7e88969e97e78e38d8d030eb9"],["/hexo/images/x_team.png","a6cfaebb0c0dc17d348bc9c6fd5758ef"],["/hexo/images/xinguan.png","9eedb6a8a2ee1b0deded1cbadb2680a5"],["/hexo/images/y8.png","3cdd8826d3419751f40a8aa7f90cd539"],["/hexo/images/yakaz.png","f1918919114e35d6091e67370450e8bd"],["/hexo/images/youku.png","1cce2782971aed63d38b17e28614d512"],["/hexo/index.html","5ccd9ff96765a7e509d3786c3d2ab880"],["/hexo/js/common.js","4cd0a2256c9c3662142ca8c261ea3ccb"],["/hexo/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/hexo/js/smooth-scroll.min.js","ecaa94f311c27bd2ac704a9658ff9cef"],["/hexo/js/theme-data.js","a9c74d5548b5c8931690ce28af98253c"],["/hexo/js/vue.js","1e99e929ad552078273d58192153ab2d"],["/hexo/js/vue.min.js","6c81f02ad0bf8e12a66c18cab188d029"],["/hexo/manifest.json","bd8de9895abf2cc1faa760a8bd1004d8"],["/hexo/menu/index.html","ff052993dc549fb03763ab86ee66c3a3"],["/hexo/perf/index.html","54d21c0653adb64ec556ba851652fdaa"],["/hexo/resources/partners.html","7d3227958f393897c7e0706d5d965ca7"],["/hexo/resources/themes.html","b3fd0ec680ddb554dfff0821c5c3e76a"],["/hexo/saas/java/guide/deploy.html","a38d35594a9cb08a96ce86f957394f1d"],["/hexo/saas/java/guide/index.html","60959d91c83a6cfc5d3d0fac3dcd55d1"],["/hexo/saas/java/guide/operation.html","e16570d7753fdd13f7d1760de54ea2a6"],["/hexo/saas/java/guide/other.html","d6aaefe5abc1d94878d90422276b95cd"],["/hexo/saas/java/tenantsystem/dbdesign.html","b923650d7969a7dc4dd537a2ebe70ac3"],["/hexo/saas/java/tenantsystem/index.html","04aa7a3e630b1c07757c984681c2d7d8"],["/hexo/saas/java/tenantsystem/other.html","5c6abce29d50aeb0b639c87bdf6ac641"],["/hexo/saas/ui/guide/index.html","0907f915da602bc5fbf1d02dd4934aea"],["/hexo/saas/ui/guide/installation.html","28742d3210706ce370027226c120d39b"],["/hexo/support-vuejs/index.html","a17977727f9ec1501e1025eb7bc27714"],["/hexo/v2/api/index.html","2fdba63bee701357d25e8e3506c39733"],["/hexo/v2/cookbook/adding-instance-properties.html","9a83533784b0238e7711f76af5031ba0"],["/hexo/v2/cookbook/avoiding-memory-leaks.html","2e07fa3440b808b2d096ac3d6b794364"],["/hexo/v2/cookbook/client-side-storage.html","167dec33831dea13d18585a71a00eaba"],["/hexo/v2/cookbook/creating-custom-scroll-directives.html","d31c7a74a103e3d9239876f2617b519c"],["/hexo/v2/cookbook/debugging-in-vscode.html","3afdb59b968559f150f745c05ebabde5"],["/hexo/v2/cookbook/dockerize-vuejs-app.html","60ba44bc0dbfc337f94d172d1b10bac2"],["/hexo/v2/cookbook/editable-svg-icons.html","c2b08e620b21db63a7e4865db6a85c0d"],["/hexo/v2/cookbook/form-validation.html","b790647010f8c3a8cbe8ab78a9bfe263"],["/hexo/v2/cookbook/index.html","c6d3297ea80091fd373d57caf2f35425"],["/hexo/v2/cookbook/packaging-sfc-for-npm.html","a057c7a88333aa36b485a6e27d54dd9c"],["/hexo/v2/cookbook/practical-use-of-scoped-slots.html","25d1ef9b9f309f83541a9e6ed2e2db60"],["/hexo/v2/cookbook/serverless-blog.html","3c036152d6da907d04aae60f639a18f2"],["/hexo/v2/cookbook/unit-testing-vue-components.html","68314f54193a185ec9277a9534b0d1ce"],["/hexo/v2/cookbook/using-axios-to-consume-apis.html","e6343a4804fd42b6100ec9f4e93071b8"],["/hexo/v2/examples/commits.html","38bbfc6dc7709b1105661198e3cfe392"],["/hexo/v2/examples/deepstream.html","c0187c24ffdef425a3bed259ac6d7448"],["/hexo/v2/examples/elastic-header.html","5b7d0914a4f6c63de274f3cb5a579c3a"],["/hexo/v2/examples/firebase.html","d82e9e34153409f183b530181ba07fd2"],["/hexo/v2/examples/grid-component.html","8860f993fc3bffd95ee23970481da823"],["/hexo/v2/examples/hackernews.html","799ec8461c6df2783e17a5033fc28335"],["/hexo/v2/examples/index.html","7112d4c707264778aded9255ab823b40"],["/hexo/v2/examples/modal.html","880699b7a5e491e7f7f37eb4851dd90d"],["/hexo/v2/examples/select2.html","83cc9463889ac3891114d5cbbfd0a47a"],["/hexo/v2/examples/svg.html","ac33e46fba7fba51bac8552675cd565c"],["/hexo/v2/examples/todomvc.html","6118f55f9e43c7076c780760b7e24397"],["/hexo/v2/examples/tree-view.html","149899ef88db0207d4c31539d6949f86"],["/hexo/v2/guide/class-and-style.html","2ffbd0d4e8fe4961608019d3236c8edb"],["/hexo/v2/guide/comparison.html","3382ccd713edcf6a5d61d03b8e8399bd"],["/hexo/v2/guide/components-custom-events.html","22e057a127a91d035bd09bdc3867a236"],["/hexo/v2/guide/components-edge-cases.html","648adb4ee675466d7a86e2b704f0cc77"],["/hexo/v2/guide/components-props.html","02e75530c028e7f1892d8ffae1c71606"],["/hexo/v2/guide/components-registration.html","d9447bd0038e28d55f60661e2bace78e"],["/hexo/v2/guide/components-slots.html","2017b399961dbdb21ab814394093f73c"],["/hexo/v2/guide/components.html","b8b712b1db02d8c0f0994ce0a9082014"],["/hexo/v2/guide/computed.html","d24e398c86d2810854087a431e1fb42e"],["/hexo/v2/guide/conditional.html","4862e36639ee4048f1288ebd3c041cba"],["/hexo/v2/guide/custom-directive.html","a8b4108d8f5784f4d625058353e11b70"],["/hexo/v2/guide/deployment.html","087bfe7ea4e19e10ec07a33042512a9c"],["/hexo/v2/guide/events.html","6388200fc2318910ea88e0e94b61c972"],["/hexo/v2/guide/filters.html","514aa24d618613b814e7f261460f1bf8"],["/hexo/v2/guide/forms.html","91a00dc30045160706397744e70fe48d"],["/hexo/v2/guide/index.html","be43e1bafb8f1dde9a679203ad7c3051"],["/hexo/v2/guide/installation.html","e16d2c39bd64fe2370c5f63d0bac3efc"],["/hexo/v2/guide/instance.html","8871c1eb1ee36219bb70801d221e91ef"],["/hexo/v2/guide/join.html","7f4cb6a8b80cca19a71989222cfe3382"],["/hexo/v2/guide/list.html","d0997297fc1cd328314bb433eda0cc16"],["/hexo/v2/guide/migration-vue-router.html","98bd1151141add709619d1beafe59cc7"],["/hexo/v2/guide/migration-vuex.html","d07fee77ba02adf04de05eb6f53d34fa"],["/hexo/v2/guide/migration.html","795a0d81067a683980db4d0b2849c69f"],["/hexo/v2/guide/mixins.html","6501e8b99714d5801dfddf04509d2db0"],["/hexo/v2/guide/plugins.html","ae74a7807e8dd29e051e82f4cc55b5a8"],["/hexo/v2/guide/reactivity.html","8deabc1c67121122591941783b2d5a3b"],["/hexo/v2/guide/render-function.html","14a32ec1aa940b3dd5080d099981ef76"],["/hexo/v2/guide/routing.html","19165817c396824994647274c60258c3"],["/hexo/v2/guide/security.html","eaf3964e72460abfd19b08ef86fb2f85"],["/hexo/v2/guide/single-file-components.html","c9d597dacd64b362cce68522a03bd09a"],["/hexo/v2/guide/ssr.html","dc52511ff2c654243a5529dbd1436842"],["/hexo/v2/guide/state-management.html","7fb3d9c8458591db291a160adba6df88"],["/hexo/v2/guide/syntax.html","c2936b499b9419e58c7c52e9aae127c8"],["/hexo/v2/guide/team.html","2e321d9efc0487dd19b0a95ebb5a22fe"],["/hexo/v2/guide/transitioning-state.html","b29fb9bebc0ae4b9b982c147c26d6cac"],["/hexo/v2/guide/transitions.html","ca01fcb4330c6bbc5cbe4edcacf69cd9"],["/hexo/v2/guide/typescript.html","833db048cea8e7d0dd6db1bbe60d61be"],["/hexo/v2/guide/unit-testing.html","12c14d0d021dde6459befed840bcb60b"],["/hexo/v2/search/index.html","36640b0f43d64c632e692f7f2a7e8d4e"],["/hexo/v2/style-guide/index.html","abd43c3c62537c2a8dbde933ae7a4ec3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.networkFirst, {"origin":"sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




