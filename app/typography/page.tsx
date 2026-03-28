import FadeIn from "../components/FadeIn";
const typography = () => {
  return (
    <div>
      <header className="bg-blue-50 grid w-screen relative left-1/2 -translate-x-1/2">
        <h1 className="text-7xl font-extrabold text-center mb-10 mt-10">
          Typography
        </h1>

        <h1 className="text-9xl font-extrabold text-center mt-2">Verdana</h1>
        <h2 className="text-7xl font-bold text-center mt-6">Verdana</h2>
        <h3 className="text-5xl  text-center mt-6 mb-5">Verdana</h3>

        <p className="w-1/2 mx-auto mt-4 mb-16  ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          quia vero dolores. Asperiores molestias velit molestiae beatae, eum
          quo ratione veritatis quos ad. Ullam nihil asperiores earum magnam
          mollitia tempora!
        </p>
      </header>

      <FadeIn as="section">
        <h2 className="text-4xl font-bold mt-2 mb-5">Verdana</h2>
        <h3 className="text-xl font-medium mt-6 mb-5">Readability</h3>
        <p>
          Open Sans is designed to be easy to read for all types of users,
          therefore supporting accessibility throughout the app. It allows users
          to clearly understand the information that is provided throughout each
          screen in Mosaic. As the purpose of the app is to provide support for
          users throughout their project creation, it is essential to easily
          understand the content on the page without straining users' vision.
        </p>
        <h3 className="text-xl font-medium mt-6 mb-5">Clean Design</h3>
        <p>
          Open Sans supports the idea of “simple and efficient” design. As
          Mosaic is designed for professionals and students, it is essential to
          provide a user-friendly, uncluttered interface for information.
        </p>
        <h3 className="text-xl font-medium mt-6 mb-5">
          Supports Multiple Languages
        </h3>
        <p>
          Mosaic will expand in the future and be used by people all over the
          world. Providing characters and glyphs that can easily be converted
          into any language the user understands supports in creating an overall
          better user experience for Mosaic users.
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
              <p className="font-extrabold">4.5rem</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col">
            <div className="grid grid-cols-3 gap-4">
              <p className="font-bold">Heading 2</p>
              <p className="font-bold">Bold</p>
              <p className="font-bold">2.25rem</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col">
            <div className="grid grid-cols-3 gap-4">
              <p className="font-bold">Heading 3</p>
              <p className="font-bold">Medium</p>
              <p className="font-bold">1.25rem</p>
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
          <p>Page Example</p>
          <img
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/landing%20page%20example%2C%20monday.com.webp?width=650&height=351&name=landing%20page%20example%2C%20monday.com.webp"
            alt=""
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <p>Page Example</p>
          <img
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/landing%20page%20example%2C%20monday.com.webp?width=650&height=351&name=landing%20page%20example%2C%20monday.com.webp"
            alt=""
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-20">
          <p>Page Example</p>
          <img
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/landing%20page%20example%2C%20monday.com.webp?width=650&height=351&name=landing%20page%20example%2C%20monday.com.webp"
            alt=""
          />
        </div>
      </FadeIn>
    </div>
  );
};

export default typography;
