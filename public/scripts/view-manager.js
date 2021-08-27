$(() => {
  // create empty object on the global window object, to avoid storing things in the global scope.
  window.AppLib = {};

  const $main = $('#main-content');

  AppLib.viewManager = {};

  AppLib.showChatsView = () => {
    getChats().then((json)=>{
      AppLib.chatList.createChatList(json);
      AppLib.viewManager.show('chatList');
    });
  };

  AppLib.viewManager.show = function(item) {
    AppLib.$productList.detach();
    AppLib.$searchForm.detach();
    AppLib.$newProductForm.detach();
    AppLib.$chatList.detach();

    switch (item) {
    case 'productList':
      AppLib.$productList.appendTo($main);
      break;
    case 'chatList':
      AppLib.$chatList.appendTo($main);
      break;
    case 'searchForm':
      AppLib.$searchForm.appendTo($main);
      break;
    case 'newProductForm':
      AppLib.$newProductForm.appendTo($main);
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
