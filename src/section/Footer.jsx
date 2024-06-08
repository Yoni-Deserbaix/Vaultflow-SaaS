import data from "../data";

export default function Footer() {
  return (
    <div className="text-white">
      <div>
        {data.footer.map((item, index) => (
          <div key={index}>
            <div>
              <h2>Contact</h2>
              <p>
                Work inquiries:
                <a href={`mailto:${item.contact.work_inquiries}`}>
                  {item.contact.work_inquiries}
                </a>
              </p>
              <p>
                PR and speaking:
                <a href={`mailto:${item.contact.pr_and_speaking}`}>
                  {item.contact.pr_and_speaking}
                </a>
              </p>
              <p>
                New business:
                <a href={`mailto:${item.contact.new_business}`}>
                  {item.contact.new_business}
                </a>
              </p>
            </div>
            <div>
              <h2>Careers</h2>
              <p>
                <a href={`mailto:${data.careers}`}>{data.careers}</a>
              </p>
            </div>
            <div>
              <h3>Address</h3>
              <p>{item.address.street}</p>
              <p>{item.address.city}</p>
            </div>
            <h3>Social</h3>
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
