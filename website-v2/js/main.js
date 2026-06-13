const app = {
  init() {
    document.documentElement.dataset.js = true;
  }
};

document.addEventListener('DOMContentLoaded', () => app.init());
