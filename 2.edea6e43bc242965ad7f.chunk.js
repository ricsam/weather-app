webpackJsonp([2],{"./app/containers/App/actions.js":function(e,n,t){"use strict";function r(){return{type:c.c}}function o(){return{type:c.b}}function u(e){return{type:c.d,tiles:e}}function a(e){return{type:c.e,tile:e}}function i(e){return{type:c.f,tile:e}}var c=t("./app/containers/App/constants.js");n.e=r,n.c=o,n.a=u,n.b=a,n.d=i},"./app/containers/App/sagas.js":function(e,n,t){"use strict";function r(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(a.select)(t.i(s.b)());case 2:e=n.sent;try{window.localStorage.setItem("tiles",JSON.stringify(e))}catch(e){console.log("Error when saving tiles: localStorage not enabled")}case 4:case"end":return n.stop()}},l[0],this)}function o(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e=!1,console.log(213);try{e=window.localStorage.getItem("tiles"),e=!!e&&JSON.parse(e)}catch(e){console.log("Error when downloading tiles: localStorage not enabled")}return n.next=5,t.i(a.put)(t.i(f.a)(e));case 5:case"end":return n.stop()}},l[1],this)}function u(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(a.takeEvery)(c.b,r);case 2:return n.next=4,t.i(a.takeLatest)(c.c,o);case 4:return e=n.sent,n.next=7,t.i(a.take)(i.LOCATION_CHANGE);case 7:return n.next=9,t.i(a.cancel)(e);case 9:case"end":return n.stop()}},l[2],this)}Object.defineProperty(n,"__esModule",{value:!0});var a=t("./node_modules/redux-saga/effects.js"),i=(t.n(a),t("./node_modules/react-router-redux/lib/index.js")),c=(t.n(i),t("./app/containers/App/constants.js")),f=t("./app/containers/App/actions.js"),s=t("./app/containers/App/selectors.js");n.saveTiles=r,n.downloadTiles=o,n.appSaga=u;var l=[r,o,u].map(regeneratorRuntime.mark);n.default=[u]},"./node_modules/redux-saga/effects.js":function(e,n,t){e.exports=t("./node_modules/redux-saga/lib/effects.js")},"./node_modules/redux-saga/lib/effects.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("./node_modules/redux-saga/lib/internal/io.js");Object.defineProperty(n,"take",{enumerable:!0,get:function(){return r.take}}),Object.defineProperty(n,"takem",{enumerable:!0,get:function(){return r.takem}}),Object.defineProperty(n,"put",{enumerable:!0,get:function(){return r.put}}),Object.defineProperty(n,"race",{enumerable:!0,get:function(){return r.race}}),Object.defineProperty(n,"call",{enumerable:!0,get:function(){return r.call}}),Object.defineProperty(n,"apply",{enumerable:!0,get:function(){return r.apply}}),Object.defineProperty(n,"cps",{enumerable:!0,get:function(){return r.cps}}),Object.defineProperty(n,"fork",{enumerable:!0,get:function(){return r.fork}}),Object.defineProperty(n,"spawn",{enumerable:!0,get:function(){return r.spawn}}),Object.defineProperty(n,"join",{enumerable:!0,get:function(){return r.join}}),Object.defineProperty(n,"cancel",{enumerable:!0,get:function(){return r.cancel}}),Object.defineProperty(n,"select",{enumerable:!0,get:function(){return r.select}}),Object.defineProperty(n,"actionChannel",{enumerable:!0,get:function(){return r.actionChannel}}),Object.defineProperty(n,"cancelled",{enumerable:!0,get:function(){return r.cancelled}}),Object.defineProperty(n,"flush",{enumerable:!0,get:function(){return r.flush}}),Object.defineProperty(n,"takeEvery",{enumerable:!0,get:function(){return r.takeEvery}}),Object.defineProperty(n,"takeLatest",{enumerable:!0,get:function(){return r.takeLatest}}),Object.defineProperty(n,"throttle",{enumerable:!0,get:function(){return r.throttle}})},"./node_modules/redux-saga/lib/internal/buffers.js":function(e,n,t){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments[1],t=new Array(e),r=0,o=0,i=0,s=function(n){t[o]=n,o=(o+1)%e,r++},l=function(){if(0!=r){var n=t[i];return t[i]=null,r--,i=(i+1)%e,n}},d=function(){for(var e=[];r;)e.push(l());return e};return{isEmpty:function(){return 0==r},put:function(l){if(r<e)s(l);else{var p=void 0;switch(n){case a:throw new Error(u);case c:t[o]=l,o=(o+1)%e,i=o;break;case f:p=2*e,t=d(),r=t.length,o=t.length,i=0,t.length=p,e=p,s(l)}}},take:l,flush:d}}Object.defineProperty(n,"__esModule",{value:!0}),n.buffers=n.BUFFER_OVERFLOW=void 0;var o=t("./node_modules/redux-saga/lib/internal/utils.js"),u=n.BUFFER_OVERFLOW="Channel's Buffer overflow!",a=1,i=2,c=3,f=4,s={isEmpty:o.kTrue,put:o.noop,take:o.noop};n.buffers={none:function(){return s},fixed:function(e){return r(e,a)},dropping:function(e){return r(e,i)},sliding:function(e){return r(e,c)},expanding:function(e){return r(e,f)}}},"./node_modules/redux-saga/lib/internal/channel.js":function(e,n,t){"use strict";function r(){function e(e){return t.push(e),function(){return(0,c.remove)(t,e)}}function n(e){for(var n=t.slice(),r=0,o=n.length;r<o;r++)n[r](e)}var t=[];return{subscribe:e,emit:n}}function o(){function e(){if(a&&i.length)throw(0,c.internalErr)("Cannot have a closed channel with pending takers");if(i.length&&!u.isEmpty())throw(0,c.internalErr)("Cannot have pending takers with non empty buffer")}function n(n){if(e(),(0,c.check)(n,c.is.notUndef,v),!a){if(!i.length)return u.put(n);for(var t=0;t<i.length;t++){var r=i[t];if(!r[c.MATCH]||r[c.MATCH](n))return i.splice(t,1),r(n)}}}function t(n){e(),(0,c.check)(n,c.is.func,"channel.take's callback must be a function"),a&&u.isEmpty()?n(d):u.isEmpty()?(i.push(n),n.cancel=function(){return(0,c.remove)(i,n)}):n(u.take())}function r(n){return e(),(0,c.check)(n,c.is.func,"channel.flush' callback must be a function"),a&&u.isEmpty()?void n(d):void n(u.flush())}function o(){if(e(),!a&&(a=!0,i.length)){var n=i;i=[];for(var t=0,r=n.length;t<r;t++)n[t](d)}}var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.buffers.fixed(),a=!1,i=[];return(0,c.check)(u,c.is.buffer,h),{take:t,put:n,flush:r,close:o,get __takers__(){return i},get __closed__(){return a}}}function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.buffers.none(),t=arguments[2];arguments.length>2&&(0,c.check)(t,c.is.func,"Invalid match function passed to eventChannel");var r=o(n),u=e(function(e){return p(e)?void r.close():void(t&&!t(e)||r.put(e))});if(!c.is.func(u))throw new Error("in eventChannel: subscribe should return a function to unsubscribe");return{take:r.take,flush:r.flush,close:function(){r.__closed__||(r.close(),u())}}}function a(e){var n=u(function(n){return e(function(e){return e[c.SAGA_ACTION]?void n(e):void(0,s.asap)(function(){return n(e)})})});return i({},n,{take:function(e,t){arguments.length>1&&((0,c.check)(t,c.is.func,"channel.take's matcher argument must be a function"),e[c.MATCH]=t),n.take(e)}})}Object.defineProperty(n,"__esModule",{value:!0}),n.UNDEFINED_INPUT_ERROR=n.INVALID_BUFFER=n.isEnd=n.END=void 0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};n.emitter=r,n.channel=o,n.eventChannel=u,n.stdChannel=a;var c=t("./node_modules/redux-saga/lib/internal/utils.js"),f=t("./node_modules/redux-saga/lib/internal/buffers.js"),s=t("./node_modules/redux-saga/lib/internal/scheduler.js"),l="@@redux-saga/CHANNEL_END",d=n.END={type:l},p=n.isEnd=function(e){return e&&e.type===l},h=n.INVALID_BUFFER="invalid buffer passed to channel factory function",v=n.UNDEFINED_INPUT_ERROR="Saga was provided with an undefined action"},"./node_modules/redux-saga/lib/internal/io.js":function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*";if(arguments.length&&(0,w.check)(arguments[0],w.is.notUndef,"take(patternOrChannel): patternOrChannel is undefined"),w.is.pattern(e))return D(_,{pattern:e});if(w.is.channel(e))return D(_,{channel:e});throw new Error("take(patternOrChannel): argument "+String(e)+" is not valid channel or a valid pattern")}function u(e,n){return arguments.length>1?((0,w.check)(e,w.is.notUndef,"put(channel, action): argument channel is undefined"),(0,w.check)(e,w.is.channel,"put(channel, action): argument "+e+" is not a valid channel"),(0,w.check)(n,w.is.notUndef,"put(channel, action): argument action is undefined")):((0,w.check)(e,w.is.notUndef,"put(action): argument action is undefined"),n=e,e=null),D(x,{channel:e,action:n})}function a(e){return D(C,e)}function i(e,n,t){(0,w.check)(n,w.is.notUndef,e+": argument fn is undefined");var r=null;if(w.is.array(n)){var o=n,u=E(o,2);r=u[0],n=u[1]}else if(n.fn){var a=n;r=a.context,n=a.fn}return(0,w.check)(n,w.is.func,e+": argument "+n+" is not a function"),{context:r,fn:n,args:t}}function c(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return D(P,i("call",e,t))}function f(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return D(P,i("apply",{context:e,fn:n},t))}function s(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return D(T,i("cps",e,t))}function l(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return D(S,i("fork",e,t))}function d(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=l.apply(void 0,[e].concat(t));return o[S].detached=!0,o}function p(e){if((0,w.check)(e,w.is.notUndef,"join(task): argument task is undefined"),!M(e))throw new Error("join(task): argument "+e+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return D(N,e)}function h(e){if((0,w.check)(e,w.is.notUndef,"cancel(task): argument task is undefined"),!M(e))throw new Error("cancel(task): argument "+e+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return D(L,e)}function v(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return 0===arguments.length?e=w.ident:((0,w.check)(e,w.is.notUndef,"select(selector,[...]): argument selector is undefined"),(0,w.check)(e,w.is.func,"select(selector,[...]): argument "+e+" is not a function")),D(I,{selector:e,args:t})}function g(e,n){return(0,w.check)(e,w.is.notUndef,"actionChannel(pattern,...): argument pattern is undefined"),arguments.length>1&&((0,w.check)(n,w.is.notUndef,"actionChannel(pattern, buffer): argument buffer is undefined"),(0,w.check)(n,w.is.notUndef,"actionChannel(pattern, buffer): argument "+n+" is not a valid buffer")),D(R,{pattern:e,buffer:n})}function y(){return D(U,{})}function b(e){return(0,w.check)(e,w.is.channel,"flush(channel): argument "+e+" is not valid channel"),D(q,e)}function m(e,n){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];return l.apply(void 0,[O.takeEveryHelper,e,n].concat(r))}function k(e,n){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];return l.apply(void 0,[O.takeLatestHelper,e,n].concat(r))}function j(e,n,t){for(var r=arguments.length,o=Array(r>3?r-3:0),u=3;u<r;u++)o[u-3]=arguments[u];return l.apply(void 0,[O.throttleHelper,e,n,t].concat(o))}Object.defineProperty(n,"__esModule",{value:!0}),n.asEffect=n.takem=void 0;var E=function(){function e(e,n){var t=[],r=!0,o=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,u=e}finally{try{!r&&i.return&&i.return()}finally{if(o)throw u}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n.take=o,n.put=u,n.race=a,n.call=c,n.apply=f,n.cps=s,n.fork=l,n.spawn=d,n.join=p,n.cancel=h,n.select=v,n.actionChannel=g,n.cancelled=y,n.flush=b,n.takeEvery=m,n.takeLatest=k,n.throttle=j;var w=t("./node_modules/redux-saga/lib/internal/utils.js"),O=t("./node_modules/redux-saga/lib/internal/sagaHelpers.js"),A=(0,w.sym)("IO"),_="TAKE",x="PUT",C="RACE",P="CALL",T="CPS",S="FORK",N="JOIN",L="CANCEL",I="SELECT",R="ACTION_CHANNEL",U="CANCELLED",q="FLUSH",H=function(e,n){return e+" has been deprecated in favor of "+n+", please update your code"},D=function(e,n){var t;return t={},r(t,A,!0),r(t,e,n),t};o.maybe=function(){var e=o.apply(void 0,arguments);return e[_].maybe=!0,e};n.takem=(0,w.deprecate)(o.maybe,H("takem","take.maybe"));u.resolve=function(){var e=u.apply(void 0,arguments);return e[x].resolve=!0,e},u.sync=(0,w.deprecate)(u.resolve,H("put.sync","put.resolve"));var M=function(e){return e[w.TASK]},F=function(e){return function(n){return n&&n[A]&&n[e]}};n.asEffect={take:F(_),put:F(x),race:F(C),call:F(P),cps:F(T),fork:F(S),join:F(N),cancel:F(L),select:F(I),actionChannel:F(R),cancelled:F(U),flush:F(q)}},"./node_modules/redux-saga/lib/internal/sagaHelpers.js":function(e,n,t){"use strict";function r(e,n){function t(n,t){if(u===h)return p;if(t)throw u=h,t;o&&o(n);var r=e[u](),a=c(r,3),i=a[0],f=a[1],s=a[2];return u=i,o=s,u===h?p:f}var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"iterator",o=void 0,u=n;return(0,s.makeIterator)(t,function(e){return t(null,e)},r,!0)}function o(e){return s.is.channel(e)?"channel":Array.isArray(e)?String(e.map(function(e){return String(e)})):String(e)}function u(e,n){for(var t=arguments.length,u=Array(t>2?t-2:0),a=2;a<t;a++)u[a-2]=arguments[a];var i={done:!1,value:(0,l.take)(e)},c=function(e){return{done:!1,value:l.fork.apply(void 0,[n].concat(u,[e]))}},s=void 0,d=function(e){return s=e};return r({q1:function(){return["q2",i,d]},q2:function(){return s===f.END?[h]:["q1",c(s)]}},"q1","takeEvery("+o(e)+", "+n.name+")")}function a(e,n){for(var t=arguments.length,u=Array(t>2?t-2:0),a=2;a<t;a++)u[a-2]=arguments[a];var i={done:!1,value:(0,l.take)(e)},c=function(e){return{done:!1,value:l.fork.apply(void 0,[n].concat(u,[e]))}},s=function(e){return{done:!1,value:(0,l.cancel)(e)}},d=void 0,p=void 0,v=function(e){return d=e},g=function(e){return p=e};return r({q1:function(){return["q2",i,g]},q2:function(){return p===f.END?[h]:d?["q3",s(d)]:["q1",c(p),v]},q3:function(){return["q1",c(p),v]}},"q1","takeLatest("+o(e)+", "+n.name+")")}function i(e,n,t){for(var u=arguments.length,a=Array(u>3?u-3:0),i=3;i<u;i++)a[i-3]=arguments[i];var c=void 0,p=void 0,v={done:!1,value:(0,l.actionChannel)(n,d.buffers.sliding(1))},g=function(){return{done:!1,value:(0,l.take)(p,n)}},y=function(e){return{done:!1,value:l.fork.apply(void 0,[t].concat(a,[e]))}},b={done:!1,value:(0,l.call)(s.delay,e)},m=function(e){return c=e},k=function(e){return p=e};return r({q1:function(){return["q2",v,k]},q2:function(){return["q3",g(),m]},q3:function(){return c===f.END?[h]:["q4",y(c)]},q4:function(){return["q2",b]}},"q1","throttle("+o(n)+", "+t.name+")")}Object.defineProperty(n,"__esModule",{value:!0}),n.throttle=n.takeLatest=n.takeEvery=void 0;var c=function(){function e(e,n){var t=[],r=!0,o=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,u=e}finally{try{!r&&i.return&&i.return()}finally{if(o)throw u}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n.takeEveryHelper=u,n.takeLatestHelper=a,n.throttleHelper=i;var f=t("./node_modules/redux-saga/lib/internal/channel.js"),s=t("./node_modules/redux-saga/lib/internal/utils.js"),l=t("./node_modules/redux-saga/lib/internal/io.js"),d=t("./node_modules/redux-saga/lib/internal/buffers.js"),p={done:!0,value:void 0},h={},v=function(e){return"import "+e+" from 'redux-saga' has been deprecated in favor of import "+e+" from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield "+e+" will return task descriptor to your saga and execute next lines of code."};n.takeEvery=(0,s.deprecate)(u,v("takeEvery")),n.takeLatest=(0,s.deprecate)(a,v("takeLatest")),n.throttle=(0,s.deprecate)(i,v("throttle"))},"./node_modules/redux-saga/lib/internal/scheduler.js":function(e,n,t){"use strict";function r(e){try{u(),e()}finally{a()}}function o(e){c?i.push(e):r(e)}function u(){c++}function a(){c--,!c&&i.length&&r(i.shift())}Object.defineProperty(n,"__esModule",{value:!0}),n.asap=o,n.suspend=u,n.flush=a;var i=[],c=0},"./node_modules/redux-saga/lib/internal/utils.js":function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n,t){if(!n(e))throw d("error","uncaught at check",t),new Error(t)}function u(e,n){var t=e.indexOf(n);t>=0&&e.splice(t,1)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=v({},e),t=new Promise(function(e,t){n.resolve=e,n.reject=t});return n.promise=t,n}function i(e){for(var n=[],t=0;t<e;t++)n.push(a());return n}function c(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=void 0,r=new Promise(function(r){t=setTimeout(function(){return r(n)},e)});return r[k]=function(){return clearTimeout(t)},r}function f(){var e,n=!0,t=void 0,o=void 0;return e={},r(e,b,!0),r(e,"isRunning",function(){return n}),r(e,"result",function(){return t}),r(e,"error",function(){return o}),r(e,"setRunning",function(e){return n=e}),r(e,"setResult",function(e){return t=e}),r(e,"setError",function(e){return o=e}),e}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){return++e}}function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments[3],o={name:t,next:e,throw:n,return:_};return r&&(o[m]=!0),"undefined"!=typeof Symbol&&(o[Symbol.iterator]=function(){return o}),o}function d(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";"undefined"==typeof window?console.log("redux-saga "+e+": "+n+"\n"+(t&&t.stack||t)):console[e](n,t)}function p(e,n){return function(){return w&&d("warn",n),e.apply(void 0,arguments)}}function h(e){return function(n){var t=Object.defineProperty(n,j,{value:!0});return e(t)}}Object.defineProperty(n,"__esModule",{value:!0});var v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.check=o,n.remove=u,n.deferred=a,n.arrayOfDeffered=i,n.delay=c,n.createMockTask=f,n.autoInc=s,n.makeIterator=l,n.log=d,n.deprecate=p,n.wrapSagaDispatch=h;var y=n.sym=function(e){return"@@redux-saga/"+e},b=n.TASK=y("TASK"),m=n.HELPER=y("HELPER"),k=(n.MATCH=y("MATCH"),n.CANCEL=y("cancelPromise")),j=n.SAGA_ACTION=y("SAGA_ACTION"),E=n.konst=function(e){return function(){return e}},w=(n.kTrue=E(!0),n.kFalse=E(!1),n.noop=function(){},n.ident=function(e){return e},n.isDev=!1),O=n.is={undef:function(e){return null===e||void 0===e},notUndef:function(e){return null!==e&&void 0!==e},func:function(e){return"function"==typeof e},number:function(e){return"number"==typeof e},array:Array.isArray,promise:function(e){return e&&O.func(e.then)},iterator:function(e){return e&&O.func(e.next)&&O.func(e.throw)},task:function(e){return e&&e[b]},observable:function(e){return e&&O.func(e.subscribe)},buffer:function(e){return e&&O.func(e.isEmpty)&&O.func(e.take)&&O.func(e.put)},pattern:function(e){return e&&("string"==typeof e||"symbol"===("undefined"==typeof e?"undefined":g(e))||O.func(e)||O.array(e))},channel:function(e){return e&&O.func(e.take)&&O.func(e.close)},helper:function(e){return e&&e[m]}},A=(n.uid=s(),function(e){throw e}),_=function(e){return{value:e,done:!0}};n.internalErr=function(e){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+e+"\n")}}});