webpackJsonp([6],{"./app/containers/Search/constants.js":function(e,t,a){"use strict";a.d(t,"g",function(){return r}),a.d(t,"a",function(){return o}),a.d(t,"c",function(){return n}),a.d(t,"d",function(){return c}),a.d(t,"b",function(){return s}),a.d(t,"e",function(){return u}),a.d(t,"f",function(){return i}),a.d(t,"h",function(){return _}),a.d(t,"i",function(){return p}),a.d(t,"j",function(){return h}),a.d(t,"k",function(){return l});var r="weather-app/Search/DEFAULT_ACTION",o="weather-app/Search/GET_AUTOCOMPLETE",n="weather-app/Search/GET_AUTOCOMPLETE_ERROR",c="weather-app/Search/GET_AUTOCOMPLETE_SUCCESS",s="weather-app/Search/GET_APIXU_SEARCH",u="weather-app/Search/GET_APIXU_SEARCH_ERROR",i="weather-app/Search/GET_APIXU_SEARCH_SUCCESS",_="weather-app/Search/SET_AUTOCOMPLETION_VALUE",p="weather-app/Search/SET_AUTOCOMPLETE_CARRET_POSITION",h="weather-app/Search/SET_WEATHER_STATION_LOCATION",l="weather-app/Search/SET_WEATHER_STATION"},"./app/containers/Search/reducer.js":function(e,t,a){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case n.g:return e;case n.a:return e.set("autocomplete_loading",!0).set("autocomplete_error",!1);case n.c:return e.set("autocomplete_loading",!1).set("autocomplete_error",t.error);case n.d:return e.set("autocomplete_loading",!1).set("autocomplete_error",!1).set("autocomplete",t.autocomplete);case n.b:return e.set("apixusearch_loading",!0).set("apixusearch_error",!1);case n.e:return e.set("apixusearch_loading",!1).set("apixusearch_error",t.error);case n.f:return e.set("apixusearch_loading",!1).set("apixusearch_error",!1).set("apixusearch",t.results);case n.h:return e.set("weather_station_location",!1).set("weather_station",!1).set("autocomplete_value",t.value);case n.i:return e.set("weather_station_location",!1).set("weather_station",!1).set("autocomplete_carret_position",t.position);case n.j:return e.set("weather_station_location",t.value).set("weather_station",!1);case n.k:return e.set("weather_station",t.value);default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a("./node_modules/immutable/dist/immutable.js"),n=(a.n(o),a("./app/containers/Search/constants.js")),c=a.i(o.fromJS)({autocomplete:!1,autocomplete_loading:!1,autocomplete_error:!1,autocomplete_value:"",autocomplete_carret_position:0,weather_station_location:!1,apixusearch:!1,apixusearch_loading:!1,apixusearch_error:!1,weather_station:!1});t.default=r}});