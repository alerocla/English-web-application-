export const speak = (text: string) => {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;

    window.speechSynthesis.speak(utterance);
  } else {
    alert("Sorry, your browser does not support text to speech!");
  }
};
