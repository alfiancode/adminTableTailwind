const dateBold = (data: string) => {
    let dateRegex = /\d{2}\.\d{2}\.\d{2}/g
    let result = data.replace(dateRegex, `<span className=" font-bold" style='color: black'>$&</span>`)
    return result
  }
  export default dateBold