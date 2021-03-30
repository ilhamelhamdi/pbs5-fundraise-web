export const getSupportPassive = (eventType) => {
  const targetEvent = 'touchstart'

  let supportsPassive = false;
  try {
    let opts = Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) { }

  return supportsPassive && (eventType === targetEvent)
}
