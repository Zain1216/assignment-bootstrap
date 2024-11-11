$(document).ready(()=>
{
    $.get('navbar.html',(data)=>{
        $('#navbar').html(data)
    })

    $.get('footer.html',(data)=>{
        $('#footer').html(data)
    })
})