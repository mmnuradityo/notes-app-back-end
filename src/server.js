const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const port = 8000;
const host = 'localhost';
const externalOrigin = 'http://notesapp-v1.dicodingacademy.com';

const init = async () => {
  const server = Hapi.server({
    port: port, host: host,
    routes: {
      cors: {

        /**
         * @variable externalOrigin is external address from the webApp to consume datas of the serverApp
         * can change with ('*') to allow all origin to access the serverApp and consume the datas
         * example: rorigin: ['*'];
         */
        origin: [externalOrigin]
      }
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();