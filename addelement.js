let count =0;
function addElement( value){
    count = count + 1;
    const createElement = document.createElement('p');
    createElement.innerText = count +' ' + ' ' + value;
    document.getElementById('addelement').appendChild( createElement);
    

    

}