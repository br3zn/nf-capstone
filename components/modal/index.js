import { floor } from "lodash";

export default function Modal(props) {
  return (
    <>
      <div
        className={`fixed inset-0 top-0 left-0 z-50 flex ${
          props.isVisible ? "" : "hidden"
        } items-center justify-center bg-black/10 backdrop-blur`}
      >
        <div
          className={`min-h-fit w-4/5 max-w-sm overflow-hidden rounded bg-gray-50 pt-6`}
        >
          <h2 className={`text-center text-4xl`}>{props.title}</h2>
          <div className={`py-4 px-3`}>
            <ul>
              {props.content.map(item => (
                <li key={item.name} className={`capitalize`}>
                  {item.name} - {floor(item.score, 4)}
                </li>
              ))}
            </ul>
          </div>
          <button
            className={`h-12 w-full bg-red-200 text-center font-medium transition-all hover:bg-red-500`}
            onClick={props.handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
