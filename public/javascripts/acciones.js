fetch('/api/colegios', {
    method: 'GET'
}).then(function(res){
    return res.json();
}).
then(function(data){
    JSON.stringify(data);
    document.querySelector('#cosas')
    alert(data.items[0].Nombre);
});