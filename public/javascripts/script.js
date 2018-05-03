$(document).ready(function() {
	
$('#fetch-all').click(function() {
	axios
		.get('/api/characters')
		.then((responseFromApi) =>  {
			$('characters-container').empty();
			responseFromApi.data.forEach((eachCharacter) => {
				$('.characters-container').append(`
				
					<div class="character-info">
					<div class="name">Name: ${eachCharacter.name}</div>
					<div class="occupation">Occupation: ${eachCharacter.occupation}</div>
					<div class="Weapon">Weapon: ${eachCharacter.weapon}</div>
					<div class="Cartoon">Cartoon: ${eachCharacter.cartoon}</div>
					<div class="theID">ID: ${eachCharacter._id}</div>

				`)
			})
		
		});
	})
	.catch(err => {
		next(err);
	});
});


$('#fetch-one').click(function() {
	const theID = $('.character-id').val();
	axios.get(`/api/characters/${theID}`)
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
		console.log(err);
	})
});