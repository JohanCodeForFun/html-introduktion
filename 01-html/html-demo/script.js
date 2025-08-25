function injectHtml(selector, htmlContent) {
  const target = document.querySelector(selector);
  if (target) {
    target.innerHTML = htmlContent;
  }
}