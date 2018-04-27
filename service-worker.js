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

var precacheConfig = [["2014/03/22/vuejs-010-release/index.html","83cfeb089de6cafbd76ca5424661291e"],["2014/07/29/vue-next/index.html","f28db5a136af4e3ddf8871d2889d93a3"],["2014/11/09/vue-011-release/index.html","b1d3715d02f938de4e84bcb8b22f5948"],["2014/12/08/011-component/index.html","24685d1821e14e6913a0a7918a770a6e"],["2015/06/11/012-release/index.html","25ba06cc85c590ab22e4fa144f34f528"],["2015/10/26/1.0.0-release/index.html","7c88cdc89b184516445ce45ec63b1529"],["2015/10/28/why-no-template-url/index.html","94783825ebfd2e2ae16d42518a81c3b3"],["2015/12/28/vue-cli/index.html","0c5847f555af4361cd566e633bb7945e"],["2016/02/06/common-gotchas/index.html","48326edcdadc66cdc60c58a749fa1ef9"],["2016/03/14/march-update/index.html","93ef7e52f1cd1c52eb7ae1b41f56015d"],["2016/04/27/announcing-2.0/index.html","4f4b5a0cf81ab51bb4ff71dc33091b50"],["about/index.html","7961641e07874d3f01a300d29632596d"],["api/index.html","176a72f4aaa42c3b6a404d370e87fbb8"],["archives/2014/03/index.html","b724d685a471fd29e2fa4d7b616720e8"],["archives/2014/07/index.html","389524b58071794d6a46e5fdf2d3c46a"],["archives/2014/11/index.html","b585bac250c4a2f6135415a30963cb58"],["archives/2014/12/index.html","53954ace7a3836077ea2ffb67a6d4f47"],["archives/2014/index.html","7deff151702eeda7c360ad0ca2a412de"],["archives/2015/06/index.html","e982e94ab43e2bd580401afd8ef13e2a"],["archives/2015/10/index.html","a83466286d707d2002ae14e0d8346c60"],["archives/2015/12/index.html","a9885f944a220b107ed20ddeb42a6bad"],["archives/2015/index.html","68ef4ecef97d2aa50c175bdb0806d497"],["archives/2016/02/index.html","6533c7f837d5fb871b166d23d4693e6d"],["archives/2016/03/index.html","cd36fc43e9e673a0a85196040dc4b2e2"],["archives/2016/04/index.html","2581e505612772326bf191f0b2ccf192"],["archives/2016/index.html","cfbdb1274c0389c3cbdaddb53ed95485"],["archives/index.html","60adcbfcde9a9c9edc48d28f066d7002"],["archives/page/2/index.html","7589a7971ff7d794882d8b38a6e6937f"],["css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["css/index.css","27e96c9e61b6fe10909682bc94fc1c4a"],["css/page.css","2a503182dacd3c8a1271b1057a0e47cf"],["css/search.css","e4e6c1e2a49dfe73bd8f10ca3409c040"],["examples/commits.html","3cd3b2db40187e7f2d236473bae9ce59"],["examples/elastic-header.html","198f4c19911bf30785905adb996ef899"],["examples/firebase.html","266080b80e262a2b93289d466d1337b5"],["examples/grid-component.html","3119ba25bb6b9dcc2f40d3f60e2136df"],["examples/hackernews.html","f793aeb8d340c60945b0a58f3afa25c9"],["examples/index.html","dc91b34e726c12318c4d083a3090c156"],["examples/modal.html","88b6a98ec8a44cd783eaf0d71fcf46a7"],["examples/select2.html","b812ad3b215af513c979c0d9759fe5c9"],["examples/svg.html","0a1876c72d22212d243ed8c2d5b0404e"],["examples/todomvc.html","a048618225f78a66ff322bb1dde98a37"],["examples/tree-view.html","4815e09c4b3af4132da0e95dc1fbc945"],["fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["guide/class-and-style.html","a3174f2083dd58fbd1aa965dcc98133f"],["guide/comparison.html","7c06634379b01b8e7ef0dfc90b9b8517"],["guide/components.html","d98663b0d45a91f0a40541c1efe2bbfc"],["guide/computed.html","3fcf408c7cdfd856ea75b6a5562ba8aa"],["guide/conditional.html","896e19e7955f2616eb31ab4d8c65178c"],["guide/custom-directive.html","697987fdd04783febdbff2aa2932c41d"],["guide/deployment.html","be96515c673712671d042337366ddf63"],["guide/events.html","0ebaec88003f2e1ab59ff868764d961a"],["guide/forms.html","09ead2d35e42cdd09d848b27ec357491"],["guide/index.html","e3171c7c94b236d5caa91894d8fdd581"],["guide/installation.html","8acd1ab4fbaa082958259bf3a22d7b22"],["guide/instance.html","61021765831307e8278d034c23502dd6"],["guide/join.html","f2287c54050c9b576ed05af7baf6af73"],["guide/list.html","772e05d65b4587501785906a4b681efd"],["guide/migration-vue-router.html","e0d8a3e2dc09e2bda939c23c1e967765"],["guide/migration-vuex.html","9b8659c8a4506acd24f2c0e3bee160f3"],["guide/migration.html","af37d4bfb217e88a7f02eb92c446497f"],["guide/mixins.html","270f751a44e1d1e18b9a31406a34fe8b"],["guide/plugins.html","40467c9724e4917ae32582ac543db41b"],["guide/reactivity.html","5b1e83c4a12b5f3e687e89e0a0b1ef05"],["guide/render-function.html","4139dd80783f9eecb92d57dcf23dc54d"],["guide/routing.html","f7f89a93550ee84e925ed84d6912a650"],["guide/single-file-components.html","095eb3d7152439579d7a56227fe273f4"],["guide/ssr.html","9143accd02c56349a3ec40d79eeefb4d"],["guide/state-management.html","81ea6d4aee3ef538b507e4a5a0c3e3a0"],["guide/syntax.html","611a256a910e0d1adfd5b418535e0ac1"],["guide/transitioning-state.html","3f36248a3d9f6f21f10725f15775c5d6"],["guide/transitions.html","4513c62165ee217697830a40e1795365"],["guide/unit-testing.html","0f69c6b7a8d743af6384b8a2208b9a33"],["images/100offer.png","8029274e3fa53cd1f5195d4cf02d5234"],["images/2mhost.png","cf1c6b16ae197cc8fece227593cf3cd8"],["images/actualize.png","2a07999eb1d845af6d9f7fe7b2eb0253"],["images/anymod.png","234cf9604fd55de7ce924f520d6c5610"],["images/bit-wide.png","e7b6072d049ed29615462f7c83cbfeaa"],["images/bit.png","db6a4b731ecc06de8bd36d64112c768b"],["images/bmqb.png","25e28c3c20f8f32618a732fe055d6321"],["images/breakpoint_hit.png","114924925a4ec0f23236012bc3dc8422"],["images/breakpoint_set.png","6439856732303cfeb3806d52dd681191"],["images/chaitin.png","549e43997790dc624c477424acbfe228"],["images/check.png","c634675b753a1a03b587c43d8b535600"],["images/codepilot.png","123c45958229de783198d2d893a4044c"],["images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["images/components.png","b5c08269dfc26ae6d7db3801e9efd296"],["images/conf.png","0d1e4840e924b232e605779b5040c879"],["images/config_add.png","353cd8b2a1bdf9fc4c74a80c5f38090a"],["images/data.png","5de7af21d4c2de951720c006f84b98fc"],["images/datacamp.png","251ad9e67095233b3fcede7b03eaca9c"],["images/devtools-timetravel.gif","fca84f3fb8a8d10274eb2fc7ed9b65f9"],["images/dom-tree.png","f70b86bfbbfe1962dc5d6125105f1122"],["images/down.png","2f948222df409af3121254d5fe0ed377"],["images/famebroker.png","9a879f5f83d3583145c756ba381ca482"],["images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["images/frontend-love.png","b514babc53a0f3ddc854b0b14a54a489"],["images/frontend-meetups.png","d9b76c14d7eaf24c6b030ac3352d1e58"],["images/hackr-io.png","2a0d1f9625ec5b529656fe6028f66c4f"],["images/hn-architecture.png","b42f49a4e265649f870685b171e4b170"],["images/hn.png","99176cdebac521e823be519aef514bb3"],["images/htmlburger.png","c7ce1344d001e7a236a89694ed59d988"],["images/icons.png","ad6ee8c400066e15712cdef4342023da"],["images/icons/android-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["images/icons/android-icon-192x192.png","5d10eaab941eb596ee59ffc53652d035"],["images/icons/android-icon-36x36.png","bb757d234def1a6b53d793dbf4879578"],["images/icons/android-icon-48x48.png","0d33c4fc51e2bb020bf8dd7cd05db875"],["images/icons/android-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["images/icons/android-icon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["images/icons/apple-icon-114x114.png","f4fd30f3a26b932843b8c5cef9f2186e"],["images/icons/apple-icon-120x120.png","b6a574d63d52ef9c89189b67bcac5cbd"],["images/icons/apple-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["images/icons/apple-icon-152x152.png","f53787bf41febf2b044931a305ccaf2a"],["images/icons/apple-icon-180x180.png","9f6b1e3b92b2c5bd5b7d79501bb6e612"],["images/icons/apple-icon-57x57.png","83f622ba0994866abc56ace068b6551c"],["images/icons/apple-icon-60x60.png","643f761bc39f86c70f17cd1fed3b8e08"],["images/icons/apple-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["images/icons/apple-icon-76x76.png","94d9af047b86d99657b5efb88a0d1c7b"],["images/icons/apple-icon-precomposed.png","707758f591323153a4f1cb3a8d9641fa"],["images/icons/apple-icon.png","707758f591323153a4f1cb3a8d9641fa"],["images/icons/favicon-16x16.png","a5a9da66870189b0539223c38c8a7749"],["images/icons/favicon-32x32.png","3d60db0d77303b2414ddd50cf2472bf7"],["images/icons/favicon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["images/icons/ms-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["images/icons/ms-icon-150x150.png","e8cdf492981122a2548bc247c7b4067d"],["images/icons/ms-icon-310x310.png","1721f8303ec2349002b5980a01f27cef"],["images/icons/ms-icon-70x70.png","a110cf0132b00b23a8605ca72a8874ba"],["images/icons8.png","ffcdd01817ecdb32b92bd2f1e4d75e84"],["images/infinitynewtab.png","446b9c9b5b7c251e3cf3b67ac5ed4acb"],["images/itunescn.png","dffb5409b975a5590aab9be99fb53ca8"],["images/jsfiddle.png","9f92527b7bce17471203e83f948292c5"],["images/jsguru.png","31c4e9e56df283700fd81a44d46099c7"],["images/juejin.png","46d2970cf094e50a218e1a8cd242b536"],["images/laravel.png","9a2fba3eca41e26743dc731e3a4469b6"],["images/lifecycle.png","6f2c97f045ba988851b02056c01c8d62"],["images/logged-proxied-data.png","716e3c41aacf453cfaedd61c2795f0ec"],["images/logo.png","cf23526f451784ff137f161b8fe18d5a"],["images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["images/monterail.png","3a441c52ccf03e6d09defa528cd2d632"],["images/mvvm.png","4fbd3c1bc80d47038f3e66cf1478a1a3"],["images/neds.png","8936cd0dd2ea2dedb127a330448d45e8"],["images/onsen-ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["images/props-events.png","8996ef20503fbf264a0bfdeafccca74a"],["images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["images/someline.png","d6908ea0b99280afa9655c564d385833"],["images/state.png","6a05b01942c7d2cff4ea0033ded59ebb"],["images/stdlib.png","2ec485cb1b307821c82a850f440fab3f"],["images/strikingly.png","ef615f471302167fbc882f4a5f783dd1"],["images/tde.png","8b43557cde5163b9c7a11cc541cc9b97"],["images/teamextension.png","29f354472d73a5568552f9475d48d5a4"],["images/tmvuejs2.png","3ee9bd2b594a166ccc14995630c81cbe"],["images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["images/transition.png","5990c1dff7dc7a8fb3b34b4462bd0105"],["images/typescript-type-error.png","1665e7350370c091d397383a7355d3a6"],["images/umoon.png","844f09da5ca82b56a1824b68591cff16"],["images/upyun-large.png","cd66170a5022b5c9444119e3fa5cb83a"],["images/upyun-main-2.jpg","f388a2ba0e0b004e15a7684485fff486"],["images/upyun-main-3.jpg","e618981c7f191cd1fd84905e03538f47"],["images/upyun-main.jpg","1c36d062540e5d97a2ca993776fb7016"],["images/upyun-small.png","7a42625327e1495cec13cbe25c7a200d"],["images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["images/vue-component-with-preprocessors.png","a5cb959052c9cda793e23a6e3a6a122c"],["images/vue-component.png","6a7040cfd4330a536d980c69e2e8dd18"],["images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["images/vuejobs.svg","c31e68ce1f2663afbe9655c368c6dd35"],["images/vuejsadmin.png","e517dc0c38a982cfca2b123ce33dc261"],["images/vueschool.png","cc8c47d63a2c5dc2e073357372e12048"],["images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["images/xfive.png","2fd3304fe6a1b44d2bfd19876e454d0c"],["index.html","97f92fa123e967c3abfa971fdfee712e"],["js/common.js","e601a3f62eed4e057e7e6a3f4d5c7a1f"],["js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["js/smooth-scroll.min.js","53a7fcc785e987d5ed08302f36de6653"],["js/vue.js","cbe2b9b2fb6955decf033515d079e44b"],["js/vue.min.js","5283b86cbf48a538ee3cbebac633ccd4"],["js/vuefe-min.fe7c4b3c46a9ec32c769.js","679ef4b54f690beffb8558fa255a3602"],["js/vuefe.js","22207a432bbe9b1fbf998e24191cc27b"],["menu/index.html","650340880cff90984824023ee505cff7"],["page/2/index.html","ef4ab696da017ef202928244aafadd79"],["perf/index.html","44afadd4f1befd78185f01d62787b6e0"],["support-vuejs/index.html","dfd824c1acae94b64e33b9e54209170b"],["v2/api/index.html","debd8edfacf12e51b78a8cd2666e2900"],["v2/cookbook/adding-instance-properties.html","c133b8099980d2200c142b83442239ca"],["v2/cookbook/creating-custom-scroll-directives.html","e36a7f894c086bb5df667c0abb9b4b95"],["v2/cookbook/debugging-in-vscode.html","16c13fb431793f5c58a2592e91782067"],["v2/cookbook/editable-svg-icons.html","459baa30b8ad95e43f550ac4c70c81bd"],["v2/cookbook/form-validation.html","6f9618987a7a5cbfa8a36b146efd3ac0"],["v2/cookbook/index.html","1281bb6630ab75374ec618e204c1da59"],["v2/cookbook/serverless-blog.html","390e635d02ad40084b98ffc8a7d90a2d"],["v2/cookbook/unit-testing-vue-components.html","5de5b4a26b8a66bb1e691ef598624515"],["v2/cookbook/using-axios-to-consume-apis.html","34b781ad525b3706d562d74bed40ba9b"],["v2/examples/commits.html","c37c68c6545657ea566fa9ab9648e223"],["v2/examples/deepstream.html","2b055af7384a29772f6db27eb0620a1c"],["v2/examples/elastic-header.html","a990778fdd6a4e75dd6bd5ae1d9582ba"],["v2/examples/firebase.html","255ab034ba049d49fc9c9278b765b968"],["v2/examples/grid-component.html","e75152a23e7f29ec5e2483dac805f8a6"],["v2/examples/hackernews.html","ad91d34c9a483baf42ad92105c1ce967"],["v2/examples/index.html","76fd5f2bcf760de9e111e7f7d35bbcb4"],["v2/examples/modal.html","9366d4caf699620db34996982e99acfd"],["v2/examples/select2.html","3cbfa6306a5fed323fec8dc6404565c4"],["v2/examples/svg.html","f4dadb623e0c80549f7220823de8dd33"],["v2/examples/todomvc.html","899787a067d3f4552c77532412bc87c2"],["v2/examples/tree-view.html","dc2a982c628f9b182c46717dd33cf6e2"],["v2/guide/class-and-style.html","948703bd9cf8bd75616488fc71058827"],["v2/guide/comparison.html","1a244aea6e72a7649aaaac39483cc0cc"],["v2/guide/components-custom-events.html","6e71be5e52a9600fc6ac911c9f2c7171"],["v2/guide/components-dynamic-async.html","a243e638df96dc9de9bc381c3c4ab574"],["v2/guide/components-edge-cases.html","2e1e65a37708bc713785ee6d5c9d9d66"],["v2/guide/components-props.html","ef7beb673cd62ac3bae44d3a64d07850"],["v2/guide/components-registration.html","0db8e1003c509c99ee386c009ea647fe"],["v2/guide/components-slots.html","c82cc8705386fc846a3e84fab445a457"],["v2/guide/components.html","2329060e35de360a12723a815ad4ba59"],["v2/guide/computed.html","c5432da9e937edf1af543a1d7bd6c9a9"],["v2/guide/conditional.html","f7d9a3168f0de67627860b0636f7be27"],["v2/guide/custom-directive.html","58cb97c16bf20b3c5a0ad9e3a3229aee"],["v2/guide/deployment.html","9bdae513605d934a6365dbeab77dbfc6"],["v2/guide/events.html","914bef52bfa16b3bfe17b0f36d948122"],["v2/guide/filters.html","37f33bcdcd97e4837aa85f580f54becc"],["v2/guide/forms.html","1dbcc9e31f141494339d07c4a56c8d8c"],["v2/guide/index.html","486fc054c9a8635e41f117554f03dc45"],["v2/guide/installation.html","e9117620154ca9ee9b5c73c293c4c142"],["v2/guide/instance.html","b6ec892a011c31df4bc9826204a4c50a"],["v2/guide/join.html","1b675045ae90855633c7f020650ce955"],["v2/guide/list.html","d5590e2caa30215741c1cf152bde3441"],["v2/guide/migration-vue-router.html","58527a09e698e932bb89f1f3b185b691"],["v2/guide/migration-vuex.html","f2b9da96d419eb1430844fd6f01292e4"],["v2/guide/migration.html","65b40dcf3d35313c5c1e4e8fc377298f"],["v2/guide/mixins.html","425c30ca925570f88731e81b4c9d6def"],["v2/guide/plugins.html","87969e711a30f664714d85ef52c3623e"],["v2/guide/reactivity.html","7c66265800d22398319c5a963f49b081"],["v2/guide/render-function.html","9f074464059475c87e522e79e4b0ebc2"],["v2/guide/routing.html","1bc322d8ce6c8a4111c47e2e77a181dc"],["v2/guide/single-file-components.html","925fe0cdb055e30d5a26d3f83a53a4bd"],["v2/guide/ssr.html","403ee081451ad3822971dd977ad519a6"],["v2/guide/state-management.html","4d52fb94e4b1cd56cd1429260aae62b1"],["v2/guide/syntax.html","77a182c3b4170be2507a8c94195587dd"],["v2/guide/team.html","c1abfb4b304dc77d81ea29a6a92da95b"],["v2/guide/transitioning-state.html","1f7d53e3b94738e737c80fce67659d77"],["v2/guide/transitions.html","b5b996265aa0f576eb12dd9bf47ab641"],["v2/guide/typescript.html","7d226fad07df7e05de5cc40fe901d3b2"],["v2/guide/unit-testing.html","f3f4c79d5114927eb9ff1b4dadf582b9"],["v2/style-guide/index.html","edd4d66dbf140cfbaf36d16e56a2fb53"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
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

var createCacheKey = function (originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function (originalUrl,
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







