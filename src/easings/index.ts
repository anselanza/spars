/**
 * https://easings.net/en#easeInQuad
 */
export const easeInQuad = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return changeInValue * (time /= duration) * time + beginValue;
};

/**
 * https://easings.net/en#easeOutQuad
 */
export const easeOutQuad = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return -changeInValue * (time /= duration) * (time - 2) + beginValue;
};

/**
 * https://easings.net/en#easeInOutQuad
 */
export const easeInOutQuad = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  time /= duration / 2;

  if (time < 1) {
    return (changeInValue / 2) * time * time + beginValue;
  }

  return (-changeInValue / 2) * (--time * (time - 2) - 1) + beginValue;
};

/**
 * https://easings.net/en#easeInCubic
 */
export const easeInCubic = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return changeInValue * (time /= duration) * time * time + beginValue;
};

/**
 * https://easings.net/en#easeOutCubic
 */
export const easeOutCubic = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return changeInValue * ((time = time / duration - 1) * time * time + 1) + beginValue;
};

/**
 * https://easings.net/en#easeInOutCubic
 */
export const easeInOutCubic = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  time /= duration / 2;

  if (time < 1) {
    return (changeInValue / 2) * time * time * time + beginValue;
  }

  return (changeInValue / 2) * ((time -= 2) * time * time + 2) + beginValue;
};

/**
 * https://easings.net/en#easeInQuart
 */
export const easeInQuart = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return changeInValue * (time /= duration) * time * time * time + beginValue;
};

/**
 * https://easings.net/en#easeOutQuart
 */
export const easeOutQuart = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return -changeInValue * ((time = time / duration - 1) * time * time * time - 1) + beginValue;
};

/**
 * https://easings.net/en#easeInOutQuart
 */
export const easeInOutQuart = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  time /= duration / 2;

  if (time < 1) {
    return (changeInValue / 2) * time * time * time * time + beginValue;
  }

  return (-changeInValue / 2) * ((time -= 2) * time * time * time - 2) + beginValue;
};

/**
 * https://easings.net/en#easeInQuint
 */
export const easeInQuint = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return changeInValue * (time /= duration) * time * time * time * time + beginValue;
};

/**
 * https://easings.net/en#easeOutQuint
 */
export const easeOutQuint = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return (
    changeInValue * ((time = time / duration - 1) * time * time * time * time + 1) + beginValue
  );
};

/**
 * https://easings.net/en#easeInOutQuint
 */
export const easeInOutQuint = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  time /= duration / 2;

  if (time < 1) {
    return (changeInValue / 2) * time * time * time * time * time + beginValue;
  }

  return (changeInValue / 2) * ((time -= 2) * time * time * time * time + 2) + beginValue;
};

/**
 * https://easings.net/en#easeInSine
 */
export const easeInSine = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return -changeInValue * Math.cos((time / duration) * (Math.PI / 2)) + changeInValue + beginValue;
};

/**
 * https://easings.net/en#easeOutSine
 */
export const easeOutSine = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return changeInValue * Math.sin((time / duration) * (Math.PI / 2)) + beginValue;
};

/**
 * https://easings.net/en#easeInOutSine
 */
export const easeInOutSine = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return (-changeInValue / 2) * (Math.cos((Math.PI * time) / duration) - 1) + beginValue;
};

/**
 * https://easings.net/en#easeInExpo
 */
export const easeInExpo = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return time === 0
    ? beginValue
    : changeInValue * Math.pow(2, 10 * (time / duration - 1)) + beginValue;
};

/**
 * https://easings.net/en#easeOutExpo
 */
export const easeOutExpo = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return time === duration
    ? beginValue + changeInValue
    : changeInValue * (-Math.pow(2, (-10 * time) / duration) + 1) + beginValue;
};

/**
 * https://easings.net/en#easeInOutExpo
 */
export const easeInOutExpo = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  if (time === 0) {
    return beginValue;
  }

  if (time === duration) {
    return beginValue + changeInValue;
  }

  time /= duration / 2;

  if (time < 1) {
    return (changeInValue / 2) * Math.pow(2, 10 * (time - 1)) + beginValue;
  }

  return (changeInValue / 2) * (-Math.pow(2, -10 * --time) + 2) + beginValue;
};

/**
 * https://easings.net/en#easeInCirc
 */
export const easeInCirc = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return -changeInValue * (Math.sqrt(1 - (time /= duration) * time) - 1) + beginValue;
};

/**
 * https://easings.net/en#easeOutCirc
 */
export const easeOutCirc = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return changeInValue * Math.sqrt(1 - (time = time / duration - 1) * time) + beginValue;
};

/**
 * https://easings.net/en#easeInOutCirc
 */
export const easeInOutCirc = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  time /= duration / 2;

  if (time < 1) {
    return (-changeInValue / 2) * (Math.sqrt(1 - time * time) - 1) + beginValue;
  }

  return (changeInValue / 2) * (Math.sqrt(1 - (time -= 2) * time) + 1) + beginValue;
};

/**
 * https://easings.net/en#easeInElastic
 */
export const easeInElastic = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  let s = 1.70158;
  let p = 0;
  let a = changeInValue;

  if (time === 0) {
    return beginValue;
  }

  time /= duration / 2;

  if (time === 1) {
    return beginValue + changeInValue;
  }

  if (!p) {
    p = duration * 0.3;
  }

  if (a < Math.abs(changeInValue)) {
    a = changeInValue;
    s = p / 4;
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(changeInValue / a);
  }

  return (
    -(a * Math.pow(2, 10 * (time -= 1)) * Math.sin(((time * duration - s) * (2 * Math.PI)) / p)) +
    beginValue
  );
};

/**
 * https://easings.net/en#easeOutElastic
 */
export const easeOutElastic = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  let s = 1.70158;
  let p = 0;
  let a = changeInValue;

  if (time === 0) {
    return beginValue;
  }

  time /= duration / 2;

  if (time === 1) {
    return beginValue + changeInValue;
  }

  if (!p) {
    p = duration * 0.3;
  }

  if (a < Math.abs(changeInValue)) {
    a = changeInValue;
    s = p / 4;
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(changeInValue / a);
  }

  return (
    a * Math.pow(2, -10 * time) * Math.sin(((time * duration - s) * (2 * Math.PI)) / p) +
    changeInValue +
    beginValue
  );
};

/**
 * https://easings.net/en#easeInOutElastic
 */
export const easeInOutElastic = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  let s = 1.70158;
  let p = 0;
  let a = changeInValue;

  if (time === 0) {
    return beginValue;
  }

  time /= duration / 2;

  if (time === 2) {
    return beginValue + changeInValue;
  }

  if (!p) {
    p = duration * (0.3 * 1.5);
  }

  if (a < Math.abs(changeInValue)) {
    a = changeInValue;
    s = p / 4;
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(changeInValue / a);
  }

  if (time < 1) {
    return (
      -0.5 *
        (a *
          Math.pow(2, 10 * (time -= 1)) *
          Math.sin(((time * duration - s) * (2 * Math.PI)) / p)) +
      beginValue
    );
  }

  return (
    a *
      Math.pow(2, -10 * (time -= 1)) *
      Math.sin(((time * duration - s) * (2 * Math.PI)) / p) *
      0.5 +
    changeInValue +
    beginValue
  );
};

/**
 * https://easings.net/en#easeInBack
 */
export const easeInBack = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number,
  s: number = 1.70158
): number => {
  return changeInValue * (time /= duration) * time * ((s + 1) * time - s) + beginValue;
};

/**
 * https://easings.net/en#easeOutBack
 */
export const easeOutBack = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number,
  s: number = 1.70158
): number => {
  return (
    changeInValue * ((time = time / duration - 1) * time * ((s + 1) * time + s) + 1) + beginValue
  );
};

/**
 * https://easings.net/en#easeInOutBack
 */
export const easeInOutBack = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number,
  s: number = 1.70158
): number => {
  time /= duration / 2;

  if (time < 1) {
    return (changeInValue / 2) * (time * time * (((s *= 1.525) + 1) * time - s)) + beginValue;
  }

  return (
    (changeInValue / 2) * ((time -= 2) * time * (((s *= 1.525) + 1) * time + s) + 2) + beginValue
  );
};

/**
 * https://easings.net/en#easeInBounce
 */
export const easeInBounce = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  return changeInValue - easeOutBounce(duration - time, 0, changeInValue, duration) + beginValue;
};

/**
 * https://easings.net/en#easeOutBounce
 */
export const easeOutBounce = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  time /= duration / 2;

  if (time < 1 / 2.75) {
    return changeInValue * (7.5625 * time * time) + beginValue;
  } else if (time < 2 / 2.75) {
    return changeInValue * (7.5625 * (time -= 1.5 / 2.75) * time + 0.75) + beginValue;
  } else if (time < 2.5 / 2.75) {
    return changeInValue * (7.5625 * (time -= 2.25 / 2.75) * time + 0.9375) + beginValue;
  } else {
    return changeInValue * (7.5625 * (time -= 2.625 / 2.75) * time + 0.984375) + beginValue;
  }
};

/**
 * https://easings.net/en#easeInOutBounce
 */
export const easeInOutBounce = (
  time: number,
  beginValue: number,
  changeInValue: number,
  duration: number
): number => {
  if (time < duration / 2) {
    return easeInBounce(time * 2, 0, changeInValue, duration) * 0.5 + beginValue;
  }

  return (
    easeOutBounce(time * 2 - duration, 0, changeInValue, duration) * 0.5 +
    changeInValue * 0.5 +
    beginValue
  );
};
