document.getElementById('search-btn').addEventListener('click', async () => {
    const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Pokémon não encontrado');
        const data = await response.json();

        // Atualizar informações do Pokémon
        document.getElementById('pokemon-title').textContent = data.name.toUpperCase();
        document.getElementById('pokemon-image').src = data.sprites.front_default;
        document.getElementById('pokemon-image').style.display = 'block';
        document.getElementById('peso').textContent = `${data.weight / 10} kg`;
        document.getElementById('altura').textContent = `${data.height / 10} m`;

        // Habilidades
        const abilities = data.abilities.map(ability => ability.ability.name).join(', ');
        document.getElementById('habilidades').textContent = abilities;

        // Estatísticas
        const statsList = document.getElementById('stats');
        statsList.innerHTML = '';
        data.stats.forEach(stat => {
            const li = document.createElement('li');
            li.textContent = `${stat.stat.name}: ${stat.base_stat}`;
            statsList.appendChild(li);
        });
    } catch (error) {
        alert(error.message);
    }
});