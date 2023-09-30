function stringAddition(expression){
    const cleanedString = expression.replace(/["']/g , ''); //regex - remove double and single qotes , ("1+2") , ('"1+2"') = 1+2
    const numbers = cleanedString.split('+'); // '+' is used as the seprator to split the string.
    let sum = numbers.reduce((acc , crrValue)=>{
        return acc + parseInt(crrValue , 10)  // 10, is called the "radix" or "base" . JavaScript allows you to parse numbers in different numeral systems, such as binary (base 2), octal (base 8), decimal (base 10), and hexadecimal (base 16).
    } , 0)
    
    console.log(sum)
    
    return sum
       
    }
    
    
    stringAddition("10+20");