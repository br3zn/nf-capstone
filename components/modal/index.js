export default function Modal({ children, handleClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 top-0 left-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur`}
      >
        <div
          className={`max-h-full w-4/5 max-w-sm overflow-hidden rounded bg-gray-50 pt-6`}
        >
          {children}
          <button
            className={`h-12 w-full bg-red-200 text-center font-medium transition-all hover:bg-red-500`}
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
