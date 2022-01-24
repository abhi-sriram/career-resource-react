function textUppercase(word){
    const l = word.split(" ");
    const newWord = [];
    l.forEach(element => {
        if(element.length>0){
            newWord.push(element.substr(0,1).toUpperCase()+element.substr(1,element.length-1))
        }
    });
    const cap = newWord.join(" ");
    return cap;
//     List<String> l = word.split(" ");
//   List newWord = [];
//   for (var w in l) {
//     if(w.length>0){
//     newWord.add((w.substring(0, 1).toUpperCase() + w.substring(1)));

//     }
//   }
//   String capitalized = newWord.join(" ");
//   return capitalized;
    // return 'Hello';
}

export default textUppercase;