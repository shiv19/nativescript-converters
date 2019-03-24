import * as application from "tns-core-modules/application";

// register converters
require('~/utils/converters');

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
