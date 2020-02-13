import React from "react";
import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Odin Ugedal</title>
      <meta
        content="Student. MSc in computer science, NTNU. Mostly doing systems programming & Cloud Native "
        name="description"
      />
    </Head>

    <pre>
      Odin Ugedal
      <br />
      <br />
      Student. MSc in computer science, NTNU. Mostly doing systems programming &
      Cloud Native
      <br />
      <br />
      GitHub:{"   "}
      <a href="https://github.com/odinuge">https://github.com/odinuge</a>
      <br />
      LinkedIn:{" "}
      <a href="https://www.linkedin.com/in/odinugedal/">
        https://www.linkedin.com/in/odinugedal/
      </a>
      <br />
      Email:{"    "}
      <a href="mailto:odin@uged.al">odin@ugedal.com</a>
      <br />
      Keybase:{"  "}
      <a href="https://keybase.io/odinugedal">https://keybase.io/odinugedal</a>
    </pre>
  </div>
);

Index.getInitialProps = async () => ({ foo: "bar" });
export default Index;
