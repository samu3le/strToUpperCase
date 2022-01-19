function strToUpperCase(str) {
    let str_split = str.split(" ");

    const Array = [];
    for (let i = 0; i < str_split.length; i++) {
        let char = str_split[i];
        let first_char = char[0];
        Array.push(char.replace(/^./, first_char.toUpperCase()));
    }
    console.log(Array.join(" "));
}

strToUpperCase("este es un string de prueba");