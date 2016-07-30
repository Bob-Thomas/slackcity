'use strict';

/**
 * @ngdoc service
 * @name slackcityApp.quotes
 * @description
 * # quotes
 * Service in the slackcityApp.
 */
angular.module('slackcityApp')
  .service('quotes', function ($http) {
    this.get = function () {
      return $http.get('/quotes/random').then(function (data) {
        return data.quotes;
      })
        .catch(function (error) {
          return error;
        })
    };

    this.addComment = function (id, author, body) {
      return $http.post('/quotes/add-comment', {
        id: id,
        author: author,
        body: body
      }).then(function (data) {
        return data;
      }).catch(function (error) {
        return error;
      })
    };

    this.addRating = function (id, score) {
      return $http.post('/quotes/add-rating', {
        id: id,
        score: score
      }).then(function (data) {
        return data;
      }).catch(function (error) {
        return error;
      })
    }
  });
