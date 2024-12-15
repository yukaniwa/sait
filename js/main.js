'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}





{
  function callback(entries,obs){
    entries.forEach(entry =>{
      if(!entry.isIntersecting){
        return;
      }

      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  }
  const options={
    threshold:0.2,    //20%超えた場合
  };

  const observer = new IntersectionObserver(callback,options);   //場所取得
  const targets = document.querySelectorAll(".name3 , .niwa3 , .desc , .skills1 , .ini ,.Works1 ");  //監視する3つ物取得

 

  targets.forEach(target => {  //1つ1つバラバラにして
    observer.observe(target); //observe()でobserverに入ればtargetを監視対象内に
  });

}



{
  function scrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("scrolled");
        toTop.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
        toTop.classList.remove("scrolled");
      }
    });
  }


  const toTop =document.getElementById("to_top");

  toTop.addEventListener("click",e=>{
    e.preventDefault();
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  })


  const header = document.querySelector("header");


  const scrollObserver = new IntersectionObserver(scrollCallback);
  scrollObserver.observe(document.getElementById("target-2"));
}



