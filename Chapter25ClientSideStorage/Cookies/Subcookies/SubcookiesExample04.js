class SubCookieUtil {
  // previous code here

  static set(name, subName, value, expires, path, domain, secure) {
    let subcookies = SubCookieUtil.getAll(name) || {};
    subcookies[subName] = value;
    SubCookieUtil.setAll(name, subcookies, expires, path, domain, secure);
  }
    
  static setAll(name, subcookies, expires, path, domain, secure) {
    let cookieText = encodeURIComponent(name) + "=",
        subcookieParts = new Array(),
        subName;
    for (subName in subcookies){
      if (subName.length > 0 && subcookies.hasOwnProperty(subName)){
        subcookieParts.push(
          `${encodeURIComponent(subName)}=${encodeURIComponent(subcookies[subName])}`);
      }
    }
        
    if (cookieParts.length > 0) {
      cookieText += subcookieParts.join("&");

      if (expires instanceof Date) {
        cookieText += `; expires=${expires.toGMTString()}`;
      }

      if (path) {
        cookieText += `; path=${path}`;
      }

      if (domain) {
        cookieText += `; domain=${domain}`;
      }

      if (secure) {
        cookieText += "; secure";
      }
    } else {
      cookieText += `; expires=${(new Date(0)).toGMTString()}`;
    }
    document.cookie = cookieText; 
  }
                   
  // more code here
};
