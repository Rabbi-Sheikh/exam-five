document.getElementById('triangle-button').addEventListener('click', function(){
    const a = toParseFloat('triangle-value-one');
    const b = toParseFloat('triangle-value-two');
    const totalArea = .5 * a * b ;
     addElement('Triangle Area ---'+' ' +  totalArea);
})
document.getElementById('rectangle-button').addEventListener('click', function(){
    const a = toParseFloat('rectangle-value-one');
    const b = toParseFloat('rectangle-value-two');
    const totalArea = a * b ;
     addElement('Rectangle Area ---'+' ' +  totalArea);
})

document.getElementById('blog-button').addEventListener('click', function(){
    window.location.href = '/blog.html'
})