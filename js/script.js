const apiKey = 'RGAPI-961d9027-db7c-48c0-b934-88aeb65be92c';
const btnBuscar = document.getElementById('buscar');
const nm_invocador = document.getElementById('nm_invocador');
const profile_img = document.getElementById('profile_img');

async function getResponse() {
    try {
        const response = await fetch(
            `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nm_invocador.value}?api_key=${apiKey}`,
        );
    
        return (data = await response.json());
    } catch ( e ) {
        alert(`Invocador ${nm_invocador.value} não encontrado!`);
        nm_invocador.value = "";
        nm_invocador.focus();
    }
}

btnBuscar.addEventListener('click', function (event) {
	event.preventDefault();
	let name;
	let lvl_invocador;
    let profileIconId;
    let url_profile_icon; 

	if (nm_invocador.value == '') {
		alert('Preencha o nome do invocador!');
		nm_invocador.focus();
	} else {
		name = document.getElementById('name');
		lvl_invocador = document.getElementById('lvl_invocador');

		getResponse().then((invocador) => {
			name.innerText = invocador.name;
			lvl_invocador.innerText = invocador.summonerLevel;
            profileIconId = invocador.profileIconId;
            url_profile_icon = `http://ddragon.leagueoflegends.com/cdn/12.15.1/img/profileicon/${profileIconId}.png`;
            profile_img.setAttribute('src', url_profile_icon);
		});
	}
});
