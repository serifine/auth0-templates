import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .globalResources('common/value-converters')
    .plugin('aurelia-event-aggregator');

  aurelia.start().then(() => aurelia.setRoot());
}
