import TransitionLink from "./TransitionLink";

const Navigation = () => {
  return (
    <header>
      <nav className="flex justify-between bg-blue-700 text-white p-6 text-3xl">
        <h1>Style Guide</h1>

        <div className="flex gap-5 text-lg ">
          <TransitionLink href="/" label="Home" />
          <TransitionLink href="/logoSymbol" label="Logo And Symbol" />
          <TransitionLink href="/typography" label="Typograpy" />
          <TransitionLink href="/colors" label="Colors" />
          <TransitionLink href="/iconography" label="Graphics And Icons" />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
