import { useState } from "react";

export const usePagination = (limit: number) => {
  const [page, setPage] = useState(1);

  const skip = (page - 1) * limit;

  return {
    page,
    setPage,
    limit,
    skip,
  };
};
