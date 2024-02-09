export const Header = () => {
  return (
    <header
      data-testid="header"
      className="flex w-full flex-col items-center justify-center gap-4 border-b-2 border-b-slate-500 bg-gray-50 p-5"
    >
      <h1 className="text-center text-xl font-semibold">
        Explore a evolução populacional
        <em className="block text-lg">São José dos Campos</em>
      </h1>
      <h2 className="text-center">clique nos bairros destacados</h2>
    </header>
  )
}
