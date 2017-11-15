const modal = weex.requireModule('modal');
export default {
  toast: (message, duration) => {
    var options = {};
    options.message = message ? message + '' : '';
    options.duration = duration || 2;
    modal.toast(options);
  },

  alert: (options, callback) => {
    modal.alert(options, callback);
  },

  confirm: (options, callback) => {
    modal.confirm(options, callback);
  },

  prompt: (options, callback) => {
    modal.prompt(options, callback);
  },
};
