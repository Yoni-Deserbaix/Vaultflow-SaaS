export default function CardsFeatures() {
  const cards = [
    {
      src: "./assets/icon/icon01.svg",
      title: "Analytics Dashboard",
      caption:
        "Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.",
      viewLink: "View dashboard",
    },

    {
      src: "./assets/icon/icon02.svg",
      title: "Digital Credit Tokens",
      caption:
        "Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.",
      viewLink: "View tokens",
    },
    {
      src: "./assets/icon/icon03.svg",
      title: "Code collaboration",
      caption:
        "Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.",
      viewLink: "View code collaboration",
      imageCode: "./assets/code_card.svg",
    },
  ];
  return <div>CardsFeatures</div>;
}
