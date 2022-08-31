// JavaScript Document

// タブレットでPC表示

var ua = navigator.userAgent;
if ((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)) {
  document.write('<meta name="viewport" content="width=device-width">');
} else {
  document.write('<meta name="viewport" content="width=1286">');
}

