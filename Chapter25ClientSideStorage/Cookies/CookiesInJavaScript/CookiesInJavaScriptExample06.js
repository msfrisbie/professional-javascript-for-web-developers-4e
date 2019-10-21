class CookieUtil { 
  static get(name) {
    let cookieName = `${encodeURIComponent(name)}=`,
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null;
            
    if (cookieStart > -1){
      let cookieEnd = document.cookie.indexOf(";", cookieStart);
      if (cookieEnd == -1){
        cookieEnd = document.cookie.length;
      }
      cookieValue = decodeURIComponent(document.cookie.substring(cookieStart 
          + cookieName.length, cookieEnd));
      } 
                   
      return cookieValue;
    }
    
    static set(name, value, expires, path, domain, secure) {
      let cookieText = 
        `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
    
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
    
      document.cookie = cookieText;
    }

    static unset(name, path, domain, secure) {
      CookieUtil.set(name, "", new Date(0), path, domain, secure);
  }  
};           
