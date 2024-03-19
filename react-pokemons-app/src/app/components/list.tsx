import { ReactNode } from 'react';

type Props<T> = {
  items: T[];
  renderItem(item: T): ReactNode;
};

function List<T>({ items, renderItem }: Props<T>) {
  return <>{items.map((item) => renderItem(item))}</>;
}

export default List;