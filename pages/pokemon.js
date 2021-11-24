import Link from 'next/link';

export default function Pokemon({ allPokemon }) {
  return (
    <ul>
      {allPokemon.results.map((pokemon) => (
        <li key={pokemon.name}>
          <Link href={`pokemon/${pokemon.name}`}>
            <a>{pokemon.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
  const allPokemon = await res.json();
  return {
    props: {
      allPokemon,
    },
  };
}
