
class BrowserDetector {
  constructor() {
    // Test for conditional compilation
    // Supported IE6 to IE10
    this.isIE_Gte6Lte10 = /*@cc_on!@*/false;
    
    // Test for presence of documentMode
    // Supported IE7 to IE11
    this.isIE_Gte7Lte11 = !!document.documentMode;
    
    // Test for presence of StyleMedia constructor
    // Supported Edge >= 20
    this.isEdge_Gte20 = !!window.StyleMedia;
    
    // Test for proprietary Firefox add-on install API
    // Supported for all Firefox versions
    this.isFirefox_Gte1 = typeof InstallTrigger !== 'undefined';
    
    // Test for presence of Chrome object and its webstore property. Versions
    // of Opera will have window.chrome, but not window.chrome.webstore
    // Supported for all Chrome versions
    this.isChrome_Gte1 = !!window.chrome && !!window.chrome.webstore;
    
    // Early versions of Safari would append "Constructor" to the constructor
    // function identifier.
    // window.Element.toString();  // [object ElementConstructor]
    // Supported Safari 3 to 9.1
    this.isSafari_Gte3Lte9_1 = /constructor/i.test(window.Element);
    
    // Push notification API exposed on window object. Uses default parameters
    // to prevent stringification of undefined values.
    // Supported Safari 7.1+
    this.isSafari_Gte7_1 = 
        (({pushNotification = {}} = {}) => 
          pushNotification.toString() == '[object SafariRemoteNotification]'
        )(window.safari);

    // Tests for the 'addons' property.
    // Supported Opera 20+
    this.isOpera_Gte20 = !!window.opr && !!window.opr.addons;
  }

  isIE() { return this.isIE_Gte6Lte10 || this.isIE_Gte7Lte11; }
  isEdge() { return this.isEdge_Gte20 && !this.isIE(); }
  isFirefox() { return this.isFirefox_Gte1; }
  isChrome() { return this.isChrome_Gte1 };
  isSafari() { return this.isSafari_Gte3Lte9_1 || this.isSafari_Gte7_1; }
  isOpera() { return this.isOpera_Gte20; }
}
