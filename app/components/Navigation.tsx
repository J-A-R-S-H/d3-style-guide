import TransitionLink from "./TransitionLink";

const Navigation = () => {
  return (
    <header>
      <nav className="flex justify-between bg-[#ffffb9] text-black p-6 text-3xl">
        <h2>Style Guide</h2>

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
