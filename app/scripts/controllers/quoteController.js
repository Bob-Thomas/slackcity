'use strict';

/**
 * @ngdoc function
 * @name slackcityApp.controller:QuotecontrollerCtrl
 * @description
 * # QuotecontrollerCtrl
 * Controller of the slackcityApp
 */
angular.module('slackcityApp')
  .controller('quoteCtrl', function (quotes) {
    var vm = this;
    vm.selectedRating = 0;

    vm.quote = {};
    //test quote
    // vm.quote = {
    //   id: 1,
    //   author: 'Bob Thomas',
    //   body: 'Kanker furry',
    //   comments: [
    //     {
    //       author: 'daniel',
    //       body: 'helemaal mee eens'
    //     }
    //   ],
    //   rating: 3
    // };

    quotes.get().then(function(quote) {
      vm.quote.id = quote.id;
      vm.quote.author = quote.author;
      vm.quote.body = quote.body;
      vm.quote.comments = quote.comments;
      vm.quote.rating = quote.rating;
    });

    vm.addComment = function (id, author, body) {
      quotes.addComment(id, author, body).then(function(data) {
        vm.quote.comments.push(
          {
            author: author,
            body: body
          }
        );
        vm.newComment = {};
      })
        .catch(function(error) {
          console.log('shit died')
        });

    };
    vm.addRating = function (id, score) {
      if(!vm.selectedRating) {
        quotes.addRating(id, score).then(function (data) {
          vm.quote.rating = data.rating;
          vm.selectedRating = score;
        })
      }
    };
  });
