let ul = false;
papaya.Container.startPapaya();
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

function openDICOM(){
    papaya.Container.addImage(0, document.getElementsByName('dicom').values()[0]);
    //papaya.Container.showImage(0,1);
}