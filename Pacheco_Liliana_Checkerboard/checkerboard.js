var styles = {
    row: {height: '50px', display: "flex"},
    blackChecker: {height: '50px', width: '50px', backgroundColor: 'black'},
    redChecker: {height: '50px', width: '50px', backgroundColor: 'red'}
}

function CheckerBoard (props) {
    var rowList = [];
    for(var i = 0; i < props.boardLength; i++){
        if(i%2 === 0){
            rowList.push(Row({startColor: "black", rowLength:props.boardLength, key:i}));
        }else{
            rowList.push(Row({startColor: "red", rowLength:props.boardLength, key:i}));
        }
    }
    return React.createElement("div", null, rowList);
}

function Row (props) {
    var checkerList = [];
    var color = props.startColor;    //red or black
    for(var i = 0; i < props.rowLength; i++){
        if(color === "red"){ //add red cell
            checkerList.push( Checker({color:"redChecker", key:i}));
            color = "black";
        }else{ //add black cell
            checkerList.push( Checker({color:"blackChecker", key:i}));
            color = "red";
        }
    }
    return React.createElement("div", {style: styles["row"], key:props.key}, checkerList);
}

function Checker (props) { //color of checker should be decided here
    return React.createElement("div", {style: styles[props.color], key:props.key}, "");
}

ReactDOM.render(CheckerBoard({boardLength: 11}), document.getElementById("app"));