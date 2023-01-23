const removeAsterisks = (str: string) => {
    return str.replace(/\*(.*)\*/, '$1')
  }
  export default removeAsterisks