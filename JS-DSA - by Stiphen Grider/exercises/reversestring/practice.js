function reverse(str) {
    let strTemp = str
    let strReversed = []
    for(let i = 0; i < str.lenght-1; i++){
        strReversed[i] = strTemp.charAt(i)
        console.log(strReversed)
    }
    for(let i = str.lenght-1; i >= 0; i--){
        strReversed = str.charAt(i)
    }
    return strReversed;

}

let strReversed = reverse("Vishwas")
console.log(strReversed)