import { FC } from "react";
import Link from "next/link";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="container">
        <small className="text-muted">
          Linkedin:&nbsp;
          <Link href="https://www.linkedin.com/company/appnetwise/mycompany/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/company/appnetwise/mycompany/
            </a>
          </Link>
        </small>
      </div>
    </footer>
  );
};
