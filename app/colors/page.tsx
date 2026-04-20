import FadeIn from "../components/FadeIn";
import Image from "next/image";
import homeShopColorImage from "../images/home-color.png";
import hostColor from "../images/host-color.png";
import workshopColorImage from "../images/workshop-color.png";
import coreParings from "../images/core-pairings.png";
import accesibility1 from "../images/accesibility-1.png";
import accesibility2 from "../images/accesibility-2.png";
import accesibility3 from "../images/accessibility-3.png";
import accesibility4 from "../images/accessibility-4.png";

const page = () => {
  return (
    <div>
      <h1 className="text-7xl font-extrabold text-center mb-10 mt-10 text-[#7100cd]">
        Colors and Gradients
      </h1>

      <section className="grid grid-cols-2 gap-5">
        <div>
          <h2 className="text-4xl font-bold text-[#7100cd]">Color</h2>
          <h3 className="text-xl font-medium mt-2 mb-2">Plum</h3>
          <p>
            Plum is the foundation of our color palette and one of the most
            recognizable elements of our brand. It is a vibrant color that
            reflects the energetic, playful, and digital-first nature of our
            brand.
          </p>
        </div>
        <div className="h-64 w-64 border-2 rounded-xl p-2 flex flex-col">
          <p className="text-black">
            Lemon <br /> #FFFFB9
          </p>
        </div>
      </section>

      <FadeIn as="section" className="mt-4">
        <h2 className="text-4xl font-bold text-[#7100cd]">Color</h2>
        <h3 className="text-xl font-medium mt-2 mb-5">Core Palette</h3>
        <p>
          Our core palette forms the basis of our color strategy and should
          serve as the first impression across all SkillMatch brand touchpoints.
          Its consistent usage establishes a recognizable visual cue for the
          SkillMatch brand, and is complemented by our secondary palette.
          <br />
          <br />
          The information below shows the approved color values for each color
          in the palette for HEX (for screens).
          <br />
          <br />
          Always use the correct color mode and ink formulation for the
          appropriate application type to ensure color consistency across all
          media.﻿
        </p>

        <p className="mt-5 font-bold">Primary Color Pallette</p>

        <div className="mt-4 flex gap-4 ">
          <div className="flex gap-2 flex-col">
            <div className="h-64 w-120  bg-[#c3cff] rounded-xl p-2 flex flex-col border-2">
              <p className="text-black">Plum 70% </p>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="h-64 w-34 bg-[#ffffb9] rounded-xl p-2 flex flex-col">
              <p className="text-black">Lemon 20% </p>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="h-64 w-22 bg-black rounded-xl p-2 flex flex-col">
              <p className="text-white">Black 10% Berry</p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="mt-4">
        <h2 className="text-4xl font-bold text-[#7100cd]">Color</h2>
        <h3 className="text-xl font-medium mt-2 mb-5">Secondary Palette</h3>

        <p>
          The secondary palette expands our range of brand expression, allowing
          SkillMatch to adapt to various contexts while maintaining a spirit of
          delight and vibrancy. These colors can be used to add interest to
          communications, or to complement specific images and messaging.
          <br />
          <br />
          The information below shows the approved color values for each color
          in the palette for HEX (for screens).
          <br />
          <br />
          Always use the correct color mode and ink formulation for the
          appropriate application type to ensure color consistency across all
          media.
        </p>

        <div className="mt-4 flex gap-4 ">
          <div className="flex gap-2 flex-col">
            <div className="h-94 w-64  border-2 rounded-xl p-2 flex flex-col">
              <p className="text-black">
                Plum <br />
                #C3BCFF
              </p>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="h-94 w-64 bg-[#FFFFB9] rounded-xl p-2 flex flex-col">
              <p className="text-black">
                Lemon <br /> #FFFFB9
              </p>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="h-94 w-64 bg-black rounded-xl p-2 flex flex-col">
              <p className="text-white">Black #08000E</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-4 ">
          <div className="flex gap-2 flex-col">
            <div className="h-94 w-64  bg-[#ffe86a] rounded-xl p-2 flex flex-col">
              <p className="text-black">Secondary HoneyComb #ffe86a </p>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="h-94 w-64 bg-[#7100CD] rounded-xl p-2 flex flex-col">
              <p className="text-black">
                Secondary Royal Jelly <br />
                #7100CD
              </p>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="h-94 w-64 bg-[#897df0] rounded-xl p-2 flex flex-col">
              <p className="text-black">
                Secondary Mulburries <br />
                #897DF0
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-4 ">
          <div className="flex gap-2 flex-col">
            <div className="h-94 w-64  bg-[#FFFDE8] rounded-xl p-2 flex flex-col">
              <p className="text-black">
                Secondary Vanilla <br /> #FFFDE8
              </p>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="h-94 w-64 bg-[#FFFFF9] rounded-xl p-2 flex flex-col">
              <p className="text-black">
                Secondary Marshmallow <br />
                #FFFFF9
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section">
        <h2 className="text-4xl font-bold text-[#7100cd] mt-8">Color</h2>
        <h3 className="text-xl font-medium mt-2 mb-5">In Use </h3>

        <div className="grid grid-cols-3 gap-2">
          <img
            className="col-span-2 row-span-2 "
            src={homeShopColorImage.src}
            alt=""
            style={{
              objectFit: "cover",
              height: "100%",
            }}
          />
          <img src={hostColor.src} alt="" />
          <img src={workshopColorImage.src} alt="" />
        </div>
      </FadeIn>

      <FadeIn as="section" className="flex gap-8 mt-14 grid grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold text-[#7100cd]">Color</h2>
          <h3 className="text-xl font-medium mt-6 mb-5">Core Pairings</h3>
          <p>There are four core pairings that we use with typography.</p>
          <ol>
            <li>1. Blackberry on Plum</li>
            <li>2. Blackberry on Lemon</li>
            <li>3. Blackberry on Marshmallow</li>
            <li>4. Marshmallow on Royal Jelly</li>
          </ol>
        </div>
        <img src={coreParings.src} alt="" className="rounded-xl" />
      </FadeIn>

      <FadeIn as="section" className="mb-20 mt-14 ">
        <h2 className="text-4xl font-bold text-[#7100cd]">Color</h2>
        <h3 className="text-xl font-medium mt-6 mb-5">In Accessibility </h3>
        <div className="grid-cols-2 grid gap-8">
          <div>
            <img src={accesibility1.src} alt="" />
            <p className="mt-4">
              The default, plum and Blackberry color palette meets accessibility
              standards for text, but can be used for large text, or paired with
              white or Blackberry to better meet accessibility standards.
            </p>
          </div>
          <div>
            <img src={accesibility2.src} alt="" />
            <p className="mt-4">
              Marshmallow on Royal Jelly meets the accesibility standard quite
              well as it will be used for buttons and smaller text, but can be
              used for large text as well.
            </p>
          </div>
          <div>
            <img src={accesibility3.src} alt="  " />
            <p className="mt-4">
              Blackberry on Lemon meets the accesiibility standard well as it
              can be used for components that involve smaller text, but can be
              used for large text as well.
            </p>
          </div>
          <div>
            <img src={accesibility4.src} alt="" />
            <p className="mt-4">
              Blackberry on Marshmallow is used for blocks of text or a
              component of a card to suffice contrast between black and white.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default page;
