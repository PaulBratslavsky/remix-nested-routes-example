import { classNames } from "~/helpers/classNames";

export default function Navigation({ children = [], bgColor = "bg-white" }) {
  const ifArray = Array.isArray(children);

  return (
    <nav role="navigation" className={classNames("shadow xl:block", bgColor)}>
      <div className="mx-auto xl:py-0">
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="flex md:mr-6 xl:mr-16">
              {ifArray
                ? children.map((child, index) => <div key={index}>{child}</div>)
                : children}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
