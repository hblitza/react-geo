webpackJsonp([2],{215:function(e,o){e.exports="/react-geo/examples/resources/c843898d49a58298023debd5dacee1a7.png"},26:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=t(0),r=t(27),a=function(e){var o,t=e||{};o=void 0!==t.attributions?t.attributions:[a.ATTRIBUTION];var i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",n=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.a.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:n,wrapX:t.wrapX})};i.a.inherits(a,r.a),a.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',o.default=a},27:function(e,o,t){"use strict";var i=t(0),r=t(42),a=t(36),n=function(e){var o=e||{},t=void 0!==o.projection?o.projection:"EPSG:3857",i=void 0!==o.tileGrid?o.tileGrid:a.a.createXYZ({extent:a.a.extentFromProjection(t),maxZoom:o.maxZoom,minZoom:o.minZoom,tileSize:o.tileSize});r.a.call(this,{attributions:o.attributions,cacheSize:o.cacheSize,crossOrigin:o.crossOrigin,logo:o.logo,opaque:o.opaque,projection:t,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:o.tileLoadFunction,tilePixelRatio:o.tilePixelRatio,tileUrlFunction:o.tileUrlFunction,url:o.url,urls:o.urls,wrapX:void 0===o.wrapX||o.wrapX,transition:o.transition})};i.a.inherits(n,r.a),o.a=n},929:function(e,o,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=t(1),a=i(r),n=t(9),c=t(26),l=i(c),u=t(34),s=i(u),d=t(40),p=i(d),m=t(28),h=i(m),f=t(215),g=i(f),v=t(23),w=new h.default({view:new p.default({center:[801045,6577113],zoom:9}),layers:[new s.default({source:new l.default})]});(0,n.render)(a.default.createElement("div",{id:"map",style:{position:"relative",height:"200px"}},a.default.createElement(v.FloatingMapLogo,{imageSrc:g.default})),document.getElementById("exampleContainer"),function(){w.setTarget("map")})}},[929]);