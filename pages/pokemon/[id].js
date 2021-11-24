export default function Pokemon(pokemon) {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-2xl font-bold'>Single page {pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const pokemon = await res.json();
  return { props: pokemon };
}

export async function getStaticPaths() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
  const allPokemon = await res.json();

  const paths = allPokemon.results.map((pokemon) => {
    return {
      params: { id: pokemon.name },
    };
  });

  return { paths, fallback: false };
}
