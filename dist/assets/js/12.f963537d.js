(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{287:function(o,r,a){"use strict";a.r(r),a.d(r,"default",(function(){return c}));var e={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, 0.3)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.4)","--text-color":"#242424","--text-color-sub":"#7F7F7F","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#181818","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"0 4px 16px 0 rgba(0, 0, 0, .8)","--text-color":"rgba(255, 255, 255, .8)","--text-color-sub":"#8B8B8B","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function l(o){const r=document.querySelector(":root"),a=e[o],l="dark"===o?"light":"dark";for(const o in a)r.style.setProperty(o,a[o]);r.classList.remove(l),r.classList.add(o)}function c(o){var r,a;if("auto"!==o)return void l(o);const e=null===(r=window)||void 0===r?void 0:r.matchMedia("(prefers-color-scheme: dark)").matches,c=null===(a=window)||void 0===a?void 0:a.matchMedia("(prefers-color-scheme: light)").matches;if(e&&l("dark"),c&&l("light"),!e&&!c){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");const o=(new Date).getHours();l(o<6||o>=18?"dark":"light")}}}}]);