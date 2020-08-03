'use script'
{

  const katudou = document.getElementById('katudou');
  const zisseki = document.getElementById('zisseki');
  const close = document.getElementById('close');
  const close2 = document.getElementById('close2');
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');
  const modal2 = document.getElementById('modal2');
  const hannba = document.getElementById('hannba');
  const saidoback = document.getElementById('saidoback');
  const batu = document.getElementById('batu');


  // 活動
  katudou.addEventListener('click',() =>{
    modal.classList.remove('hid');
    mask.classList.remove('hid');
    saidoback.classList.add('kesu');
  });
  // 活動

  // 実績
  zisseki.addEventListener('click',() =>{
    modal2.classList.remove('hid');
    mask.classList.remove('hid');
    saidoback.classList.add('kesu');
  });
  // 実績

  close.addEventListener('click',() =>{
    modal.classList.add('hid');
    mask.classList.add('hid');
  });

  close2.addEventListener('click',() =>{
    modal2.classList.add('hid');
    mask.classList.add('hid');
  });
  
  mask.addEventListener('click',() =>{
    modal.classList.add('hid');
    mask.classList.add('hid');
  });
  
  mask.addEventListener('click',() =>{
    modal2.classList.add('hid');
    mask.classList.add('hid');
  });

  hannba.addEventListener('click',() =>{
    saidoback.classList.remove('kesu');
    mask.classList.remove('hid');
  });

  mask.addEventListener('click',() =>{
    saidoback.classList.add('kesu');
    mask.classList.add('hid');
  });

  batu.addEventListener('click',() =>{
    saidoback.classList.add('kesu');
    mask.classList.add('hid');
  });
  

















}









































































