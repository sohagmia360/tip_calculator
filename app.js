// all selection 
const mainBillInput = document.querySelector('.main_bill input');
const TipTaka  = document.querySelector('.TipTaka');
const totalTaka  = document.querySelector('.totalTaka');
const resatBtn = document.querySelector('.resetBtn button');
const numbersOfPeople = document.querySelector('.numbers_of_people input') 
const select_tip_persent = document.querySelectorAll('.select_tip_persent .persent')
const custom_persent = document.querySelector('.custom_persent input')
const btntry  = document.querySelector('.btntry')
const modal = document.querySelector('.modal')
const modalClose  = document.querySelector('.modalClose')



// all Event Listener 

document.addEventListener('DOMContentLoaded', ()=>{
    modal.classList.add('active')
})
modalClose.addEventListener('click', closeModal)

custom_persent.addEventListener('keyup', ()=>{
    customPersent()
    console.log('cliked')
})

mainBillInput.addEventListener('keyup', ()=>{
    Calculation()
})

resatBtn.addEventListener('click', ()=>{
    Resat()
})


// all Function 

function getPersent(){
    select_tip_persent.forEach((deget)=>{
        console.log(deget.innerText)
        deget.addEventListener('click', (e)=>{
            let value = Math.floor(parseFloat(e.target.innerText))
            let mainBillValue = parseFloat(mainBillInput.value)
            let  parsentValue = parseFloat(((mainBillValue * value) / 100).toFixed(2))
            let totalTakaValue = (mainBillValue + parsentValue).toFixed(2)
             console.log(totalTakaValue)
             TipTaka.innerHTML = parsentValue
             totalTaka.innerHTML = totalTakaValue
            
        })
    })
}
getPersent()

function Calculation(){
   if(mainBillInput.value){
    let OrninalBill = parseFloat(mainBillInput.value).toFixed(2)
    TipTaka.innerHTML = `$${OrninalBill}`
    totalTaka.innerHTML = `$${OrninalBill}`
   }

}

function customPersent(){
    if(custom_persent.value){
    let customValue = parseInt(custom_persent.value)
    let mainBillValue = parseFloat(mainBillInput.value)
    let customPersentice = (mainBillValue * customValue) / 100
    let totalTakaValue = (mainBillValue + customPersentice).toFixed(2)
    console.log(totalTakaValue)
    TipTaka.innerHTML = customPersentice.toFixed(2)
    totalTaka.innerHTML = totalTakaValue
    console.log(customPersentice)
    }
}

function Resat(){
    mainBillInput.value = ''
    numbersOfPeople.value = ''
    custom_persent.value = ''
    TipTaka.innerHTML = '$0.00'
    totalTaka.innerHTML = '$0.00'
}

function closeModal(){
    modal.classList.remove('active')
}