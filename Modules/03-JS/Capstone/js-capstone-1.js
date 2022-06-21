function missingLetter(str) { 
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        // console.log(char);
        if (char !== str.charCodeAt(0) + i) {
            return String.fromCharCode(char - 1);

        }
    }
    return undefined;
     
  }
    console.log(missingLetter("abce"));
    console.log(missingLetter("abcdefghjklmno"));
    console.log(missingLetter("stvwx"));
    console.log(missingLetter("bcdf"));
    console.log(missingLetter("abcdefghijklmnopqrstuvwxyz"));