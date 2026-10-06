import { useEffect, type RefObject } from "react";

interface useClickOutsideProps<T extends HTMLElement> {
  ref: RefObject<T | null>;
  callback: () => void;
}

export const useClickOutside = <T extends HTMLElement>({
  ref,
  callback,
}: useClickOutsideProps<T>) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
};
