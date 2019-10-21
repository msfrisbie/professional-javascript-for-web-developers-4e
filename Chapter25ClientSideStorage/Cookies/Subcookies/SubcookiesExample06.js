class SubCookieUtil {                 
  // previous code here
   
  static unset(name, subName, path, domain, secure) {
    let subcookies = SubCookieUtil.getAll(name);
    if (subcookies){
      delete subcookies[subName];  // fix?
      SubCookieUtil.setAll(name, subcookies, null, path, domain, secure);
    }
  }

  static unsetAll(name, path, domain, secure) {
    SubCookieUtil.setAll(name, null, new Date(0), path, domain, secure);
  }
} 
