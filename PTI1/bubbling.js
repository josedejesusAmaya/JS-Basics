const father = document.querySelector('.father');
const child = document.querySelector('.child');

father.addEventListener('click',function (e) {
    console.log(e.eventPhase,e.currentTarget.className)
});
child.addEventListener('click',function (e) {
    console.log(e.eventPhase,e.currentTarget.className);
});
