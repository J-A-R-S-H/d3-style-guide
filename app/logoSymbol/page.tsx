import FadeIn from "../components/FadeIn";

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
            Our logo is the most recognizable and iconic way to signal the
            Discord brand. From smaller sign-offs to large, display executions,
            the following section outlines how our logo can adapt for different
            situations, formats, and communications.﻿
          </p>
        </div>
        <img src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_98b82bb1-b06e-4b2d-8ee7-c3b4245ba616.png?width=1600" />
      </FadeIn>

      <FadeIn as="section" className="flex gap-5 mt-14 flex flex-col">
        <h2 className="text-4xl font-bold text-blue-700">Full Color Logo</h2>
        <p>
          Whenever possible, use the red logo on dark or light imagery to ensure
          legibility.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <article>
            <img src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_98b82bb1-b06e-4b2d-8ee7-c3b4245ba616.png?width=1600" />
            <p>Primary Version</p>
          </article>
          <article>
            <img src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_98b82bb1-b06e-4b2d-8ee7-c3b4245ba616.png?width=1600" />
            <p>Workmark Version</p>
          </article>
          <article>
            <img src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_98b82bb1-b06e-4b2d-8ee7-c3b4245ba616.png?width=1600" />
            <p>Secondary Version</p>
          </article>
        </div>
      </FadeIn>

      <FadeIn as="section" className="flex gap-5 mt-14 flex flex-col">
        <h2 className="text-4xl font-bold text-blue-700 ">Grayscale Logo</h2>
        <p>
          Whenever possible, use the red logo on dark or light imagery to ensure
          legibility.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <article>
            <img
              className="grayscale"
              src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_98b82bb1-b06e-4b2d-8ee7-c3b4245ba616.png?width=1600"
            />
            <p>Primary Version</p>
          </article>
          <article>
            <img
              className="grayscale"
              src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_98b82bb1-b06e-4b2d-8ee7-c3b4245ba616.png?width=1600"
            />
            <p>Workmark Version</p>
          </article>
          <article>
            <img
              className="grayscale"
              src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_98b82bb1-b06e-4b2d-8ee7-c3b4245ba616.png?width=1600"
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
          Whenever possible, use the red logo on dark or light imagery to ensure
          legibility.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <article>
            <img
              className="grayscale"
              src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_98b82bb1-b06e-4b2d-8ee7-c3b4245ba616.png?width=1600"
            />
            <p>Primary Version</p>
          </article>
          <article>
            <img
              className="grayscale"
              src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_98b82bb1-b06e-4b2d-8ee7-c3b4245ba616.png?width=1600"
            />
            <p>Workmark Version</p>
          </article>
          <article>
            <img
              className="grayscale"
              src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_98b82bb1-b06e-4b2d-8ee7-c3b4245ba616.png?width=1600"
            />
            <p>Secondary Version</p>
          </article>
        </div>
      </FadeIn>

      <FadeIn as="section" className="flex gap-8 mt-14 grid grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-5">Symbol</h2>
          <p>
            In specific instances, the Discord logo can be reduced to the symbol
            aka Clyde. The most prominent use of the symbol by itself is in
            contexts where size constraints limit the use of the full wordmark,
            such as the app icon or avatars in social media. Our symbol allows
            the brand to be iconic and flexible.
          </p>
        </div>
        <img src="https://di8m9w6rqrh5d.cloudfront.net/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/resizable_98b82bb1-b06e-4b2d-8ee7-c3b4245ba616.png?width=1600" />
      </FadeIn>
    </div>
  );
};

export default page;
