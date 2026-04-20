import FadeIn from "../components/FadeIn";
import typography1 from "../images/typography-1.png";
import typography2 from "../images/typography-2.png";
import typography3 from "../images/typography-3.png";

const typography = () => {
  return (
    <div>
      <header className="bg-[#c3bcff] grid w-screen relative left-1/2 -translate-x-1/2">
        <h1 className="text-7xl font-extrabold text-center mb-10 mt-10">
          Typography
        </h1>

        <h1 className="text-9xl font-extrabold text-center mt-2">DM Sans</h1>
        <h2 className="text-7xl font-bold text-center mt-6">DM Sans</h2>
        <h3 className="text-5xl  text-center mt-6 mb-5">DM Sans</h3>

        <p className="w-1/2 mx-auto mt-4 mb-16  ">
          We have selected DM Sans as the primary typeface for SkillMatch. Its
          geometric, low-contrast design ensures optimal legibility and a modern
          aesthetic that aligns perfectly with our brand identity.
        </p>
      </header>

      <FadeIn as="section">
        <h2 className="text-4xl font-bold mt-2 mb-5">Why DM Sans?</h2>
        <h3 className="text-xl font-medium mt-6 mb-5">Readability</h3>
        <p>
          DM Sans is crafted for clarity, making it highly accessible for all
          users. By prioritizing legible letterforms, SkillMatch ensures that
          users can process information quickly and comfortably, reducing visual
          strain during project creation.
        </p>
        <h3 className="text-xl font-medium mt-6 mb-5">Clean Design</h3>
        <p>
          In line with our "simple and efficient" design philosophy, DM Sans
          provides a sleek, uncluttered interface. It maintains a professional
          yet approachable look, helping both students and professionals
          navigate SkillMatch with ease.
        </p>
        <h3 className="text-xl font-medium mt-6 mb-5">Multilingual Support </h3>
        <p>
          As SkillMatch grows to support a global community, DM Sans provides
          the robust character sets and glyphs necessary for seamless
          localization. This flexibility allows us to offer a consistent,
          high-quality user experience for users all over the world.
        </p>
      </FadeIn>

      <FadeIn as="section">
        <div className="header-guide">
          <h2 className="text-4xl font-bold mt-9">Headings</h2>
          <div className="mt-6 flex flex-col">
            <div className="grid grid-cols-3 gap-4">
              <p className="font-bold">Title</p>
              <p className="font-bold">Weight</p>
              <p className="font-bold">Size</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col">
            <div className="grid grid-cols-3 gap-4">
              <p className="font-extrabold">Heading 1 </p>
              <p className="font-extrabold">Extra Bold</p>
              <p className="font-extrabold">40px</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col">
            <div className="grid grid-cols-3 gap-4">
              <p className="font-semibold">Heading 2</p>
              <p className="font-semibold">Semi Bold</p>
              <p className="font-semibold">24px</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col">
            <div className="grid grid-cols-3 gap-4">
              <p className="font-medium">Heading 3</p>
              <p className="font-medium">Medium</p>
              <p className="font-medium">20px</p>
            </div>
          </div>
        </div>

        <div className="body-text-guide">
          <h2 className="text-4xl font-bold mt-9">Body Text</h2>

          <div className="mt-6 flex flex-col gap-4 ">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <p>Body Text Regular</p>
              <p>Regular</p>
              <p>1rem/16px</p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="flex flex-col gap-9">
        <h2 className="text-4xl font-bold">UI Application</h2>

        <div className="grid grid-cols-2 gap-4">
          <h3 className="font-medium text-xl">Page Example 1</h3>
          <img src={typography1.src} alt="" className="rounded-xl" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <h3 className="font-medium text-xl order-last">Page Example 2</h3>
          <img src={typography2.src} alt="" className="rounded-xl" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-20">
          <h3 className="font-medium text-xl">Page Example 3</h3>
          <img src={typography3.src} alt="" className="rounded-xl" />
        </div>
      </FadeIn>
    </div>
  );
};

export default typography;
