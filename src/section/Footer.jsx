import data from "../data";

export default function Footer() {
  return (
    <div className="mx-auto max-w-screen-xl p-4 text-white">
      <div>
        {data.footer.map((item, index) => (
          <div key={index}>
            <div>
              <h2 className="text-2xl font-medium">Contact</h2>
              <p className="text-lg font-extralight">
                Work inquiries:{" "}
                <a href={`mailto:${item.contact.work_inquiries}`}>
                  {item.contact.work_inquiries}
                </a>
              </p>
              <p className="text-lg font-extralight">
                PR and speaking:{" "}
                <a href={`mailto:${item.contact.pr_and_speaking}`}>
                  {item.contact.pr_and_speaking}
                </a>
              </p>
              <p className="text-lg font-extralight">
                New business:{" "}
                <a href={`mailto:${item.contact.new_business}`}>
                  {item.contact.new_business}
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium">Careers</h2>
              <p className="text-lg font-extralight">
                <a href={`mailto:${item.careers}`}>{item.careers}</a>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium">Address</h2>
              <p className="text-lg font-extralight">{item.address.street}</p>
              <p className="text-lg font-extralight">{item.address.city}</p>
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
      <div className="flex justify-between">
        <p className="font-extralight text-[#939393]">
          &copy; 2023 Vaultflow. All Rights Reserved.
        </p>
        <div className="flex gap-3">
          <img
            src="../assets/Valtflow.svg"
            alt="Vaultflow logo"
            className="h-6 w-6 translate-y-1"
          />
          <p className="text-[22px] font-bold">Vaultflow</p>
        </div>
      </div>
    </div>
  );
}
