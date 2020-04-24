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

var precacheConfig = [["/opdoc/2019/02/18/hello/index.html","c2b0b66012974dbe146501332347ecbd"],["/opdoc/about/index.html","2dad494707ed34e4e2df1d1075c902db"],["/opdoc/api/index.html","df298fd2ae375c8096979a4f29e6c2c9"],["/opdoc/archives/2019/02/index.html","04513bf309778aaeff594faec512e04a"],["/opdoc/archives/2019/index.html","04513bf309778aaeff594faec512e04a"],["/opdoc/archives/index.html","04513bf309778aaeff594faec512e04a"],["/opdoc/atom.xml","6ada63965d0cf42c32263bdb30b09721"],["/opdoc/browserconfig.xml","8c40dafb3e79c8e6a182e03f7c27a475"],["/opdoc/coc/index.html","e37876560a5ad8143d508180dc92893a"],["/opdoc/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/opdoc/css/index.css","3f1d917ba13afab3f681f2dfa9394bdf"],["/opdoc/css/page.css","fddbfad77a4902970987e695bf743444"],["/opdoc/css/search.css","98bc5fed33d9deaea04ed36de435afd7"],["/opdoc/examples/commits.html","19ddb6246730edd7bbaea67b19c20d17"],["/opdoc/examples/elastic-header.html","69b025359eaac7ebad069ecb6e56ade4"],["/opdoc/examples/firebase.html","3a5c215a427975b783e635f9a6ac58af"],["/opdoc/examples/grid-component.html","264da745a2d2a107cbf20b44e8c74ebf"],["/opdoc/examples/hackernews.html","5e2a7aa9b3f7031736f92ca6f4f7bf47"],["/opdoc/examples/index.html","a6e00fb6f7a4c2413908eaa53adf2e24"],["/opdoc/examples/modal.html","bc81ab8c651be2303a1ab69604152837"],["/opdoc/examples/select2.html","ff67159262f68b588108c5e2a32150c4"],["/opdoc/examples/svg.html","449695186cec3619fc5061d7e667cc24"],["/opdoc/examples/todomvc.html","ff0efd9a698db27d53add12a761908b0"],["/opdoc/examples/tree-view.html","c838c1b11718b922cc718316dc879aba"],["/opdoc/fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/opdoc/fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["/opdoc/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["/opdoc/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["/opdoc/fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["/opdoc/guide/class-and-style.html","23373085e930b1b7c655419fd5ce2b7d"],["/opdoc/guide/comparison.html","d76629df4f7d71d8be8147fc2198897b"],["/opdoc/guide/components.html","b1774ac668f73483ef23109064189314"],["/opdoc/guide/computed.html","80478d5295d23735530e17ec5a734160"],["/opdoc/guide/conditional.html","b0320a3cf97a768154ecfba038f23a3c"],["/opdoc/guide/custom-directive.html","7f3eeb0c9fd2ccc449139770ee6e8609"],["/opdoc/guide/deployment.html","6cf757d5c37daea4a0c72188ebf8aeb8"],["/opdoc/guide/events.html","7eed96a746fece99ab0a2a1c697ecd39"],["/opdoc/guide/forms.html","9baf032406641afd95ba6fcf0c4438d9"],["/opdoc/guide/index.html","157e859116aa76a6c4e44d540f26f068"],["/opdoc/guide/installation.html","ed5a3cfc5fae20438c23c1eeffb3783a"],["/opdoc/guide/instance.html","0bca205b346c5444884d70a68faceeb4"],["/opdoc/guide/join.html","70ae8aa3076cb9d890252e9098ba6fdc"],["/opdoc/guide/list.html","dc94dbf5c8d2176f14a3013136aee7aa"],["/opdoc/guide/migration-vue-router.html","a8d1e315000ce11b74ba7da2dae8054b"],["/opdoc/guide/migration-vuex.html","19eef807cd2f1378196c52512cf64cbf"],["/opdoc/guide/migration.html","045696126fb79ec3808be4a9e2bfe932"],["/opdoc/guide/mixins.html","93a1ed285464ca32eecce53dd308bb24"],["/opdoc/guide/plugins.html","50ed7136120e7c57209859df6d19dd50"],["/opdoc/guide/reactivity.html","8f0df16758b8cccfb3748d068ab06664"],["/opdoc/guide/render-function.html","fc37268ea1dd786c98ac7f23f2c0d19d"],["/opdoc/guide/routing.html","3ba26507df8b617632d10f8f9f67e07e"],["/opdoc/guide/single-file-components.html","382844f3ccbcdd356fb95889cf2d1068"],["/opdoc/guide/ssr.html","a945f19a8e21184bc86081bff0d0e817"],["/opdoc/guide/state-management.html","6899766ee08eb06153f82309e6e73e67"],["/opdoc/guide/syntax.html","2483ec01a10fd2eb02fd37c11a22df59"],["/opdoc/guide/transitioning-state.html","558de4a55d3b4c88c3eef8941650f2fd"],["/opdoc/guide/transitions.html","af9930639cbfd530c5fe2a741b80a0e2"],["/opdoc/guide/unit-testing.html","838d2988b0ab761cf6df40b30b3a9625"],["/opdoc/images/Monterail.png","bf1ec94a0ca48f0e6be0c97fa60a42c0"],["/opdoc/images/aaha.png","77bfeb59f772f37444c9cefe00785cf2"],["/opdoc/images/accelebrate.png","e030e08131cebe8b43c89df18d710ded"],["/opdoc/images/alligator_io.svg","1ffe0191e22a65337f9cb224790f5222"],["/opdoc/images/bacancy_technology.png","9a0590eb4ce29289b454240415611162"],["/opdoc/images/bestvpn_co.png","afbe252b6b59bc3cdac2e7dec69eac39"],["/opdoc/images/bit.png","9638a3f44bf471876effb80ea0659f73"],["/opdoc/images/blokt_cryptocurrency_news.png","0ecada49bad35aabc864a8df221fd816"],["/opdoc/images/breakpoint_hit.png","114924925a4ec0f23236012bc3dc8422"],["/opdoc/images/breakpoint_set.png","6439856732303cfeb3806d52dd681191"],["/opdoc/images/chaitin.png","549e43997790dc624c477424acbfe228"],["/opdoc/images/check.png","c634675b753a1a03b587c43d8b535600"],["/opdoc/images/cloudstudio.png","fc480cf4c2b06591f58e7e91666226af"],["/opdoc/images/coding.png","10c55345da3c2374563b096f5c86d781"],["/opdoc/images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["/opdoc/images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["/opdoc/images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["/opdoc/images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["/opdoc/images/components.png","b5c08269dfc26ae6d7db3801e9efd296"],["/opdoc/images/config_add.png","353cd8b2a1bdf9fc4c74a80c5f38090a"],["/opdoc/images/daily.png","c9a8b2a897dba41c7d5aa6f9cd876d82"],["/opdoc/images/data.png","5de7af21d4c2de951720c006f84b98fc"],["/opdoc/images/dcloud.gif","8c42ba02dacede9906687d31530120f6"],["/opdoc/images/derek_pollard.png","b1c4d535b619865d80d6cf1b2e370300"],["/opdoc/images/devexpress.png","a6d9c786a373088c8d238ca643293c17"],["/opdoc/images/devsquad.png","e639ea4fd0d7053fc0928d4ff9fefb2a"],["/opdoc/images/devtools-storage-chrome.png","ac1f3b275b87e2fec9c4df951347be81"],["/opdoc/images/devtools-storage-edge.png","3e92a3bea017b8398e71db0a2419a191"],["/opdoc/images/devtools-storage.png","e742c3b1d526bee7be77c050f4bffc92"],["/opdoc/images/devtools-timetravel.gif","fca84f3fb8a8d10274eb2fc7ed9b65f9"],["/opdoc/images/dom-tree.png","f70b86bfbbfe1962dc5d6125105f1122"],["/opdoc/images/dopamine.png","17222090b66cfca59f1ccf8b9843f595"],["/opdoc/images/down.png","2f948222df409af3121254d5fe0ed377"],["/opdoc/images/earthlink.png","88f1bd15252b11484834176965844e22"],["/opdoc/images/energy_comparison.png","1f3f2809057b867842c99679e2723b3e"],["/opdoc/images/fastcoding_inc.png","08a0a7652db79fa3395c0ef28d49f0cd"],["/opdoc/images/fastcoding_inc.svg","9d33d7905c4fb224aba61de096505794"],["/opdoc/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/opdoc/images/firestick_tricks.png","1ee05223a5b12fe910cb8428d57223d8"],["/opdoc/images/frontend_love.png","b514babc53a0f3ddc854b0b14a54a489"],["/opdoc/images/frontendlove.png","b514babc53a0f3ddc854b0b14a54a489"],["/opdoc/images/geekbang-ad.jpg","7ab75cf133fd8bc36861403f743cea82"],["/opdoc/images/geekbang-vue-ad.gif","e7fae85ac459b6e43a71948c0561ef12"],["/opdoc/images/gitee.png","429b3c31a180461c4fb66e5ac20e1385"],["/opdoc/images/gridsome.png","e82a2f872ec319bbb5d0a804288cd9b7"],["/opdoc/images/hn-architecture.png","b42f49a4e265649f870685b171e4b170"],["/opdoc/images/hn.png","99176cdebac521e823be519aef514bb3"],["/opdoc/images/html_burger.png","c7ce1344d001e7a236a89694ed59d988"],["/opdoc/images/icons.png","ad6ee8c400066e15712cdef4342023da"],["/opdoc/images/icons/android-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/opdoc/images/icons/android-icon-192x192.png","5d10eaab941eb596ee59ffc53652d035"],["/opdoc/images/icons/android-icon-36x36.png","bb757d234def1a6b53d793dbf4879578"],["/opdoc/images/icons/android-icon-48x48.png","0d33c4fc51e2bb020bf8dd7cd05db875"],["/opdoc/images/icons/android-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/opdoc/images/icons/android-icon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/opdoc/images/icons/apple-icon-114x114.png","f4fd30f3a26b932843b8c5cef9f2186e"],["/opdoc/images/icons/apple-icon-120x120.png","b6a574d63d52ef9c89189b67bcac5cbd"],["/opdoc/images/icons/apple-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/opdoc/images/icons/apple-icon-152x152.png","f53787bf41febf2b044931a305ccaf2a"],["/opdoc/images/icons/apple-icon-180x180.png","9f6b1e3b92b2c5bd5b7d79501bb6e612"],["/opdoc/images/icons/apple-icon-57x57.png","83f622ba0994866abc56ace068b6551c"],["/opdoc/images/icons/apple-icon-60x60.png","643f761bc39f86c70f17cd1fed3b8e08"],["/opdoc/images/icons/apple-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/opdoc/images/icons/apple-icon-76x76.png","94d9af047b86d99657b5efb88a0d1c7b"],["/opdoc/images/icons/apple-icon-precomposed.png","707758f591323153a4f1cb3a8d9641fa"],["/opdoc/images/icons/apple-icon.png","707758f591323153a4f1cb3a8d9641fa"],["/opdoc/images/icons/bacancy_technology.png","5810bb8253b1e35ba437373ff83f82d3"],["/opdoc/images/icons/favicon-16x16.png","a5a9da66870189b0539223c38c8a7749"],["/opdoc/images/icons/favicon-32x32.png","3d60db0d77303b2414ddd50cf2472bf7"],["/opdoc/images/icons/favicon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/opdoc/images/icons/ms-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/opdoc/images/icons/ms-icon-150x150.png","e8cdf492981122a2548bc247c7b4067d"],["/opdoc/images/icons/ms-icon-310x310.png","1721f8303ec2349002b5980a01f27cef"],["/opdoc/images/icons/ms-icon-70x70.png","a110cf0132b00b23a8605ca72a8874ba"],["/opdoc/images/icons_8.png","ffcdd01817ecdb32b92bd2f1e4d75e84"],["/opdoc/images/inkoop.png","1cff77d2c927657d3aceeba2c12db892"],["/opdoc/images/intygrate.png","fdd390b44a4aeed763f53f4e8f6529e4"],["/opdoc/images/isle_of_code.png","42f662ab71b943889f8f8b56515350f2"],["/opdoc/images/jqwidgets_.png","b6a0a55c85816adb196e1f7450a7f3d7"],["/opdoc/images/jqwidgets_ltd.png","6d209e39ca89483f3677ae859edca4d7"],["/opdoc/images/laravel.png","9a2fba3eca41e26743dc731e3a4469b6"],["/opdoc/images/lifecycle.png","b3251a15e5779fcfec925b78a149f5c8"],["/opdoc/images/logged-proxied-data.png","716e3c41aacf453cfaedd61c2795f0ec"],["/opdoc/images/logo.png","cf23526f451784ff137f161b8fe18d5a"],["/opdoc/images/marcus_hiles.png","8b55f40abd154200ce72b8cdb6a8d90f"],["/opdoc/images/memory-leak-example.png","c2fae8bd6d8fa50632f9cde80be8b3f6"],["/opdoc/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/opdoc/images/modus.png","6498c04fee5b8542449b350e77180379"],["/opdoc/images/mvvm.png","4fbd3c1bc80d47038f3e66cf1478a1a3"],["/opdoc/images/nativescript.png","05c94493b428db55bb441faaca4b02d8"],["/opdoc/images/neds.png","1f1a2a46c2575019ae07a90205f60b65"],["/opdoc/images/onsen_ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["/opdoc/images/op-depends.png","d604691bd7dc8573175129515d590030"],["/opdoc/images/opteo.png","e80eaa359d4722af5fd8fed79fb9eec5"],["/opdoc/images/oxford-comma.jpg","8a220093d78172e4eb9d98529f9fba05"],["/opdoc/images/passionate_people.png","03e59e28347e1dcd165e4e1525afb545"],["/opdoc/images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["/opdoc/images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["/opdoc/images/philip_john_basile.gif","35fc21939087e126d93d173491900c70"],["/opdoc/images/piratebay_proxy.png","c3049e3d886a22dfd0d5c8eaba67b8ff"],["/opdoc/images/piratebayproxy.png","c3049e3d886a22dfd0d5c8eaba67b8ff"],["/opdoc/images/programmers_io.png","02cb415eb9a8e9ce6579c7aff03759dd"],["/opdoc/images/props-events.png","8996ef20503fbf264a0bfdeafccca74a"],["/opdoc/images/pullrequest.svg","50847513b306736d33234d50b11c5e1d"],["/opdoc/images/retool.png","aaad6a749deb625da5771750dcb51920"],["/opdoc/images/roadster.png","080fb711e736d686f182358a582d7c6b"],["/opdoc/images/search-by-algolia.png","3f22d84b817bb896bd5bef0705ff8fc7"],["/opdoc/images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/opdoc/images/shopware_ag.png","e2ded483c0660bd629938e37f388d9fb"],["/opdoc/images/shopware_ag.svg","5d2a8176b6e1b0a348339746de3edf28"],["/opdoc/images/special-sponsor-spot.png","860ea231e9bd1b3ff35e627eb83bb936"],["/opdoc/images/staff_augmentation.png","999025bb7194afd0fb71a94dbe77146f"],["/opdoc/images/state.png","6a05b01942c7d2cff4ea0033ded59ebb"],["/opdoc/images/stdlib.png","8693858c969505b29339bf84c0a5cbdf"],["/opdoc/images/storekit.png","cacf47116e5efe9fc2dcd60ebc197707"],["/opdoc/images/syncfusion.png","fd1617455479c2e3265656c167faeb91"],["/opdoc/images/tee__.png","ea5fd763d459d3942e50c323fa32988a"],["/opdoc/images/tenant-carpermission.png","b2896c65cf76a9fb6c2bf766ee278335"],["/opdoc/images/tenant-structure.png","9e30d5a7ab776dbeff7a95410c1ee217"],["/opdoc/images/tencent-ad.png","adf85e09ed9c9a5c91d83b9ecf7bd3dd"],["/opdoc/images/tidelift.png","831935bd53d7d2d4eea9427c5f874816"],["/opdoc/images/tighten_co.png","003364e7044150e2979cbfe03d640cec"],["/opdoc/images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["/opdoc/images/transition.png","5990c1dff7dc7a8fb3b34b4462bd0105"],["/opdoc/images/typescript-type-error.png","1665e7350370c091d397383a7355d3a6"],["/opdoc/images/unicorn_io.svg","1a8c5cb8217f6d83468bcd4746bb02e8"],["/opdoc/images/usave.png","5cffd5053b1d75ae49c9b6eb176e0ccf"],["/opdoc/images/valuecoders.png","818ca42a745e018ace0c55c36a7ae3dd"],["/opdoc/images/vant.png","802bad3fb5ca2a791682fc27c5af22f8"],["/opdoc/images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["/opdoc/images/vpnranks.png","a657f71ef96eb8c22c7f1496c01ca53a"],["/opdoc/images/vue-component-with-preprocessors.png","a5cb959052c9cda793e23a6e3a6a122c"],["/opdoc/images/vue-component.png","6a7040cfd4330a536d980c69e2e8dd18"],["/opdoc/images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["/opdoc/images/vuemastery.png","6f09ce143467fba22039bde3f2070c19"],["/opdoc/images/vueschool.png","3d92b4f1a8fcbe3be0d0e89950a1a705"],["/opdoc/images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["/opdoc/images/watchcartoononline.png","f7cf1082b14003908496f02f9eb2ae00"],["/opdoc/images/webdock.png","6b8d3d271ba4d05daf83ad75d21221d1"],["/opdoc/images/wilderminds.png","cd98b69653b51369da2e765097f13d6f"],["/opdoc/images/writers_per_hour.jpg","2033e6d7e88969e97e78e38d8d030eb9"],["/opdoc/images/x_team.png","a6cfaebb0c0dc17d348bc9c6fd5758ef"],["/opdoc/images/xinguan.png","9eedb6a8a2ee1b0deded1cbadb2680a5"],["/opdoc/images/y8.png","3cdd8826d3419751f40a8aa7f90cd539"],["/opdoc/images/yakaz.png","f1918919114e35d6091e67370450e8bd"],["/opdoc/images/youku.png","1cce2782971aed63d38b17e28614d512"],["/opdoc/index.html","e0d65b15537878aa3b71e69514743191"],["/opdoc/js/common.js","4cd0a2256c9c3662142ca8c261ea3ccb"],["/opdoc/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/opdoc/js/smooth-scroll.min.js","ecaa94f311c27bd2ac704a9658ff9cef"],["/opdoc/js/theme-data.js","a9c74d5548b5c8931690ce28af98253c"],["/opdoc/js/vue.js","1e99e929ad552078273d58192153ab2d"],["/opdoc/js/vue.min.js","6c81f02ad0bf8e12a66c18cab188d029"],["/opdoc/manifest.json","bd8de9895abf2cc1faa760a8bd1004d8"],["/opdoc/menu/index.html","57f61a3e19cf02c010dc4edc30d375f3"],["/opdoc/perf/index.html","247a5cc90554580a48ca81f378c87042"],["/opdoc/resources/partners.html","6441e6d577d10c3dc4e97f6bfff473b1"],["/opdoc/resources/themes.html","4abf7f8231ac9ae3f488b0a6a68dc864"],["/opdoc/saas/java/guide/deploy.html","6cc956698cfa01aea6909d89568ef4b9"],["/opdoc/saas/java/guide/index.html","8f3ceaf63a316c56ef59c2ef6ba67db9"],["/opdoc/saas/java/guide/operation.html","1779087ebc35743a9e6b0ccb47c271f1"],["/opdoc/saas/java/guide/other.html","1dc5652211ffe64cc086e0ff7711e6ca"],["/opdoc/saas/java/tenantsystem/dbdesign.html","67be94354fc717a7b4e402d05c117e21"],["/opdoc/saas/java/tenantsystem/index.html","2cf35e008cf22d9fd4fcd576752fdcae"],["/opdoc/saas/java/tenantsystem/other.html","18da28e4b49df1d2de6c6f11e5fd482d"],["/opdoc/saas/ui/guide/index.html","57f1c9f660ef97885a6fb28a80686a02"],["/opdoc/saas/ui/guide/installation.html","10b1492decf1983e0e0557509fbb3e5b"],["/opdoc/support-vuejs/index.html","87a142e1837b7493688b3e3e2c59b460"],["/opdoc/v2/api/index.html","385d05037478b4b806e1964cc8af3bd5"],["/opdoc/v2/cookbook/adding-instance-properties.html","cac9df103c74b8473b1ad413467d5069"],["/opdoc/v2/cookbook/avoiding-memory-leaks.html","96a7c01d62aff47c419c49327f180270"],["/opdoc/v2/cookbook/client-side-storage.html","5c787806cb64d93a4f9ba867d638dbb6"],["/opdoc/v2/cookbook/creating-custom-scroll-directives.html","92a7412b9a6b65485aae3c1d9c3567f5"],["/opdoc/v2/cookbook/debugging-in-vscode.html","bea77fedeaf5c39cc6af6f712289927a"],["/opdoc/v2/cookbook/dockerize-vuejs-app.html","ae75c8709f10a22bbaabf690bfec755b"],["/opdoc/v2/cookbook/editable-svg-icons.html","d05bd9e190e29fa47cd98594ce127147"],["/opdoc/v2/cookbook/form-validation.html","d658855d26a32c0fdd86c2d1061114d3"],["/opdoc/v2/cookbook/index.html","9aa210f9306528a5a26eb8b00eeaaff6"],["/opdoc/v2/cookbook/packaging-sfc-for-npm.html","fc945e43f0855d55518f87b72a7a16c2"],["/opdoc/v2/cookbook/practical-use-of-scoped-slots.html","9a98da1a26854652d8653df465d7a947"],["/opdoc/v2/cookbook/serverless-blog.html","16196d43489bb77f34e3a7044b6e9b03"],["/opdoc/v2/cookbook/unit-testing-vue-components.html","413317ac7f66e5a0f8111891a7513976"],["/opdoc/v2/cookbook/using-axios-to-consume-apis.html","e8eaaa657f9267463b405ed45ea9944f"],["/opdoc/v2/examples/commits.html","0c10f50e7badb1a812f6a722877be93a"],["/opdoc/v2/examples/deepstream.html","11294570f969e1ef6257bce607b851c5"],["/opdoc/v2/examples/elastic-header.html","280451f5c451c381e1a9b2d585955d5f"],["/opdoc/v2/examples/firebase.html","f9d283cb1432855289c10f51f1762b43"],["/opdoc/v2/examples/grid-component.html","4d05a963738891d7f27c3ed135670d1c"],["/opdoc/v2/examples/hackernews.html","7f1c527906f4f1e9349b3090c0b15397"],["/opdoc/v2/examples/index.html","be69884242ccda73576a768aa0bc80db"],["/opdoc/v2/examples/modal.html","f9cf13154f2883383706ebc95bffb3a4"],["/opdoc/v2/examples/select2.html","fdb4b65c2acb41b89a0ccf731824b473"],["/opdoc/v2/examples/svg.html","c924bd4f0768b540e8b635000e205150"],["/opdoc/v2/examples/todomvc.html","4df0b2524e03c8e3f341f66dc2705789"],["/opdoc/v2/examples/tree-view.html","fe7ce9bb38ef97cf7036b136759a92b3"],["/opdoc/v2/guide/class-and-style.html","be19c9cc1932a4e7e5b83893f8d4c9f2"],["/opdoc/v2/guide/comparison.html","98ad18fa38c8a21d554ea21c5046ffe7"],["/opdoc/v2/guide/components-custom-events.html","ce4900eb192c0d1fad78af4f7483ec0a"],["/opdoc/v2/guide/components-edge-cases.html","a57c813c0d46e719d26b957046166d55"],["/opdoc/v2/guide/components-props.html","c9aa4b55baf50fdf9563da2ad2524775"],["/opdoc/v2/guide/components-registration.html","846fee8f73a556acb9bc8e13279800c2"],["/opdoc/v2/guide/components-slots.html","a4f8123202181228c923e7a40ea3543f"],["/opdoc/v2/guide/components.html","84fe8c3ca19c0618e643f75e1e4333c0"],["/opdoc/v2/guide/computed.html","55a3a4db89eeff747e50fb83fe3bea15"],["/opdoc/v2/guide/conditional.html","1946baca76bcee257b00a1a33afa7f45"],["/opdoc/v2/guide/custom-directive.html","281f7afc32c54ef5d6b5da4e26914bfb"],["/opdoc/v2/guide/deployment.html","5ec5c4e7946c994667d68bb35d7af06e"],["/opdoc/v2/guide/events.html","44b5a2f3f91fc01405e4d4f6c4020636"],["/opdoc/v2/guide/filters.html","cd0fbda27ac364991290cacaf9158671"],["/opdoc/v2/guide/forms.html","4917aaff17471700df94fbf99ac8c6d0"],["/opdoc/v2/guide/index.html","ca9955e47b453d06b2c4adefecea5237"],["/opdoc/v2/guide/installation.html","e6e72f14818ca90532483404c9003fed"],["/opdoc/v2/guide/instance.html","c62c52da7a013c070ee3417a610c69e7"],["/opdoc/v2/guide/join.html","b4f20a52264281c238e2614624da80dc"],["/opdoc/v2/guide/list.html","cc224f50653b743cc50072729df61a27"],["/opdoc/v2/guide/migration-vue-router.html","ebfc624c6f369d9e8fb5804a70ad7dfe"],["/opdoc/v2/guide/migration-vuex.html","1e5ba4ec4560da9bbf948dcadc8ec725"],["/opdoc/v2/guide/migration.html","332994ba26e380fee9f1baa6633ea6fd"],["/opdoc/v2/guide/mixins.html","3795b68fedfe43740ad7a1188aa86d10"],["/opdoc/v2/guide/plugins.html","c2c5aed9df8eecbe286890476e968754"],["/opdoc/v2/guide/reactivity.html","34f8ecd4f92aa148254c778911036fad"],["/opdoc/v2/guide/render-function.html","e5165d47fc4313e12bfe5f743af16f90"],["/opdoc/v2/guide/routing.html","f603096638b9e61b6106c3fb95986e4e"],["/opdoc/v2/guide/security.html","ec438b58200bdd74c3136a8a7b7d0706"],["/opdoc/v2/guide/single-file-components.html","33330ff1096d28b42ff16f7f198028c2"],["/opdoc/v2/guide/ssr.html","89dfacf76cc7efbcfa27507c1570c3e9"],["/opdoc/v2/guide/state-management.html","29d542792f6fe2ef38b55468c4573bf4"],["/opdoc/v2/guide/syntax.html","a1d3f7adc33806b9dd705f314aede8e4"],["/opdoc/v2/guide/team.html","b7be4b3e38f2f41d2acb8d8156f1763b"],["/opdoc/v2/guide/transitioning-state.html","693d868949df5b56fed03ce9d3cdce26"],["/opdoc/v2/guide/transitions.html","a84dbd32b2a8d8176e68ea0cd48e0fda"],["/opdoc/v2/guide/typescript.html","61ba75bc85b36d12331ba659c230b22e"],["/opdoc/v2/guide/unit-testing.html","f4d4385905207b556b90e2091f743e2c"],["/opdoc/v2/search/index.html","48946d2ab591c0a96d9a5a9276b427e4"],["/opdoc/v2/style-guide/index.html","7d0eb625d90ad7f49c802897e8f2baed"]];
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




