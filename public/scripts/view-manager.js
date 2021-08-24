$(() => {
  window.AppLib = {};

  const $main = $('#main-content');

  AppLib.viewManager = {test: "hello MyLib viewManager!"};
  console.log('view-manager: ', AppLib.viewManager);

  window.viewManager.show = function(item) {
    AppLib.$productList.detach();
    AppLib.$searchForm.detach();
    AppLib.$chatList.detach();

    switch (item) {
    case 'productList':
      $productList.appendTo($main);
      break;
    case 'chatList':
      $chatList.appendTo($main);
      break;
    case 'searchForm':
      $searchForm.appendTo($main);
      break;
    case 'error': {
      const $error = $(`<p>${arguments[1]}</p>`);
      $error.appendTo('body');
      setTimeout(() => {
        $error.remove();
        viewManager.show('productList');
      }, 2000);
          
      break;
    }
    }
  };
});