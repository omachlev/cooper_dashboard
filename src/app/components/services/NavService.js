(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Alerts',
        icon: 'list',
        sref: '.table2'
      },
      {
        name: 'Data Centers',
        icon: 'laptop',
        sref: '.dataCenters'
      },
      {
        name: 'Advisories',
        icon: 'view_module',
        sref: '.table'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
