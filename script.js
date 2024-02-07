var validation = ()=>{
    try{
        if($('.username').val().length === 0){
            $('.username').addClass('red').removeClass('green')
            if($('.password').val().length < 6) {
                $('.password').addClass('red').removeClass('green')}
            throw new Error('No Username provided...')
        } 
        $('.username').addClass('green').removeClass('red') 
        if($('.password').val().length < 6) {
            $('.password').addClass('red').removeClass('green')
            throw new Error('Password is too short')    
        }
        $('.password').addClass('green').removeClass('red')
        $('p').html('Password is good to go!')
    }
    catch(err){  
        $('p').html(err.message)
    }    
}
$(document).ready(()=>{
    $('body').append($('<div>').addClass('container'))
    $('div').append($('<label>Username: </label>').attr('for','username')).append($('<input>').attr({'type':'text','id':'username'}).addClass('username'))
    $('div').append($('<label>Password: </label>').attr('for','password')).append($('<input>').attr({'type':'password','id':'password'}).addClass('password'))
    $('div').append($('<button>Submit</button>').addClass('button')).append($('<p>'))
    $('.button').click(function () { validation() })
})