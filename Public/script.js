
$(document).ready(function(){
    
});

function addItem()
{
    ons.notification.alert('you have  click on add button');
}


//for  showing  side menu
window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

function addItem()
{
    var content = document.querySelector('ons-splitter-content');

    // Switch to the Settings page.
    content.load('add.html');
}
function backToHome()
{
    var content = document.querySelector('ons-splitter-content');

    // Switch to the Settings page.
    content.load('home.html');
}

var login = function() {
    var password = document.getElementById('user').value;
    var username = document.getElementById('amount').value;  
    var password = document.getElementById('date').value;
  
    if (username === 'admin' && password === 'admin') {
      ons.notification.alert('Congratulations!');
    } else {
      ons.notification.alert('Incorrect username or password.');
    }
  };
//for  end  of  side  menu