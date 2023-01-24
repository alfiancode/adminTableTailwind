function makeBold(text: string) {
  return text.replace(/\*(.*?)\*/g, "<b >$1</b>");
}

export default makeBold;
