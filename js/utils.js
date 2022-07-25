function getStyle(element, name) {
  const ComputedStyle = window.getComputedStyle
    ? window.getComputedStyle(element, null).getPropertyValue(name) : null;
  return element.currentStyle ? element.currentStyle[name] : ComputedStyle;
}

// eslint-disable-next-line import/prefer-default-export
export { getStyle };