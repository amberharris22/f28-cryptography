

function decoder(code) {
    let num = Number(code[0])
    let answer = ""
  
    for (let i = 1; i < code.length; i++) {
      let strValue = code[i].charCodeAt() + num
      answer += String.fromCharCode(strValue)
    }
    return answer
  }
  console.log(decoder('2G+jmtc+apwrmepynfw'))