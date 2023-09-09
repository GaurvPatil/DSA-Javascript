function printNos(N) {
    let result = "";
    const printRecursively = (num) => {
        if (num <= N) {
            result += num + " ";
            printRecursively(num + 1);
        }
    };

    printRecursively(1);
    console.log(result);
}

printNos(10); // Example 1: Output will be "1 2 3 4 5 6 7 8 9 10"
printNos(5);  // Example 2: Output will be "1 2 3 4 5"
