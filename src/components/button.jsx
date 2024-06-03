/* eslint-disable react/prop-types */
export default function Button({ text, invert, className }) {
  const baseClasses =
    "my-1 cursor-pointer rounded-3xl px-5 py-2 transition-all";
  const defaultClasses = "bg-[#ECECEC] text-black hover:bg-gray-300";
  const invertedClasses =
    "bg-transparent border border-[#ECECEC] text-[#ECECEC] hover:bg-[#ECECEC] hover:text-black";

  const buttonClasses = `${baseClasses} ${invert ? invertedClasses : defaultClasses} ${className}`;

  return <div className={buttonClasses}>{text}</div>;
}
