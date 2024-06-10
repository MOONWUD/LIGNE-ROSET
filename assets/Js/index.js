$('.box').each(function () {
  $(this).on('wheel', (e) => {
    e.preventDefault(); // 여기에서는 스크롤 기본 성격 제거

    let delta = e.originalEvent.deltaY;

    // const nextBox = this.nextElementSibling;
    const nextBox = $(this).next()[0];
    const prevBox = $(this).prev()[0];
    let currentTop = null;
    if(delta > 0) { // 휠 내렸을 때
      //  console.log(delta);
     
     /*
      if(nextBox) {
        currentTop = nextBox.offsetTop;
      } else {
        currentTop = this.offsetTop; // 다음 박스의 값이 없는 경우 현재 박스의 높이를 반환
      }
      */
     currentTop = nextBox ? nextBox.offsetTop : this.offsetTop;
    } else { // 휠 올렸을 때
      if(prevBox) {
        currentTop = prevBox.offsetTop;
      } else {
        // currentTop = 0; 첫번째 박스에 도달하면 높이값을 0으로 반환
        return; // 이전 박스의 값이 없는 경우 벗어남
      }
    }
    scrollTo ({
      top: currentTop,
      behavior: 'smooth'
    })
  });
});