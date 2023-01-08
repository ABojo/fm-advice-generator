import api from "./utils/api/index";
import displayController from "./utils/displayController/index";

async function setNewAdvice() {
  displayController.startLoading();

  const advice = await api.getRandomAdvice();
  displayController.setAdviceNumber(advice.id);
  displayController.setAdviceText(advice.advice);

  displayController.stopLoading();
}

function init() {
  setNewAdvice();

  displayController.addAdviceButtonClickHandler(() => {
    setNewAdvice();
  });
}

init();
