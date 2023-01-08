const displayController = (() => {
  const adviceNumber = document.querySelector(".advice__number");
  const adviceText = document.querySelector(".advice__text");
  const adviceButton = document.querySelector(".advice__button");

  function setAdviceNumber(number) {
    adviceNumber.textContent = number;
  }

  function setAdviceText(text) {
    adviceText.textContent = text;
  }

  function addAdviceButtonClickHandler(cb) {
    adviceButton.addEventListener("click", cb);
  }

  function startLoading() {}

  function stopLoading() {}

  return {
    setAdviceNumber,
    setAdviceText,
    addAdviceButtonClickHandler,
    startLoading,
    stopLoading,
  };
})();

export default displayController;
