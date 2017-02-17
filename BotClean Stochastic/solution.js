function processData(input) {
	var boardStr = (input.substring(4, 33));
	var trimmedBoard = trimBoard(boardStr);
	var board = interpretBoard(trimmedBoard);
    var b_row = input.substring(0, 1);
    var b_col = input.substring(2, 3);
    var d_row = getRow("d", board);
    var d_col = getCol("d", board);
    var action = determineAction(b_row, b_col, d_row, d_col, board);
    console.log(action);


    function trimBoard(boardStr) {
    	return boardStr.replace(/(\r\n|\n|\r)/gm,"");
    }

    function interpretBoard(trimmedBoard) {
    	var arr = new Array(5);
    	var pos = 0;

		for (i=0; i <5; i++) {
   		 arr[i]=new Array(5)
		}

    	for (var row = 0; row<5; row++) {
    		for (var col = 0; col<5; col++) {
    			arr[row][col] = trimmedBoard.charAt(pos);
    			pos += 1;
    		}
    	}

    	return arr;
    }

    function getRow(char, board) {
    	for (var row = 0; row < board.length; row++) {
    		for (var col = 0; col < board[0].length; col++) {
    			if (board[row][col] == char)  {
    				return row;
    			}
    		}
    	}
    }

    function getCol(char, board) {
    	for (var row = 0; row < board.length; row++) {
    		for (var col = 0; col < board[0].length; col++) {
    			if (board[row][col] == char)  {
    				return col;
    			}
    		}
    	}
    }

    function determineAction(b_row, b_col, d_row, d_col, board) {
    	if (b_col < d_col) {
    		return "RIGHT";
    	}

    	if (b_col > d_col) {
    		return "LEFT";
    	};

    	if (b_row < d_row) {
    		return "DOWN";
    	};

    	if (b_row > d_row) {
    		return "UP";
    	};

    	if ((b_row == d_row) && (b_col == d_col)) {
    		return "CLEAN";
    	};
    }
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
    
});

process.stdin.on("end", function () {
   processData(_input);
});
