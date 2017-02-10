process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var aScore = 0;
    var bScore = 0;

    for (i = 0; i < a0_temp.length; i++) {
        if (parseInt(a0_temp[i])>parseInt(b0_temp[i])) {
            aScore+=1;
        } else if (parseInt(a0_temp[i])<parseInt(b0_temp[i])) {
            bScore+=1;
        }
    };

    console.log(aScore+" "+bScore);

}
