const api = (() => {
  async function getRandomAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    });
    const json = await response.json();
    return json.slip;
  }

  return { getRandomAdvice };
})();

export default api;
