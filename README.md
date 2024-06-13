# 가구 브랜드 LIGNE-ROSET 🛋️ #

## Overview 💫
  프랑스 명품 가구 브랜드하면 빼놓을 수 없는 리네로제.     
  세상에 나온지 50년이 훌쩍 지난 'TOGO'는 현재까지도 독특하고 신서한 디자인으로 많은 사랑을 받고 있습니다. 
  한국에서도 큰 인기를 얻고 있습니다. 여러 가구 플랫폼을 통해 구매할 수 있지만, 한국 공식 사이트는 존재하지 않습니다.
  리네로제만의 고유한 브랜드 가치를 담아 새롭게 퍼블리싱 해보았습니다. 
  
## Design
  🎯 Keyword           
    # 깔끔함  # 통일감 # 담백함 # 부드러운            
    (전체적으로 라운드를 주는 사각형으로 통일, 부드러운 이미지를 줌)         
                 
                      
  🎯 Color       
    
  ![F6F6F6](https://github.com/MOONWUD/LIGNE-ROSET/assets/160007468/7567894a-ab17-4602-ac01-3ce066304c2c)
  ![dddddd](https://github.com/MOONWUD/LIGNE-ROSET/assets/160007468/824c36d7-52d2-43b0-8321-2e2ca7671187)
  ![777777](https://github.com/MOONWUD/LIGNE-ROSET/assets/160007468/47696917-8364-407e-a694-673842045219)
  ![222222](https://github.com/MOONWUD/LIGNE-ROSET/assets/160007468/60660026-599b-44cb-afe2-9126ac2f8ab9)

            
  🎯 Font   
  KO - Pretendard 프리텐다드     
  EN - 미정 미정 ^^ 
  
## Publishing
  - gasp ScrollTo와 ScrollTrigger를 fullpage를 구현
  - 비동기 함수 setInterval를 활용해 사진이 바꾸는 event 구현
  - ScrollTrigger를 활용해 두 section에 연속되는 요소가 있는 것처럼 구현
  - scss의 @mixin과 @include를 활용해 자주 사용하는 폰트 스타일이나 버튼 스타일 저장
  - gird와 flex를 활용해 레이아웃 제작 / 제어
  - Hover를 통한 다양한 디자인 요소 적용
  - 다양한 PC사이즈 대응을 위한 미디어쿼리 추가 적용
  - Transform를 활용해 다양한 변형 적용
  - animation을 활용해 다양한 움직임 적용
    
## Probloem & Solution
    
## Review 🏋️
    
### 240612_수
  - 메인에서 togo로 자연스럽게 넘어가는 이벤트 고민 !
    -> togo를 작게 수정, logo가 이어지는 느낌으로 구현 완료

  - 여러 요소에 hover 이벤트 추가(전체적으로 커지거나 움찔거리는 이벤트)
  - footer title에 타이핑 이벤트 추가

### 240611_화
  - 자잘한 event
    - nav 페이지 이동 event 완료 
    - main 셋인터벌로 사진 변화 event 추가 완료
    - Philosophy에서 Michel Ducaroy 자연스럽게 이어지게 구현 완료
          
  - fullpage 이벤트를 gsap로 구현하니 다른 java가 구현되지 않는 문제 발생
    -> fullpage.js로 구현 고려
           
### 240610_월
  - 시멘틱 마크업 진행    
    -> fullpage니까 section으로 크게 나누기
  - html, scss 설계 완료 !
  - fullpage 이벤트 넣기
    - jQuery로 구현 완료하였으나 부드럽게 넘어가는 느낌이 들지 않음
      -> gsap로 구현

### 240607_금
  - 디자인 완성 !
  - 파일명 정리(productImg = p_1.jpg / designerImg = d_1.jpg)
  - 퍼블리싱 가이드 완성

### 240606_목 
  - 와이어프레임 제작
  - 스타일 가이드 완성
  - 디자인 구성
    -> 브랜드 정체성 찾기
      - 어울리는 컬러 고려, #000이 아닌 #ddd로 결정
      - 어울리는 폰트 고려, 원래 브랜드 폰트는 유료.. 비슷한 어울리는 폰트 찾기 !

### 240605_수
  - 새로운 프로젝트 시작 !
  - 래퍼런스 사이트 찾기
  - 브랜드에 적합한 디자인인지 고려
