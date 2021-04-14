$(function() {
    $('#menu-left a').click(function() {
        let file = $(this).attr('data-file');
        //console.log(file);
        $('#content').load('/media/pages/'+file);
    });
});

// src=''
// poster=''
// preload = 'none' ���� ������������ �� ������ - �� ������
// preload = 'auto'
// preload = 'metadata' �������� �������� ������, ������
// autoplay  - �������������� �������� �� ��������
// loop='true' - ������� �������� (���� ����, ���� ��� ���)
// controls
// muted - ����, ��� �����
// width, height
// <video controls>
    //<source src=''/>
    // </video>  
// � ����� ���� ���� �������, ������, ��������. 
// �������: - progress, - canplaythrought(������, ����� ����� ���� ����� � ���������������), -canplay, -ended, - pause, - error
// ������: - play, -pause, -load
// ��������: - paused, - ended, -duration(���������� ����������������� ������ � ��������), -currentTime, - error (���������� ���� ������), - buffered

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
        name1.setCustomValidity('��������� ���� �� ���� ����');
    }else{
        name1.style.background = 'red';
        name2.style.background = 'red';
    }
}
addEventListener('load', initiate);