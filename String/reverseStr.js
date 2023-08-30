function reverseString(str) {
  // 1
  //     let arr = str.split("");
  //     arr.reverse();
  //    let reverseStr =  arr.join('')
  //     console.log(reverseStr)
  //     return reverseStr

  // 2
  // str.split('').reverse().join('');

  // 3
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; //concatinate
  }
  return reversed;
}

reverseString("gaurav");
