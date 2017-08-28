// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),

          import('containers/Search/reducer'),
          import('containers/Search/sagas'),

          import('containers/Tiles/reducer'),

          import('containers/Tile/reducer'),
          import('containers/Tile/sagas'),

          /* the app reducer is included by default in reducers.js */
          import('containers/App/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component, searchReducer, searchSagas, tilesReducer, tileReducer, tileSagas, appSagas]) => {
          injectReducer('search', searchReducer.default);
          injectReducer('tile', tileReducer.default);

          injectReducer('tiles', tilesReducer.default);

          injectSagas(searchSagas.default);
          injectSagas(tileSagas.default);
          injectSagas(appSagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
