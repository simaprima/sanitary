$(function() {
    $('#menu-left a').click(function() {
        let file = $(this).attr('data-file');
        //console.log(file);
        $('#content').load('/media/pages/'+file);
    });
});

// src=''
// poster=''
// preload = 'none' пока пользователь не нажмет - не грузит
// preload = 'auto'
// preload = 'metadata' сообщает браузеру высоту, размер
// autoplay  - автоматическая загрузка на странице
// loop='true' - булевое значение (либо есть, либо его нет)
// controls
// muted - тихо, без звука
// width, height
// <video controls>
    //<source src=''/>
    // </video>  
// у видео есть свои события, методы, свойства. 
// события: - progress, - canplaythrought(момент, когда медиа файл готов к воспроизведению), -canplay, -ended, - pause, - error
// методы: - play, -pause, -load
// свойства: - paused, - ended, -duration(возвращает продолжительность файлов в секундах), -currentTime, - error (возвращает саму ошибку), - buffered

var name1, name2;
function initiate() {
    name1 = document.getElementById('firstname');
    name2 = document.getElementById('lastname');
    name1.addEventListener('input', validation);
    name2.addEventListener('input', validation);
    validation();
}
function validation() {
    if (name1.value == '' && name2.value == '') {
        name1.style.background = 'green';
        name2.style.background = 'green';
        name1.setCustomValidity('Заполните хотя бы одно поле');
    }else{
        name1.style.background = 'red';
        name2.style.background = 'red';
    }
}
addEventListener('load', initiate);