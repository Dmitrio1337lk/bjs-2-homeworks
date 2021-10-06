function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let idx = cache.findIndex((item) => item.hash === hash);
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
       return "Из кэша: " + cache[idx].value;
    } else {
      let result = func(...args);
      cache.push({hash: hash, value: result});
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
  return wrapper
}


function debounceDecoratorNew(func, ms) {
  let isThrottled = false,
  savedArgs,
  savedThis;

  function wrapper(...args) {
    savedArgs = args;
    savedThis = this;
    if (isThrottled) {
      return;
    }

    func.apply(this, savedArgs);
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, ms);
  };
  return wrapper
  
}

function debounceDecorator2(func) {
  let isThrottled = false,
  savedArgs,
  savedThis;

  function wrapper(...args) {
    savedArgs = args;
    savedThis = this;
    wrapper.count += 1;
    if (isThrottled) {
      return;
    }

    func.apply(this, savedArgs);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, ms);
  };
  wrapper.count = 0;
  return wrapper;
}