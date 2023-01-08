import api from "./utils/api/index";
import displayController from "./utils/displayController/index";

async function setNewAdvice() {
  displayController.toggleLoading();

  const advice = await api.getRandomAdvice();
  displayController.setAdviceNumber(advice.id);
  displayController.setAdviceText(advice.advice);

  displayController.toggleLoading();
}

function init() {
  setNewAdvice();

  displayController.addAdviceButtonClickHandler(() => {
    setNewAdvice();
  });
}

init();
