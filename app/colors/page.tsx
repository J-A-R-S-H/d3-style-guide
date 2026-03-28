import FadeIn from "../components/FadeIn";

const page = () => {
  return (
    <div>
      <h1 className="text-7xl font-extrabold text-center mb-10 mt-10 text-blue-700">
        Colors and Gradients
      </h1>

      <section className="flex gap-5">
        <div>
          <h2 className="text-4xl font-bold text-blue-700">Color</h2>
          <h3 className="text-xl font-medium mt-6 mb-5">Blurple</h3>
          <p>
            Blurple is the foundation of our color palette and one of the most
            recognizable elements of our brand. So much so, that it can
            communicate “Discord” even without the presence of our logo. It is a
            bold and vibrant color that reflects the energetic, playful, and
            digital-first nature of our brand.
          </p>
        </div>
        <div>
          <img
            src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_fdd61d31-2022-49dc-88ba-2579dc026877.png?width=1600"
            alt=""
          />
        </div>
      </section>

      <FadeIn as="section" className="mt-4">
        <h2 className="text-4xl font-bold text-blue-700">Color</h2>
        <h3 className="text-xl font-medium mt-2 mb-5">Core Palette</h3>
        <p>
          Our core palette forms the basis of our color strategy and should
          serve as the first impression across core brand touchpoints. Its
          consistent usage establishes a recognizable visual cue for the Discord
          brand, and is complimented by our secondary palette.
          <br />
          <br />
          The information to the right shows the approved color values for each
          color in the palette in Pantone inks (for solid color printing), CMYK
          (for four-color process printing), as well as HEX, and RGB (for
          screens). 
          <br />
          <br />
          Always use the correct color mode and ink formulation for the
          appropriate application type to ensure color consistency across all
          media.﻿
        </p>

        <p className="mt-5 font-bold">Primary Color Pallette</p>

        <div className="mt-4 flex gap-4 ">
          <div className="flex gap-2 flex-col">
            <div className="h-64 w-120  bg-blue-700 rounded-xl p-2 flex flex-col">
              <p className="text-white">Dark Blue 70% </p>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="h-64 w-34 bg-blue-200 rounded-xl p-2 flex flex-col">
              <p className="text-black">Light Blue 20% </p>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="h-64 w-22 bg-black rounded-xl p-2 flex flex-col">
              <p className="text-white">Black 10%</p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="mt-4">
        <h2 className="text-4xl font-bold text-blue-700">Color</h2>
        <h3 className="text-xl font-medium mt-2 mb-5">Secondary Palette</h3>

        <p>
          The secondary palette opens our range of brand expression, allowing
          Discord to adapt to various contexts while maintaining a spirit of
          delight, and vibrancy. These colors can be used to add interest to
          communications, or complement specific images or messaging.
          <br />
          <br />
          The information below shows the approved color values for each color
          in the palette in Pantone inks (for solid color printing), CMYK (for
          four-color process printing), as well as HEX and RGB (for screens).
          <br />
          <br />
          Always use the correct color mode and ink formulation for the
          appropriate application type to ensure color consistency across all
          media.
        </p>

        <div className="mt-4 flex gap-4 ">
          <div className="flex gap-2 flex-col">
            <div className="h-94 w-64  bg-blue-700 rounded-xl p-2 flex flex-col">
              <p className="text-white">Dark Blue </p>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="h-94 w-64 bg-blue-200 rounded-xl p-2 flex flex-col">
              <p className="text-black">Light Blue </p>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="h-94 w-64 bg-black rounded-xl p-2 flex flex-col">
              <p className="text-white">Black</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-4 ">
          <div className="flex gap-2 flex-col">
            <div className="h-94 w-64  bg-green-800 rounded-xl p-2 flex flex-col">
              <p className="text-white">Secondary Dark Green </p>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="h-94 w-64 bg-orange-200 rounded-xl p-2 flex flex-col">
              <p className="text-black">Secondary Light Orange</p>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="h-94 w-64 bg-pink-700 rounded-xl p-2 flex flex-col">
              <p className="text-white">Secondary Pink</p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section">
        <h2 className="text-4xl font-bold text-blue-700 mt-8">Color</h2>
        <h3 className="text-xl font-medium mt-2 mb-5">In Use </h3>

        <div className="grid grid-cols-3 gap-2">
          <img
            className="col-span-2 row-span-2 "
            src="https://cdn.dribbble.com/userupload/6482369/file/original-11a38a4e16f494277120095ad12e95a4.jpg"
            alt=""
          />
          <img
            src="https://cdn.dribbble.com/userupload/6482369/file/original-11a38a4e16f494277120095ad12e95a4.jpg"
            alt=""
          />
          <img
            src="https://cdn.dribbble.com/userupload/6482369/file/original-11a38a4e16f494277120095ad12e95a4.jpg"
            alt=""
          />
        </div>
      </FadeIn>

      <FadeIn as="section" className="flex gap-8 mt-14 grid grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold text-blue-700">Color</h2>
          <h3 className="text-xl font-medium mt-6 mb-5">Core Pairings</h3>
          <p>There are four core pairings that we use with typography.</p>
          <ol>
            <li>1. Blurple on Black</li>
            <li>2. Blurple on Light Blurple</li>
            <li>3. Light Blurple on Blurple</li>
            <li>4. Black on Blurple</li>
          </ol>
        </div>
        <img src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_dc8d2a62-f21d-472d-a5d9-60c8b0ebd64c.png?width=1600" />
      </FadeIn>

      <FadeIn as="section" className="mb-100 mt-14 ">
        <h2 className="text-4xl font-bold text-blue-700">Color</h2>
        <h3 className="text-xl font-medium mt-6 mb-5">In Accessibility </h3>
        <div className="grid-cols-2 grid gap-8">
          <div>
            <img src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_dc8d2a62-f21d-472d-a5d9-60c8b0ebd64c.png?width=1600" />
            <p className="mt-4">
              Yellow is less prominent throughout the app, but it reinforces the
              theme of productivity by symbolizing energy and joy. As users
              navigate their tasks on Mosaic, subtle reminders of these emotions
              strengthen the app's identity.
            </p>
          </div>
          <img src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_dc8d2a62-f21d-472d-a5d9-60c8b0ebd64c.png?width=1600" />

          <img src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_dc8d2a62-f21d-472d-a5d9-60c8b0ebd64c.png?width=1600" />
          <img src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_dc8d2a62-f21d-472d-a5d9-60c8b0ebd64c.png?width=1600" />
        </div>
      </FadeIn>
    </div>
  );
};

export default page;
