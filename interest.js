

export function add(a,b){

    var c = a + b
    console.log("Sum  is ", c)

}
export function getSimpleInterest() {

    let principalAmt = 1
    let time = 1
    let rate = 1

    let simpleInterest = (principalAmt * time * rate) / 100
    console.log("Simple Interest = ", simpleInterest)
}

export function getCompoundInterest() {
    let principal = 10000
    const rate = 5
    
    /* Calculate compound interest */
    for (let year = 1; year < 6; year++) {

        var A = principal *
            (Math.pow((1 + rate / 100), year));
        var CI = A - principal;

        console.log("Compound interest for year  " + year + "is " + CI);
    }
    console.log("Compound interest for 5 years " + CI)
}
