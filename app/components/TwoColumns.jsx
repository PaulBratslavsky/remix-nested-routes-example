import { classNames } from '~/helpers/classNames';

export default function TwoColumns({ children, leftBg = '', rightBg = '' }) {
  return (
    <div className="mx-auto grid h-full grid-cols-12">
      <div className={classNames("col-span-3", leftBg)}>
        {children[0]}
      </div>
      <div className={classNames("col-span-9", rightBg)}>{children[1]}</div>
    </div>
  );
}
