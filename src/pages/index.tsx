import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1 className="text-2xl font-bold">coming soon!!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <React.Fragment>
    <title>Home Page</title>;
    <meta name="description" content="bibibush Blog" />
  </React.Fragment>
);
