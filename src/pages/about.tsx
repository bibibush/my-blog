import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1 className="text-xl font-bold">About Me</h1>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </main>
  );
};

export const Head: HeadFC = () => <title>About Me</title>;

export default AboutPage;
