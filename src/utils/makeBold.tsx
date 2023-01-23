function makeBold(text: string) {
  return text.replace(/\*(.*?)\*/g, "<div>$1</div>");
}

export default makeBold;
