const onChangeListeners = [];

export default {
  push: pathname => {
    window.history.pushState({}, '', pathname);
    onChangeListeners.forEach(callback => callback(pathname));
  },
  onChange: callback => onChangeListeners.push(callback)
};
