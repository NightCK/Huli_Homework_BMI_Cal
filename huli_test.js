var body_height = 172 / 100 // 除以 100 將單位從 cm 轉成 m
var body_weight = 80
var BMI = parseInt(body_weight / (body_height * body_height)) 
// BMI 值的計算公式為：體重 / 身高^2。
// 用 parseInt 轉換成整數，避免小數點影響 if 判斷。

if (BMI < 18.5) {
    console.log("體重過輕")
} else if (18.5 <= BMI && BMI < 24) {
    console.log("正常範圍")
} else if (24 <= BMI && BMI < 27) {
    console.log("過重")
} else if(27 <= BMI && BMI < 30) {
    console.log("輕度肥胖")
} else if(30 <= BMI && BMI < 35){
    console.log("中度肥胖")
} else if(35 <= BMI) {
    console.log("重度肥胖")
} else {
    console.log("找不到答案ㄋ")
}

console.log("BMI number:",BMI)