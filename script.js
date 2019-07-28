const pokaWrappers = [].slice.call(document.querySelectorAll(".poka-wrapper"));
const messages = [].slice.call(document.querySelectorAll(".title-wrapper > p"));

const clearVisibleClassFromPokaWrappers = () => {
  pokaWrappers.forEach((pokaWrapper) => {
    if (pokaWrapper.classList.contains('visible')) {
      pokaWrapper.classList.remove('visible') 
    }
  });
};

const addVisibleClassToPokaWrapper = (index) => {
  console.log('index', index);
  clearVisibleClassFromPokaWrappers();
  if (!pokaWrappers[index].classList.contains("visible")) {
    pokaWrappers[index].classList.add("visible");
  }
};

const removeVisibleClassFromPokaWrapper = () => {
  if (pokaWrapper.classList.contains("visible")) {
    pokaWrapper.classList.remove("visible");
  }
};

const checkAndPlayPokaDotAnimation = () => {
  messages.forEach((message, index) => {
    const bounding = message.getBoundingClientRect();
    if (bounding.top >= 0 && bounding.top <= window.innerHeight) {
      addVisibleClassToPokaWrapper(index);
    }
    //   else {
    //   removeVisibleClassFromPokaWrapper();
    // }
  });
};

window.addEventListener("scroll", () => {
  requestAnimationFrame(checkAndPlayPokaDotAnimation);
});

requestAnimationFrame(checkAndPlayPokaDotAnimation);