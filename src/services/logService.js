//import Raven from "raven-js";

function init() {
    // Raven.config("https://28562b40b87f40d9bf9eec7b831803a1@sentry.io/1288844", {
    //   release: "1-0-0",
    //   environment: "development-test"
    // }).install();
}

function log(error) {
    console.error(error);
    // Raven.captureException(error);
}

export default {
    init,
    log
};
