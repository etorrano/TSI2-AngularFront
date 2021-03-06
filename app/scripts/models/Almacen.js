/**
 * Created by alejandrobarreiro on 8/10/15.
 */
'use strict';

angular.module('sapoApp')
  .factory('Almacen', ['$http', '$resource', 'REST_API', function($http, $resource, REST_API) {
    var API_REST_URL = REST_API.BASE_URL;

    return $resource(API_REST_URL + ':resource/:module/:id/:op/:subop/:userid/:prodid/:cant', { id: '@id', userid: '@userid', prodid: '@prodid', cant: '@cant' }, {
      getAlmacen              : { method: 'get',  params: { resource: 'almacenes' },                            isArray: false },
      getAlmacenes            : { method: 'get',  params: { resource: 'almacenes' },                            isArray: true  },
      agregarCategorias       : { method: 'post', params: { resource: 'almacenes', op: 'agregarcategorias' },   isArray: true  },
      agregarProductos        : { method: 'post', params: { resource: 'almacenes', op: 'agregarproductos'  },   isArray: true  },
      agregarColaborador      : { method: 'post', params: { resource: 'almacenes', op: 'colaboradores'     },   isArray: false },
      actualizarAlmacen       : { method: 'put',  params: { resource: 'almacenes' },                            isArray: false },
      agregarPersonalizacion  : { method: 'put',  params: { resource: 'almacenes', op: 'css'               },   isArray: false },
      actualizarStockAlmacen  : { method: 'put',  params: { resource: 'almacenes', op: 'stock'             },   isArray: false },
      getComentarios          : { method: 'get',  params: { resource: 'almacenes', op: 'comentarios'       },   isArray: true  },
      agregarComentario       : { method: 'post', params: { resource: 'almacenes', op: 'comentarios'       },   isArray: false },
      borrarAlmacen           : { method: 'delete', params: { resource: 'almacenes' },                                         isArray: false },
      activarNotificacion     : { method: 'post',   params: { resource: 'almacenes', op: 'notificaciones', subop: 'stock' },   isArray: false },
      getNotificacionesUser   : { method: 'get',    params: { resource: 'almacenes', op: 'notificaciones', subop: 'stock' },   isArray: true },
      eliminarNotificacion    : { method: 'delete', params: { resource: 'almacenes', op: 'notificaciones', subop: 'stock' },   isArray: false },
      getColaboradores        : { method: 'get',    params: { resource: 'almacenes', op: 'colaboradores' },                    isArray: true  },

    })
  }]);