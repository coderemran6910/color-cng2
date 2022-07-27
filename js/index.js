function onChange(cng){
  
  const bg = document.querySelector('.bgcolor');
  const text = document.querySelector('.card');
  bg.style.background = cng.value;
  
  const textValue = cng.options[cng.selectedIndex].text;
  text.innerHTML= textValue;
}