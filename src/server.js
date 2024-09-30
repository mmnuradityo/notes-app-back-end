const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const port = 8000;
const developmentHost = 'localhost';
const productionpHost = '0.0.0.0';
//const externalOrigin = 'http://notesapp-v1.dicodingacademy.com';

// eslint-disable-next-line no-undef
const getHost = () => process.env.NODE_ENV !== 'production' ? developmentHost : productionpHost;

const init = async () => {
  const server = Hapi.server({
    port: port,
    host: getHost(),
    routes: {
      cors: {

        /**
         * @variable externalOrigin is external address from the webApp to consume datas of the serverApp
         * can change with ('*') to allow all origin to access the serverApp and consume the datas
         * example: origin: ['*'];
         */
        // origin: [externalOrigin]
        origin: ['*'],
      }
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();