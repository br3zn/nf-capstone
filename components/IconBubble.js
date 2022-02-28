export default function IconBubble({ state }) {
  const svgArr = [
    "M6 18L18 6M6 6l12 12", // close icon
    "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", // search icon
  ];

  return (
    <>
      <div
        className={`fixed bottom-4 right-8 h-12 w-12 cursor-pointer rounded-full bg-slate-700/60 p-2 shadow-slate-900 drop-shadow backdrop-blur transition-all hover:scale-110`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#F2555D"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={svgArr[state ? 0 : 1]}
          />
        </svg>
      </div>
    </>
  );
}
