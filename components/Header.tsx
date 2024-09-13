import Link from "next/link";
import { FC, useEffect } from "react";

import { useKeycloakContext, useServerContext } from "../utils/context";
import { setCookie } from "../utils/cookies";

export const Header: FC = () => {
  const { keycloak, keycloakInitialized } = useKeycloakContext();
  const { isServer, isAuthenticated, setIsAuthenticated } = useServerContext();

  useEffect(() => {
    const isKeycloakAuthenticated = keycloak.authenticated ? "true" : "false";
    if (keycloakInitialized && isKeycloakAuthenticated !== isAuthenticated) {
      setIsAuthenticated(isKeycloakAuthenticated);
    }
  }, [keycloak, keycloakInitialized, isAuthenticated, setIsAuthenticated]);

  return (
    <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <Link href="/" legacyBehavior>
        <a className="my-0 mr-md-auto font-weight-bold text-dark">
          APPNETWISE
        </a>
      </Link>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link href="/profile" legacyBehavior>
          <a className="p-2 text-dark">Profile</a>
        </Link>
      </nav>
      {keycloak.authenticated || (isServer && isAuthenticated === "true") ? (
        <>
          <button
            type="button"
            className="mx-2 btn btn-outline-primary"
            onClick={() => {
              setCookie("isAuthenticated", "false");
              window.location.href = keycloak.createLogoutUrl();
            }}
          >
            Logout
          </button>
          <button
            type="button"
            className="mx-2 btn btn-outline-primary"
            onClick={() => (window.location.href = keycloak.createAccountUrl())}
          >
            My Account
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            className="mx-2 btn btn-outline-primary"
            onClick={() => (window.location.href = keycloak.createRegisterUrl())}
          >
            Signup
          </button>
          <button
            type="button"
            className="mx-2 btn btn-outline-primary"
            onClick={() => (window.location.href = keycloak.createLoginUrl())}
          >
            Login
          </button>
        </>
      )}
    </header>
  );
};
