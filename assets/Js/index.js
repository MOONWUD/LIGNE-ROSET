/*===== fullpage */

/*=== fullpage JAVA */
$('.box').each(function () {
  $(this).on('wheel', (e) => {
    e.preventDefault();

    let delta = e.originalEvent.deltaY;

    const nextBox = $(this).next()[0];
    const prevBox = $(this).prev()[0];
    let currentTop = null;
    if (delta > 0) { // 휠 내렸을 때
      currentTop = nextBox ? nextBox.offsetTop : this.offsetTop;
    } else { // 휠 올렸을 때
      if (prevBox) {
        currentTop = prevBox.offsetTop;
      } else {
        return;
      }
    }
    scrollTo({
      top: currentTop,
      behavior: 'smooth'
    })
  });
});


/*=== fullpage GSAP */
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let sections = gsap.utils.toArray(".box");

function goToSection(i) {
  gsap.to(window, {
    scrollTo: { y: i * innerHeight, autoKill: false, ease: "easeIn" },
    duration: 0.9,
  });
}

ScrollTrigger.defaults({
   // markers: true
});

sections.forEach((eachPanel, i) => {

  ScrollTrigger.create({
    trigger: eachPanel,
    onEnter: () => goToSection(i)
  });

  ScrollTrigger.create({
    trigger: eachPanel,
    start: "bottom bottom",
    onEnterBack: () => goToSection(i)
  });
});



/*===== header */
$(window).on('scroll', () => {
  const box1 = $('.box').eq(1).offset().top - 100;
  const box2 = $('.box').eq(5).offset().top - 100;
  const box3 = $('.box').eq(6).offset().top - 100;
  if (scrollY > box1) {
    $('header').addClass('active');
    if (scrollY >= box2) {
      $('header a .logo img ').attr({ src: "./assets/images/logo_w.png" })
      $('header .rightContents img ').attr({ src: "./assets/images/email_w.png" })
      $('header').addClass('show');
    } else {
      $('header a .logo img ').attr({ src: "./assets/images/logo_b.png" })
      $('header .rightContents img ').attr({ src: "./assets/images/email_b.png" })
      $('header').removeClass('show');
    }
    if (scrollY >= box3) {
      $('header a .logo img ').attr({ src: "./assets/images/logo_b.png" })
      $('header .rightContents img ').attr({ src: "./assets/images/email_b.png" })
      $('header').removeClass('show');
    }
  } else {
    $('header').removeClass('active');
  }
});


/*===== nav */
$(window).on('scroll', () => {
  const idx = Math.floor(scrollY / $(window).height());
  $('.navWrapper li a').removeClass('current').eq(idx).addClass('current');

});
$('.navWrapper li').on('click', (e) => {
  const idx = $(e.currentTarget).index();
  const currentBox = $(window).height() * idx;

  $('html, body').stop().animate({ scrollTop: currentBox }, 800, 'easeInOut')
});


/*===== main */
/*=== img */
let num = 0;
const imgs = () => {
  for (let i = 1; i <= 2; i++) {
    num += i;
    if (num <= 90) {
      $('.mainGrid .mainGrid_item').eq(0).children().attr({ src: `./assets/images/p_${num}.jpg` });
      $('.mainGrid .mainGrid_item').eq(1).children().attr({ src: `./assets/images/p_${num + 2}.jpg` });
      $('.mainGrid .mainGrid_item').eq(2).children().attr({ src: `./assets/images/p_${num + 4}.jpg` });
      $('.mainGrid .mainGrid_item').eq(3).children().attr({ src: `./assets/images/p_${num + 3}.jpg` });
      $('.mainGrid .mainGrid_item').eq(4).children().attr({ src: `./assets/images/p_${num + 7}.jpg` });
      $('.mainGrid .mainGrid_item').eq(5).children().attr({ src: `./assets/images/p_${num + 6}.jpg` });
      $('.mainGrid .mainGrid_item').eq(6).children().attr({ src: `./assets/images/p_${num + 5}.jpg` });
      $('.mainGrid .mainGrid_item').eq(7).children().attr({ src: `./assets/images/p_${num + 8}.jpg` });
      $('.mainGrid .mainGrid_item').eq(8).children().attr({ src: `./assets/images/p_${num + 9}.jpg` });
      $('.mainGrid .mainGrid_item').eq(9).children().attr({ src: `./assets/images/p_${num + 12}.jpg` });
      $('.mainGrid .mainGrid_item').eq(10).children().attr({ src: `./assets/images/p_${num + 11}.jpg` });
      $('.mainGrid .mainGrid_item').eq(11).children().attr({ src: `./assets/images/p_${num + 10}.jpg` });
      $('.mainGrid .mainGrid_item').eq(12).children().attr({ src: `./assets/images/p_${num + 13}.jpg` });
      $('.mainGrid .mainGrid_item').eq(13).children().attr({ src: `./assets/images/p_${num + 14}.jpg` });
      $('.mainGrid .mainGrid_item').eq(14).children().attr({ src: `./assets/images/p_${num + 18}.jpg` });
      $('.mainGrid .mainGrid_item').eq(15).children().attr({ src: `./assets/images/p_${num + 16}.jpg` });
      $('.mainGrid .mainGrid_item').eq(16).children().attr({ src: `./assets/images/p_${num + 17}.jpg` });
      $('.mainGrid .mainGrid_item').eq(17).children().attr({ src: `./assets/images/p_${num + 15}.jpg` });
      $('.mainGrid .mainGrid_item').eq(18).children().attr({ src: `./assets/images/p_${num + 19}.jpg` });
      $('.mainGrid .mainGrid_item').eq(19).children().attr({ src: `./assets/images/p_${num + 25}.jpg` });
      $('.mainGrid .mainGrid_item').eq(20).children().attr({ src: `./assets/images/p_${num + 28}.jpg` });
      $('.mainGrid .mainGrid_item').eq(21).children().attr({ src: `./assets/images/p_${num + 22}.jpg` });
      $('.mainGrid .mainGrid_item').eq(22).children().attr({ src: `./assets/images/p_${num + 23}.jpg` });
      $('.mainGrid .mainGrid_item').eq(23).children().attr({ src: `./assets/images/p_${num + 24}.jpg` });
      $('.mainGrid .mainGrid_item').eq(24).children().attr({ src: `./assets/images/p_${num + 20}.jpg` });
      $('.mainGrid .mainGrid_item').eq(25).children().attr({ src: `./assets/images/p_${num + 26}.jpg` });
      $('.mainGrid .mainGrid_item').eq(26).children().attr({ src: `./assets/images/p_${num + 27}.jpg` });
      $('.mainGrid .mainGrid_item').eq(27).children().attr({ src: `./assets/images/p_${num + 21}.jpg` });
    } else {
      break;
    }
  }
};
setInterval(imgs, 2000);

/*=== box */
gsap.to(".main .mainGrid .motionLogo .contentsTop .logo img", {
  scrollTrigger: {
    trigger: '.main',//객체기준범위
    start: "0% 0%",//시작 지점
    end: "200% 100%",//끝 지점
    scrub: 1,//부드러운 스크러빙
     // markers: true,개발가이드선
  },
  y: 300,
  scale: 1.2,
  duration: 0.5,
  opacity: 0.8,
});


/*===== togo */
/*=== box */
gsap.to(".togo .contents .title", {
  scrollTrigger: {
    trigger: '.togo',
    start: "0% 0%",
    end: "100% 100%",
    scrub: 1,
  },
  y: 0,
  scale: 1.4,
  duration: 0.4,
  opacity: 1,
});


/*===== philosophy -> michelDucaroy */
$(window).on('scroll', () => {
  let michelDucaroytHt = $('.michelDucaroy').offset().top - 450;
  if (scrollY > michelDucaroytHt) {
    $('.michelDucaroy').addClass('show');
    
  } else {
    $('.michelDucaroy').removeClass('show');
  }
})
$(window).on('scroll', () => {
  let philosophytHt = $('.philosophy').offset().top + 350;
  if (scrollY > philosophytHt) {
    $('.philosophy').addClass('show');
    
  } else {
    $('.philosophy').removeClass('show');
  }
})


/*===== footer */
/*=== title */

const content = "LIGNE - ROSET";
const text = document.querySelector(".footer .title .text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 300)