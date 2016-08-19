/**
 * Created by huqiwen on 16/4/5.
 */
var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
    isMobile = isIphone || isAndroid;
if(isMobile) {
    //location.href = 'http://m.domain.com';
}else {
    location.href = 'error.html';
}
