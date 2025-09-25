function changeBackgroundColor() {
  // ここに背景色を変える処理を書く。
  const checkElement = document.querySelector('#check')
  
  checkElement.addEventListener('change',() =>{
    const textElement = document.querySelector('#text')
    if(checkElement.checked){
      textElement.style.backgroundColor ='red';
    }else{
      textElement.style.backgroundColor = 'white';
    }
  }
  );

}

window.addEventListener('load',changeBackgroundColor);
