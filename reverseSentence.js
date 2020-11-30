function reverseString(str) {
    const arr = str.split(" ");
    const reversed = arr.map(el => {
        return el.split('').reverse().join("");
    });
    return reversed.join(" ");
}

console.log(reverseString("Hello World"))