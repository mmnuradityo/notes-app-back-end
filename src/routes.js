const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler
} = require('./handler');

const path = '/notes';

class RouteMethod {
  static GET = 'GET';
  static POST = 'POST';
  static PUT = 'PUT';
  static DELETE = 'DELETE';
}

const routes = [
  {
    method: RouteMethod.POST,
    path: path,
    handler: addNoteHandler
  },
  {
    method: RouteMethod.GET,
    path: path,
    handler: getAllNotesHandler
  },
  {
    method: RouteMethod.GET,
    path: `${path}/{id}`,
    handler: getNoteByIdHandler
  },
  {
    method: RouteMethod.PUT,
    path: `${path}/{id}`,
    handler: editNoteByIdHandler
  },
  {
    method: RouteMethod.DELETE,
    path: `${path}/{id}`,
    handler: deleteNoteByIdHandler
  }
];

module.exports = routes;