angular
.module('theNovelists', [
  'ui.router',
  'ngResource',
  'angular-jwt',
  'ngMessages',
  'contenteditable',
  'angularMoment',
  '720kb.socialshare'
]);

angular
.module('theNovelists').directive('onErrorSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src !== attrs.onErrorSrc) {
          attrs.$set('src', attrs.onErrorSrc);
        }
      });
    }
  };
});

$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') ) {
    $(this).collapse('hide');
  }
});
