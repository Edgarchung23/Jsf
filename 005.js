// console.log(true)
// console.log(false)

// // // // AND Operatorm = 又 取false
// // console.log(true && true)
// // console.log(true && false)
// console.log(false && true)
// console.log(false && false)


// // // OR Operator = 或者 ， 取true
// console.log(true || true )
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)


// //
// console.log((true || true) && false) //如不加()會不清楚先後次序
// console.log(true || (false && true))

// // NOT Operator
// console.log(!true)  //加感嘆號在前＝否定
// console.log(!!false)    //反轉再反轉

// Comparison Operators 數字比較

// console.log(5 > 5)
// console.log(4 < 5)
// console.log(5 >= 1)
// console.log(1 + 1 <= 2)     //<=大過或等於   

const name = "Hayes"
console.log("test" == "test")  
console.log(name == "Edgar")    //兩個== 檢查兩件事是否一樣，一個=是const定義
console.log( !(name == "Edgar1"))   //把感嘆號加在雙括號內，令原先得出的結果反轉
console.log(name !="Edgar")     //或用!= 

// Flow Control - Condition 按條件執行的流程
if (name == "Hayes") { // 在if之後的{}是如果條件達到時會執行括號內的動作，如條件不滿足的話則不會執行任何動作
    console.log("Hi, Hayes")    
    console.log("This is today's menu. What would you like to have?")
}   else if (name =="Edgar") {   //如不滿足if的條件的話則執行'else'的動作  
    console.log("Hello Edgar")   //如不用這個方法可在else後加if，即else執行動作之前會確認多一次是否edgar或hayes
}    else {                      // 如在沒有定義條件不用加if，如加if必需有條件，如沒有任何條件將出現以下句子
    console.log("Excuse Sir. Do you have a reservation?!")
    }
