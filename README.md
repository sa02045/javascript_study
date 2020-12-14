# Vanila JS

Vanila JS를 이용해 다양한 미니프로젝트를 연습한 Repository입니다. 먼저 스스로 코드를 작성해본뒤 강의를 수강하여 올바른 코드를 작성하는 방법을 학습하였습니다.

Vanila JS란?
- 어떠한 라이브러리나 프레임워크를 쓰지 않는 자바스크립트입니다!
- 라이브러리나 프레임워크를 사용했을 때보다 빠르고 호환성이 좋습니다!
  
# 미니프로젝트
## 1.Color-Flipper
### 구현화면
![colorflipper-1](https://user-images.githubusercontent.com/50866506/102097267-061d3e00-3e69-11eb-8888-2f4948d41645.JPG)
![colorflipper-2](https://user-images.githubusercontent.com/50866506/102097273-074e6b00-3e69-11eb-8ac1-77dd642c5842.JPG)
![colorflipper-3](https://user-images.githubusercontent.com/50866506/102097275-07e70180-3e69-11eb-98de-a4f70e73d471.JPG)

버튼을 클릭하면 background-color가 랜덤으로 바뀝니다.
### 코드설명
#### hex.js
![colorflipper-hex-js](https://user-images.githubusercontent.com/50866506/102097279-087f9800-3e69-11eb-8b26-988c08707923.JPG)

버튼에 EventListener을 추가하여 클릭하게 되면
1. getRandomNumber() 함수를 통해 0 ~ len(hex) 중 하나의 숫자를 랜덤하게 선택합니다.
2. hex[] 배열에서 1의 랜덤숫자 값을 선택한 후
3. 문자열변수 hexColor에 하나 씩 더해줍니다.
4. background color를 hexColor로 바꿔줍니다

[출처] https://www.youtube.com/watch?v=c5SIG7Ie0dM

## 2.Counter
### 구현화면
![counter-1](https://user-images.githubusercontent.com/50866506/102099005-2a7a1a00-3e6b-11eb-9d7e-9fcef011c120.JPG)
![counter-app-js](https://user-images.githubusercontent.com/50866506/102099009-2b12b080-3e6b-11eb-9f89-743d758125c0.JPG)
![counter-3](https://user-images.githubusercontent.com/50866506/102099010-2b12b080-3e6b-11eb-8e29-0f1c19d7ddf4.JPG)

버튼을 누르면 숫자가 증가,감소,리셋됩니다.
### 코드설명
#### app.js
![counter-2](https://user-images.githubusercontent.com/50866506/102099001-29e18380-3e6b-11eb-8ac5-219909da4506.JPG)

1. forEach 함수를 이용해 각 버튼의 EventListener를 등록하였습니다.
2. 각 버튼이 클릭되면 "감소버튼"인지, "증가버튼"인지, "리셋버튼"인지 판단한 후
3. 숫자변수 count를 변화시킨후 dom의 value 값에 적용합니다.

[출처] https://www.youtube.com/watch?v=c5SIG7Ie0dM
## 3.Video-project
### 구현화면
![video-project-1](https://user-images.githubusercontent.com/50866506/102099768-ffdc9100-3e6b-11eb-9860-d4344f396789.JPG)

### 코드설명
#### index.html
![video-index-html](https://user-images.githubusercontent.com/50866506/102099771-ffdc9100-3e6b-11eb-979e-eda6b72f07ba.JPG)

1. controls 컨트롤 가능하고 autoplay 자동으로 실행되며 loop 반복 재생하는 video 태그를 만들었습니다.
2. source 태그를 이용해 mp4형식의 video 데이터를 지정했습니다.

#### app.js 
![video-app-js](https://user-images.githubusercontent.com/50866506/102099766-feab6400-3e6b-11eb-9c60-2cf0414f807f.JPG)

1. dom으로부터 video를 받아 autoplay 자동재생을 true로 , loop 반복재생을 true롤 설정하였습니다.
   
[출처] https://www.youtube.com/watch?v=c5SIG7Ie0dM
