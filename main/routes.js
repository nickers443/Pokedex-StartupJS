export default (components = {}) => [
  {
    path: '/',
    exact: true,
    component: components.PHome
  },
  {
    path: '/about',
    exact: true,
    component: components.PAbout
  },
  {
    path: '/addpokemon/',
    exact: true,
    component: components.PAddPokemon
  },
  {
    path: '/info/:pokemonId',
    exact: true,
    component: components.PInfoPokemon
  }
]
