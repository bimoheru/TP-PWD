$(document).ready(function(){
    $('#showPass').click(function(){
        const input = $('#password');
        const type = input.attr('type') === 'password' ? 'text' : 'password';
        input.attr('type', type);
    })
})