import { floor } from "lodash";
import { gql, useQuery } from "@apollo/client";
import { find } from "lodash/collection";

export const TERP_INFO_QUERY = gql`
  query GetAllTerps {
    getAllTerps {
      id
      name
      description
    }
  }
`;

export default function Modal(props) {
  const { loading, error, data } = useQuery(TERP_INFO_QUERY);
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
            <p>{props.contentText}</p>
            <ul>
              {props.contentList &&
                props.contentList.map(item => (
                  <li key={item.name}>
                    <details>
                      <summary>
                        {item.name} - {floor(item.score, 4)}
                      </summary>
                      <div className="mt-1 mb-2 max-h-48 overflow-scroll text-sm leading-6 text-slate-600">
                        <p>
                          {
                            find(
                              props.terpList,
                              props.terpList.name,
                              item.name.capitalize
                            ).description
                          }
                        </p>
                      </div>
                    </details>
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
