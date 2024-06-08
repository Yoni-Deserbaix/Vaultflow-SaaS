import data from "../data";

export default function Footer() {
  return (
    <div className="mx-auto max-w-screen-xl p-4 text-white">
      <div>
        {data.footer.map((item, index) => (
          <div key={index}>
            <div>
              <h2 className="text-2xl font-medium">Contact</h2>
              <p>
                Work inquiries:{" "}
                <a href={`mailto:${item.contact.work_inquiries}`}>
                  {item.contact.work_inquiries}
                </a>
              </p>
              <p>
                PR and speaking:{" "}
                <a href={`mailto:${item.contact.pr_and_speaking}`}>
                  {item.contact.pr_and_speaking}
                </a>
              </p>
              <p>
                New business:{" "}
                <a href={`mailto:${item.contact.new_business}`}>
                  {item.contact.new_business}
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium">Careers</h2>
              <p>
                <a href={`mailto:${item.careers}`}>{item.careers}</a>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium">Address</h2>
              <p>{item.address.street}</p>
              <p>{item.address.city}</p>
            </div>
            <h2 className="text-2xl font-medium">Social</h2>
            <ul>
              {item.social.map((platform, index) => (
                <li key={index}>{platform}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <p>C 2023 Vaultflow. All Rights Reserved.</p>
      </div>
    </div>
  );
}
