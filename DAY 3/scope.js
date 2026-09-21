let a = "global";

function outer() {
    let b = "outer";

    console.log(a);
    console.log(b);

    function inner() {
        let c = "inner";

        console.log(a);
        console.log(b);
        console.log(c);
    }
    inner();
}
outer();
console.log(a);
console.log(b);

//output - outer
// global
// outer

//output - inner
// global
// outer
// inner

//output - global
// global
// b is not defined