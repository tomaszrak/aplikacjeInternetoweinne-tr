'use strict';

angular.module('app.communication')
    .factory('communicationFactory',['localStorageService', '$http', function(localStorageService, $http){

    var communicationFactory = {};

    var adminList = [{
      username: 'admin',
      password:'admin',
      account_activated: true
    }];

    communicationFactory.startTime = null;
    communicationFactory.endTime = null;
    communicationFactory.itemsPerPage = 10;

    var dataList = [];

    communicationFactory.setValue = function(key, val){
      return localStorageService.set(key, val);
    };

    communicationFactory.getItem = function(key) {
      return localStorageService.get(key);
    };

    function generateAllData() {
      for(var i = 0; i < 666; i++){
        dataList.push({
            "type": "item",
            "name": "ASUS H81M-PLUS",
            "price": "239"
          },
          {
            "type": "item",
            "name": "AMD X8 FX-8320",
            "price": "679"
          },
          {
            "type": "item",
            "name": "GIGABYTE GeForce GTX 960 4GB WindForce",
            "price": "970"
          })
      }
      dataList.push({
      "type": "item",
        "name": "ASUS H81M-PLUS",
        "price": "239 zł"
      },
        {
          "type": "item",
          "name": "AMD X8 FX-8320",
          "price": "679"
        })
    }

    function setAdminData() {
      if(!communicationFactory.getItem('users')){
        communicationFactory.setValue('users', adminList);
      }
    }

    function setAllData() {
      if(!communicationFactory.getItem('models')){
        communicationFactory.setValue('models', dataList);
      }
    }

    communicationFactory.getDataFromBackEnd = function () {
      var dataUrl = 'http://192.168.0.103/back-end/get-data.php/data/dane';
      return $http.get(dataUrl);
    };

    communicationFactory.getPartOfData = function (currentPage, itemsPerPage) {
      var dataUrl2 = 'http://192.168.0.103/back-end/get-data2.php/data/dane?currentPage=' + currentPage + '&itemsPerPage=' + itemsPerPage;
      return $http.get(dataUrl2);
    };

    generateAllData();
    setAllData();
    setAdminData();

    //localStorageService.clearAll();
    console.log(localStorageService.keys());

    return communicationFactory;

    }]);
