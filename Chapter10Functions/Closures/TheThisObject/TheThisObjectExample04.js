object.getIdentity();                          // 'My Object'
(object.getIdentity)();                        // 'My Object'
(object.getIdentity = object.getIdentity)();   // 'The Window'
