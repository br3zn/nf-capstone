export default function IconBubble() {
  return (
    <>
      <div
        className={`fixed bottom-4 right-5 h-12 w-12 rounded-full bg-slate-700/60 p-2 shadow-slate-900 drop-shadow backdrop-blur transition-all hover:scale-110`}
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </>
  );
}
