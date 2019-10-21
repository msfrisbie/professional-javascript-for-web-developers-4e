class TrackablePromise extends Promise {
  constructor(executor) {
    const notifyHandlers = [];
    
  super((resolve, reject) => {
    return executor(resolve, reject, (status) => {
        notifyHandlers.map((handler) => handler(status));
      }) ;
    });
    
    this.notifyHandlers = notifyHandlers;    
  }
  
  notify(notifyHandler) {
    this.notifyHandlers.push(notifyHandler);
    return this;
  }
}
PromiseProgressNotificationExample01.js
