let res = document.getElementById('input')

function display(num){

    res.value = res.value + num;
}

function Calculate(){
    try{
        res.value = eval(res.value)
    }
    catch(e){
        alert('Invalid')
    }
}

function Clear(){

    res.value = '';
}

function del(){

    res.value = res.value.slice(0, -1);
}