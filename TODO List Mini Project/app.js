const input = document.querySelector('input')
const addBtn = document.getElementById('add');
const wrapper = document.querySelector('.wrapper');



addBtn.addEventListener('click', ()=>{
    if(input.value){

        let btns = document.createElement('div')
        let elem = document.createElement('div');
        let updateBtn = document.createElement('button')
        let delBtn = document.createElement('button')
        updateBtn.innerHTML='Edit';
        delBtn.innerHTML = 'Delete'
        elem.innerText = input.value;
        btns.append(updateBtn);
        btns.append(delBtn);
        wrapper.appendChild(elem)
        wrapper.appendChild(btns)
        input.value=""
    
        updateBtn.addEventListener('click', ()=> {
            let updateElem = elem.textContent;
            input.value = updateElem
            elem.textContent =""
            btns.innerHTML ="" 
        })
    
        delBtn.addEventListener('click', ()=>{
            elem.remove();
            btns.remove();
        })
    }

})