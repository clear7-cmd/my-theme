(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{297:function(o,r,e){"use strict";e.r(r),e.d(r,"default",(function(){return t}));var a={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-color":"#fff","--box-shadow":"1px 2px 8px 0 rgba(0, 0, 0, 0.3)","--box-shadow-hover":"2px 5px 10px 0 rgba(0, 0, 0, 0.4)","--text-color":"#242424","--text-color-hover":"rgba(109, 193, 247)","--text-color-sub":"#7F7F7F","--btn-color":"rgba(109, 193, 247)","--btn-color-hover":"#ff7242","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#181818","--box-color":"#242527","--box-shadow":"1px 2px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"2px 5px 10px 0 rgba(0, 0, 0, .8)","--text-color":"rgba(255, 255, 255, .8)","--text-color-hover":"#383838","--text-color-sub":"#8B8B8B","--btn-color":"rgba(114, 113, 113,.6)","--btn-color-hover":"rgb(114, 113, 113,.9)","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function l(o){const r=document.querySelector(":root"),e=a[o],l="dark"===o?"light":"dark";for(const o in e)r.style.setProperty(o,e[o]);r.classList.remove(l),localStorage.setItem("mode",o),r.classList.add(o)}function t(o){var r,e;if("auto"!==o)return void l(o);const a=null===(r=window)||void 0===r?void 0:r.matchMedia("(prefers-color-scheme: dark)").matches,t=null===(e=window)||void 0===e?void 0:e.matchMedia("(prefers-color-scheme: light)").matches;if(a&&l("dark"),t&&l("light"),!a&&!t){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");const o=(new Date).getHours();l(o<6||o>=18?"dark":"light")}}}}]);