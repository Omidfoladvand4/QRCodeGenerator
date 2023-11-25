

const $ = document

const wrapper = $.querySelector('.wrapper')
const input = $.querySelector('input')
const button = $.querySelector('button')
const img = $.querySelector('img')


button.addEventListener('click' , () => {
   let inputValue = input.value.trim();
    if (!inputValue) {
        alert('input is empty')
    }else{
        button.innerHTML = 'generating QR code...';
        img.setAttribute('src' , `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`);
        img.addEventListener('load' , () => {
            wrapper.classList.add('active')
            button.innerHTML = 'generate QR code';
        })
    }

    
})
input.addEventListener('keyup' , () => {
      if(!input.value.trim()){
        wrapper.classList.remove('active')
      }
})

