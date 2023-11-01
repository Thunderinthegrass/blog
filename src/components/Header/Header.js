import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <a href="#1">Home</a>
        <a href="#2">About</a>
        <a href="#3">Contacts</a>
      </nav>
    </header>
  );
};
