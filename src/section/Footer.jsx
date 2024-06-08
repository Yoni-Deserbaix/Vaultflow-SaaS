import data from "../data";

export default function Footer() {
  return (
    <div className="mx-auto mt-28 max-w-screen-xl p-8 pb-16 text-white max-md:pb-52">
      {data.footer.map((item, index) => (
        <div
          key={index}
          className="grid h-auto w-full grid-cols-2 gap-6 max-md:grid-cols-1"
        >
          <div>
            <h2 className="pb-3 text-2xl font-medium">Contact</h2>
            <p className="text-lg font-extralight leading-6">
              Work inquiries:{" "}
              <a href={`mailto:${item.contact.work_inquiries}`}>
                {item.contact.work_inquiries}
              </a>
            </p>
            <p className="text-lg font-extralight leading-6">
              PR and speaking:{" "}
              <a href={`mailto:${item.contact.pr_and_speaking}`}>
                {item.contact.pr_and_speaking}
              </a>
            </p>
            <p className="text-lg font-extralight leading-6">
              New business:{" "}
              <a href={`mailto:${item.contact.new_business}`}>
                {item.contact.new_business}
              </a>
            </p>
          </div>
          <div>
            <h2 className="pb-3 text-2xl font-medium">Address</h2>
            <p className="text-lg font-extralight leading-6">
              {item.address.street}
            </p>
            <p className="text-lg font-extralight leading-6">
              {item.address.city}
            </p>
          </div>
          <div>
            <h2 className="pb-3 text-2xl font-medium">Careers</h2>
            <p className="text-lg font-extralight leading-6">
              <a href={`mailto:${item.careers}`}>{item.careers}</a>
            </p>
          </div>
          <div>
            <h2 className="pb-3 text-2xl font-medium">Social</h2>
            <ul>
              {item.social.map((platform, index) => (
                <li
                  className="cursor-pointer text-lg font-extralight"
                  key={index}
                >
                  {platform}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className="mt-6 flex justify-between">
        <p className="font-extralight leading-6 text-[#939393]">
          &copy; 2023 Vaultflow. All Rights Reserved.
        </p>
        <div className="flex gap-3">
          <img
            src="../assets/Vaultflow.svg"
            alt="Vaultflow logo"
            className="h-6 w-6"
          />
          <p className="text-[22px] font-bold leading-6">Vaultflow</p>
        </div>
      </div>
    </div>
  );
}
