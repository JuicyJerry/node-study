## Day by day, coding day
# day 12, 13, 14
**오늘 뭐 했니?**


1. 연습문제3 : 소수 출력하기(1~10,000 사이의 소수를 화면에 출력)
<br>[참고 링크](https://github.com/honux77/js-playground/blob/master/week2/prime2.html)


2. 과제: 구구단 문제를 while이 아닌 for문으로 작성해보세요.
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Multiplication table(with for statement) </title>
</head>
<body>
    <h1>구구단 맞추기</h1>
    <script>
    var n = Number(prompt("원하는 구구단 숫자를 넣어보세요."));
    if (1<n && n<10) {
        for (var j=1; j<10; j++) {
        var q = n * j;
        document.write("<p></p>");
        document.write(n + " X " + j + " = " + q + " 입니다.");
        }
    }       
    else {
            document.write("구구단은 2단부터 9단까지 입니다");
    }
    
    </script>
</body>
</html>
```
        
        
3. 강의자가 함 보고 오라는데 어떻게 할까요.
웹1: HTML 
<https://www.inflearn.com/course/%EC%BB%B4%ED%93%A8%ED%84%B0-%EC%9B%B9-%EC%BD%94%EB%94%A9-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%8B%9C%EC%9E%91-web-1/>
        
        
4. github의 checkout 기능과 sourceTree의 코드뭉치 버리기 기능


5. 현재 (1) 배열로 구구단 구현과 (2) 함수로 구구단 구현을 하고 있습니다.


6. (질문1)
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
    <h1>함수 사용해 보기</h1>
<body>
    <script>
#1.    
    function gugudan(x) {
        var ret = [];
        for (var i = 1; i <= 9; i++) {
            ret [i] = x * i;
        }
        return ret;
    }
#2.
    function printResult(x, ret) {
        document.write("<h2>" + x + "단</h2>");
        for (var i = 1; i <= 9; i++){
            var y = x * i;
            document.write(x + " * " + i + " = " + y + "<br>");
        }
    }
#3. 
    function main() {
        console.log("main 함수가 실했되었습니다.");
        for (var n = 2; n <=9; n++) {
            var result = gugudan(n);
            printResult(n, result);
        }
    }
    main();
    </script>
</body>
</html>
```
-여기서, #1은 구구단의 계산값 #2는 구구단의 진행값 #3는 #1과 #2를 활용하여 구구단을 실행이라고 보았다.

-질문1-1: #3이 먼저 실행된다. n = 2부터 시작된다. -> gugudan(2) 실행. 여기서 gugudan 함수의 매개변수는 n값으로 들어가는데 #1에는 매개변수가 n이 아니라 x다. 

-질문1-2: 위 질문과 동일한 성질의 질문인데, #3에서 printResult(n, result);인데 #2에서는 printResult(x, ret)이라고 돼있다.

=> 정리하자면, 질문1-1, 1-2: 매개변수가 다른데 적용이 되는 이유가 무엇인가?

-질문1-3: #1에서 구구단의 계산값에 관한 함수 설정을 해줬는데 #2에서 y 변수를 굳이 한 번더 설정할 필요가 있을까요?




7. (질문2)Var i = 0;와 Var i’의 차이점
       
```js
    var i;
    for (var n = 0; n <= i; i++) {
            if (i === 10){
                console.log(n, i);
```
-질문2-1: 변수 선언 부분에서 i에 0을 넣어서 초기값을 넣어주는 경우에는 결과값이 뜨는데 그렇지 않을 경우, 뜨질 않는다.
        
