const form = document.querySelector('form');
//this use case gives you the empty value from the input
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }else if(weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }else {
    const bmi=(weight/ ((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML=`<span>${bmi}</span>`
    const guid = document.querySelector('#weight-guide');
    if (bmi < 18.6) {
      guid.children[1].style.color = 'orange';
    } else if (bmi > 24.9) {
      guid.children[3].style.color = 'red';
    } else {
      guid.children[2].style.color = 'green';
    }
    
  }
});
