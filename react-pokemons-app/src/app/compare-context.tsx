import { PropsWithChildren, createContext, useState } from 'react';

type CompareContextType = {
  idsToCompare: number[];
  toggleIdSelection: (id: number) => void;
};

export const CompareContext = createContext<CompareContextType>({
  idsToCompare: [],
  toggleIdSelection() {
    throw new Error('Error: you have to use <CompareContext.Provider>');
  },
});

export function CompareProvider({ children }: PropsWithChildren) {
  const [idsToCompare, setIdsToCompare] = useState<number[]>([]);

  function toggleIdSelection(id: number) {
    if (idsToCompare.includes(id)) {
      setIdsToCompare(idsToCompare.filter((currentId) => currentId !== id));
    } else if (idsToCompare.length < 2) {
      setIdsToCompare([...idsToCompare, id]);
    }
  }

  return (
    <CompareContext.Provider value={{idsToCompare, toggleIdSelection}}>
      {children}
    </CompareContext.Provider>
  )
}