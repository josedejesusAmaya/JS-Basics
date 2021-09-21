let table = document.getElementById('bagua-table');

table.onclick = function (event) {
    let target = event.target;
    if (target.tagName != 'TD') return;

    highlight(target);
}

function highlight(node) {
    let selectedTd;
    selectedTd = node;
    selectedTd.classList.contains('highlight') ? selectedTd.classList.remove('highlight') : selectedTd.classList.add('highlight');
}