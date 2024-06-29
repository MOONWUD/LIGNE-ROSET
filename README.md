# 가구 브랜드 LIGNE-ROSET 🛋️ #

## Overview 💫
  리네로제는 한국에서도 큰 인기를 얻고 있지만, 한국 공식 사이트는 없어         
  리네로제만의 고유한 브랜드 가치를 담아 새롭게 퍼블리싱 해보았습니다.                 
  
## Design
  🎯 Keyword           
    # 깔끔함  # 통일감 # 담백함 # 부드러운             
    - 둥근 각을 가진 사각형으로 통일, 부드러운 이미지를 줌                   
    - 얇은 선을 활용해 깔금한 이미지를 줌              
    - 꾸밈 요소를 자제해 담백한 이미지를 줌                
                      
  🎯 Color       
    
  ![F6F6F6](https://github.com/MOONWUD/LIGNE-ROSET/assets/160007468/7567894a-ab17-4602-ac01-3ce066304c2c)
  ![dddddd](https://github.com/MOONWUD/LIGNE-ROSET/assets/160007468/824c36d7-52d2-43b0-8321-2e2ca7671187)
  ![777777](https://github.com/MOONWUD/LIGNE-ROSET/assets/160007468/47696917-8364-407e-a694-673842045219)
  ![222222](https://github.com/MOONWUD/LIGNE-ROSET/assets/160007468/60660026-599b-44cb-afe2-9126ac2f8ab9)

            
  🎯 Font   
  KO - Pretendard 프리텐다드     
  EN - 미정 미정 !!!!! 
  
## Publishing
  - gasp ScrollTo와 ScrollTrigger를 fullpage를 구현
  - 비동기 함수 setInterval를 활용해 사진이 바꾸는 event 구현
  - ScrollTrigger를 한 요소가 두 section을 이동하는 것처럼 구현 
  - scss의 @mixin과 @include를 활용해 자주 사용하는 폰트 스타일이나 버튼 스타일 저장
  - gird와 flex를 활용해 레이아웃 제작 / 제어
  - Hover를 통한 다양한 디자인 요소 적용
  - 다양한 PC사이즈 대응을 위한 미디어쿼리 추가 적용
  - Transform를 활용해 다양한 변형 적용
  - animation을 활용해 다양한 움직임 적용
  - transiton을 활용해 부드러운 움직임 적용
    
## Probloem & Solution
  - jQuery로 구현한 fullpage가 부드럽게 넘어가지 않음
    -> behavior: 'smooth'를 사용해 스크롤을 부드럽게 적용했으나 여전히 버벅거림                
    -> fullpage.js를 활용해보았지만, 다른 이벤트가 적용되지 않아 실패했음             
    => gsap를 활용해 부드러운 scroll 구현 (그러나 뚝딱거리는 현상 발생...! 나를 닮아 정이 감)         
                          
  - 한 요소가 두 sention을 이동하는 event를 구현하고자 했으나 무료플러그인의 한계로 어려움을 겪음
    -> transform을 이용해서 두 section의 겹치는 요소가 viewport같은 위치에 있도록 구현했지만
    -> 여전히 어색해서 스르륵 이동하게 구현하는 방법을 고려            
    => 두 section에 같은 요소를 넣고, transfrom과 gsap ScrollTrigger를 활용해 한 요소인 것처럼 구현       
            
  - hover 이벤트가 영역이 아닌 곳에서도 이벤트 발생
    -> 같은 버튼 스타일을 사용하였지만, 하나만 이상하게 제대로 작동하지 않아 원인을 찾음
    -> a태그를 감싸고 있는 부모요소에 margin: 0 auto;를 줘 가운데 정렬한 것이 원인.
    -> 문제가 되는 버튼에만 margin값을 초기화. 
    => a태그를 감싸고 있는 부모요소에 hover 이벤트를 주지 않고, a태그에 직접적으로 스타일과 이벤트를 줘 정확한 영역 적용
        
  - margin-top과 margin-bottom을 활용해 위아래 가운데 정렬을 맞췄으나 화면 크기에 따라 정렬이 무너짐
    -> 미디어쿼리를 활용해 맞추려고 했으나
    -> 다양한 PC사이즈를 감당할 수 없었음                
    => display gird의 align-content이나 place-items의 center 값을 줘 어느 PC 사이즈에서도 가운데에 있도록 구현               
         
## Review 🏋️
  디자인부터 퍼블리싱까지 혼자 완성하면서 난관 봉착과 난관 해결의 연속이었다.     
  타이트한 일정 속에서 난관에 부딪혀도 무너지지 않고 계속 나아가는 것을 배웠다.   
         
  첫번째 쉽게 포기하지 않는 것, 두번째 빠르게 다른 방향을 모색하는 것.                    
  이 마음가짐을 품고 프로젝트를 완성시켰다.       
           
  이번 프로젝트에선 시도해보지 않았던 fullpage style을 선택했다.       
  할 수 있는 것을 완벽하게 익히는 것도 중요하지만,       
  아직 배움이 부족하다 느껴 더 배울 수 있는 스타일에 도전했다. 
  다양한 fullpage style을 접하고 공부했다. 

  fullPage를 도전하면서 버벅거리는 문제점에      
  플러그인만 연결하면 모든게 해결될 거 같았다.        
  하지만 플러그인 연결이 또 다른 복병이 되었다. 
  GSAP를 연결하자 기존에 작성하였던 js가 버벅거리고 제대로 작동되지 않았다. 
  fullpage js를 활용하고자 하니 또 다른 문제가 발생했다. 
  
  과유불급이란 말을 되새기며,
  불필요한 코드를 덜어내고 다시 살을 붙였다. 

  fullpage style을 구현하기 위한 다양한 길이 존재하지만 
  내가 가야할 길이 어디인지 정확하기 파악하는 것이 중요하다 느꼈다. 
  
  처음 기획했던 100%를 완성하진 못했지만,            
  더 많은 시간이 주어진다면 해결하지 못한 수 많은 숙제를 풀고 싶다는 마음이 크다.        
  

     
      
### 240629_토
  - 타이틀 영문 폰트 고려하기
  - 오류 해결하기
              
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
