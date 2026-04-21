import FadeIn from "../components/FadeIn";
import Logo2 from "../images/color-logo-2.png";
import Logo1 from "../images/color-logo.png";
import Wordmark from "../images/wordmark-1.png";
import Wordmark2 from "../images/wordmark-2.png";
import GrayLogo from "../images/gray-logo.png";
import GrayLogo2 from "../images/gray-logo-2.png";
import ColorSymbol from "../images/color-symbol.png";
import GraySymbol from "../images/gray-symbol.png";
const page = () => {
  return (
    <div>
      <h1 className="text-7xl font-extrabold text-center mb-10 mt-10">
        Logo And Symbol
      </h1>

      <FadeIn as="section" className="flex gap-8 mt-14 grid grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-5">Logo</h2>
          <p>
            Whether you're just starting out or still getting the hang of
            things, our logo is the main way people recognize the Skill Match
            brand. It’s like our digital calling card—it shows up everywhere,
            from tiny corners of an app to big posters. This guide explains how
            we tweak and use the logo so it looks great no matter where you put
            it. Here is the breakdown: Small Details: How it looks in tight
            spaces or as a simple "sign-off." Big Moments: How it scales up for
            high-impact displays. Adaptability: The rules for changing the logo
            to fit different layouts and styles.
          </p>
        </div>
        <img src={Logo2.src} alt="Logo" className="rounded-xl" />
      </FadeIn>

      <FadeIn as="section" className="flex gap-5 mt-14 flex flex-col">
        <h2 className="text-4xl font-bold text-blue-700">Full Color Logo</h2>
        <p>
          A full color logo is like a bright, colorful sticker that uses pretty
          shapes and letters to tell you the name of a store. It uses lots of
          colors to look fun and friendly, just like a box of crayons!
        </p>
        <div className="grid grid-cols-3 gap-4">
          <article className="bg-white mb-2">
            <img
              src={Logo1.src}
              alt="Logo"
              className="h-full w-full object-contain bg-white mb-2"
            />
            <p>Primary Version</p>
          </article>
          <article className="bg-white mb-2">
            <img
              src={Wordmark.src}
              alt="Wordmark"
              className="h-full w-full object-contain bg-white mb-2 "
            />
            <p>Workmark Version</p>
          </article>
          <article className="bg-white mb-2">
            <img
              src={Logo2.src}
              alt="Wordmark 2"
              className="h-full w-full object-contain  bg-white mb-2"
            />
            <p>Secondary Version</p>
          </article>
        </div>
      </FadeIn>

      <FadeIn as="section" className="flex gap-5 mt-14 flex flex-col">
        <h2 className="text-4xl font-bold text-blue-700 ">Grayscale Logo</h2>
        <p>
          A grayscale logo is like a black-and-white version of a colorful
          sticker.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <article className="bg-white mb-2">
            <img
              className="grayscale h-full w-full object-contain  bg-white mb-2"
              src={Logo1.src}
            />
            <p>Primary Version</p>
          </article>
          <article className="bg-white mb-2">
            <img
              className="grayscale h-full w-full object-contain  bg-white mb-2"
              src={Wordmark2.src}
            />
            <p>Workmark Version</p>
          </article>
          <article className="bg-white mb-2">
            <img
              className="grayscale h-full w-full object-contain  bg-white mb-2"
              src={Logo2.src}
            />
            <p>Secondary Version</p>
          </article>
        </div>
      </FadeIn>

      <FadeIn as="section" className="flex gap-5 mt-14 flex flex-col">
        <h2 className="text-4xl font-bold text-blue-700 ">
          Black and White Logo
        </h2>
        <p>
          A black and white logo is like a simple drawing of a colorful sticker.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <article>
            <img
              className="grayscale  h-full w-full object-contain  bg-white mb-2 "
              src={GrayLogo.src}
            />
            <p>Primary Version</p>
          </article>
          <article>
            <img
              className="grayscale  h-full w-full object-contain  bg-white mb-2"
              src={Wordmark.src}
            />
            <p>Workmark Version</p>
          </article>
          <article>
            <img
              className="grayscale  h-full w-full object-contain  bg-white mb-2"
              src={GrayLogo2.src}
            />
            <p>Secondary Version</p>
          </article>
        </div>
      </FadeIn>

      <FadeIn as="section" className="flex gap-8 mt-14 grid grid-cols-2 mb-20">
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-5">Symbol</h2>
          <p>
            Sometimes, we simplify things by using just the Skill Match symbol
            <br />
            <br />
            You’ll mostly see the symbol hanging out on its own when there isn't
            enough room for the full name—like on a phone's app icon or a social
            media profile picture. Using just the symbol helps our brand stay
            recognizable and easy to use anywhere, even in the tiniest spots!
          </p>
        </div>
        <img
          src={ColorSymbol.src}
          className="rounded-xl h-60 justify-self-center"
        />
      </FadeIn>
    </div>
  );
};

export default page;
