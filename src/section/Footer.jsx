import data from "../data";

export default function Footer() {

  return (
    <div>
      <div className="">
        {data.footer.map((item, index) => (
          <div key={index}>
            <h1>
                
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
