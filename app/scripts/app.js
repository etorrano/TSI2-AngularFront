'use strict';
/**
 * @ngdoc overview
 * @name sapoApp
 * @description
 * # sapoApp
 *
 * Main module of the application.
 */
angular
  .module('sapoApp', [
        'oc.lazyLoad',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        'ngAnimate',
        'toastr',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',

  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sapoApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sapoApp',
              files:[
              'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form',{
        templateUrl:'views/form.html',
        url:'/form'
    })
    /**
     * FORMULARIO PARA CREAR UNA NUEVA ALMACEN
     */
      .state('dashboard.crearAlmacen',{
        templateUrl:'../views/pages/almacen/form-crear-almacen-main.html',
        controller: 'CrearAlmacenesCtrl',
        controllerAs: 'crearAlmacenesCtrl',
        url:'/crearAlmacen'
      })
      .state('dashboard.crearAlmacen.datos',{
        templateUrl:'../views/pages/almacen/form-crear-almacen-datos.html',
        url:'/datos'
      })
      .state('dashboard.crearAlmacen.templates',{
        templateUrl:'../views/pages/almacen/form-crear-almacen-templates.html',
        controller: 'ListarTemplatesCtrl',
        controllerAs: 'listarTemplatesCtrl',
        url:'/templates',
        resolve: {
          templates: ['templateService', function(templateService) {
            return templateService.getTemplates().then(function(listaTemplates) {
              return listaTemplates;
            });
          }]
        }
      })
      .state('dashboard.crearAlmacen.editarTemplate',{
        templateUrl:'../views/pages/almacen/form-crear-almacen-editar-template.html',
        url:'/editarTemplate/:templateId',
        controller: 'EditarTemplateCtrl',
        controllerAs: 'editarTemplateCtrl',
        resolve: {
          templateId: ['$stateParams', function($stateParams) {
            return $stateParams.templateId;
          }]
        }
      })
      .state('dashboard.crearAlmacen.productos',{
        templateUrl:'../views/pages/almacen/form-crear-almacen-productos.html',
        url:'/productos'
      })

      .state('login',{
        templateUrl:'views/pages/login.html',
        url:'/login',
        controller: 'LoginCtrl',
      })
      .state('dashboard.almacenes', {
        templateUrl: '../views/pages/listarAlmacenes.html',
        url: '/almacenes',
        controller: 'ListarAlmacenesCtrl',
        controllerAs: 'listarAlmacenesCtrl',
        resolve: {
          almacenes: ['almacenService', function(almacenService) {
            return almacenService.getAlmacenes().then(function(listaAlmacenes) {
              return listaAlmacenes;
            });
          }]
          }
        })
      .state('dashboard.chart',{
        templateUrl:'views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                'bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sapoApp',
                files:['scripts/controllers/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.table',{
        templateUrl:'views/table.html',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl:'views/ui-elements/panels-wells.html',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
        templateUrl:'views/ui-elements/buttons.html',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
        templateUrl:'views/ui-elements/notifications.html',
        url:'/notifications'
    })
      .state('dashboard.typography',{
       templateUrl:'views/ui-elements/typography.html',
       url:'/typography'
   })
      .state('dashboard.icons',{
       templateUrl:'views/ui-elements/icons.html',
       url:'/icons'
   })
      .state('dashboard.grid',{
       templateUrl:'views/ui-elements/grid.html',
       url:'/grid'
   })
  }]);

    
