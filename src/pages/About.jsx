import React from "react";
import Tab from "../components/about/Tab";
import Tabs from "../components/about/Tabs";
import ErrorBoundary from "../components/ErrorBoundary";

const About = () => {
  return (
    <ErrorBoundary>
      <Tabs>
        {[...new Array(2)].map((v, k) => (
          <Tab title={`Onglet numero ${k}`} key={k}>
            <strong>Beau gar{k}</strong> ipsum, dolor sit amet consectetur
            adipisicing elit. Quidem dignissimos repellendus corporis est
            reiciendis.
          </Tab>
        ))}
        <Tab title="deuxieme onglet">
          <strong>Lol</strong> amet consectetur adipisicing elit. Quidem
          dignissimos repellendus corporis est reiciendis
        </Tab>
        <Tab title="troisième onglet">
          <strong>Bingo</strong> amet consectetur adipisicing elit. Quidem
          dignissimos repellendus corporis est reiciendis
        </Tab>
      </Tabs>
    </ErrorBoundary>
  );
};

export default About;
