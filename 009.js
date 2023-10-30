//funtion
function sayHello(name) {   //執行function指令，打function名加()
    console.log("Say Hello")       //內容
    console.log("`Hello! " + name + "`")

}

sayHello("Alex")      //alex,gordon,michael,jason是內容，對應(2)
sayHello("Gordon")
sayHello("Michael")
sayHello("Jason")

function stamDutyCalulate(Price) {
    if (Price >= 2176470) {     
        return (Price * 0.03)       //return ＝ 先計算好整個用了return的指令再將結果顯示
    } else if(Price >=2000000) {
        return (30000 + (Price - 2000000) * 0.2)
    } else {
        return (Price * 0.015)      
    }
    
}

console.log(1900000 * 0.2 + stamDutyCalulate(1900000))   


function double(num, add) {
    return num * 2 + add 

}
double(10)

console.log (double(10,5 ))