document.getElementById('triangle-button').addEventListener('click', function(){
    const a = toParseFloat('triangle-value-one');
    const b = toParseFloat('triangle-value-two');
    const totalArea = .5 * a * b ;
     addElement('Triangle Area ---------'+' ' +  totalArea);
})