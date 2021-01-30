let ul = false;
function displayModal(type){
    if (type === 'ul') {
        if (!ul){
            document.getElementById('modal-ul').style.display = 'flex';
        } else {
            document.getElementById('modal-ul').style.display = 'none';
        }
        ul = !ul;
    } else {
    }
}