class SubCookieUtil {
  static get(name, subName) {
    let subCookies = SubCookieUtil.getAll(name);
    return subCookies ? subCookies[subName] : null;
  }
    
  static getAll(name) {
    let cookieName = encodeURIComponent(name) + "=",
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null,
        cookieEnd,
        subCookies,
        parts,
        result = {};
      
    if (cookieStart > -1) {
      cookieEnd = document.cookie.indexOf(";", cookieStart);
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = document.cookie.substring(cookieStart + 
                                              cookieName.length, cookieEnd);
      if (cookieValue.length > 0) {
        subCookies = cookieValue.split("&");
        
        for (let i = 0, len = subCookies.length; i < len; i++) {
          parts = subCookies[i].split("=");
          result[decodeURIComponent(parts[0])] = 
            decodeURIComponent(parts[1]);
        }
      
        return result;
      }  
    } 
    return null;
  }
                   
  // more code here
};
