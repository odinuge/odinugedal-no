import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";

const Index = () => (
  <div>
    <Head>
      <title>Odin Ugedal</title>
      <meta
        content="Student. MSc in computer science, NTNU. Mostly doing systems programming & Cloud Native "
        name="description"
      />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Odin Ugedal</h1>
      <p className="description">
        Student. MSc in computer science, NTNU
        <br />
        Doing mostly systems programming & cloud Native
      </p>

      <div className="row">
        <Link href="https://github.com/odinuge">
          <a className="card">
            <h3>GitHub</h3>
            <p>I do most of my stuff on github</p>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/odinugedal/">
          <a className="card">
            <h3>Linkedin</h3>
            <p>You know the drill</p>
          </a>
        </Link>
        <Link href="mailto:odin@ugedal.com">
          <a className="card">
            <h3>Email</h3>
            <p>odin@ugedal.com</p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);

Index.getInitialProps = async () => ({});
export default Index;
