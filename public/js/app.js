$( document ).ready(function() {
    console.log( "ready!" );

    function submitAnimal(e) {
      e.preventDefault();
      console.log("ABout to submit")
      var name = $('#name').val();
      var species = $('#species').val();
      var color = $('#color').val();
      $.ajax({
        url: '/post',
        method: 'POST',
        data: {
        name: name,
        species: species,
        color: color
      }
      }).done(function (data) {
        console.log("Submited", data);
        window.location = "/view";
      })
    }

    $("#newAnimalForm").on('click', submitAnimal);

});
