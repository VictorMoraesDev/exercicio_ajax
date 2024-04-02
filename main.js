   $(document).ready(function() {
    $('#btn-profile-link').click(function(event) {
        event.preventDefault();
        const link  = `https://github.com/VictorMoraesDev`;
});

fetch('https://api.github.com/users/VictorMoraesDev')
    .then(function(resposta){
        return resposta.json();
    })

    .then(function(json) {
        $('#name').text(json.name);
        $('#username').text(json.login);
        $('#avatar').text(json.avatar);
        $('#following').text(json.following);
        $('#followers').text(json.followers);
        $('#repos').text(json.repos);
        });
    });
