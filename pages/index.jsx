import Card from "../components/Card";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="px-12 w-full">
        <h1 className="text-4xl text-white">Active Pools</h1>
        <div className="w-full grid grid-cols-3 gap-7 mt-16">
          <Card
            image="pool1.jpeg"
            title={"Win a ticket"}
            desc={"This will be the best prize of the world"}
            buttonlabel={"Enter the pool"}
            path="/"
          />
          <Card
            image="bored.jpg"
            title={"Win a ticket"}
            desc={"This will be the best prize of the world"}
            buttonlabel={"Enter the pool"}
            path="/"
          />
          <Card
            image="pool2.jpeg"
            title={"Win a ticket"}
            desc={"This will be the best prize of the world"}
            buttonlabel={"Enter the pool"}
            path="/"
          />
        </div>
      </div>
    </Layout>
  );
}
1;
