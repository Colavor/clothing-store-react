import styles from "./styles.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={styles.pagination}>
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            disabled={page === currentPage}
            onClick={() => onPageChange(page)}
            className={styles.pagination__button}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
