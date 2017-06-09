function processData(input) {
    const x = input.split('\n')[0];
    const n = input.split('\n')[1];
    console.log(recursion(x, 1));
    
    function recursion(i, c) {
        let v = i - Math.pow(c,n);
        
        if (v == 0) return 1;
        
        if (v < 0) return 0;
        
        return recursion(v, c+1) + recursion(i, c+1);
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});