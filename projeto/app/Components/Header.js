import DarkMode from "./DarkMode";

export default function Header({ toggleDark }) {
  return (
    <header className="p-4 flex justify-between">
      <h1 className="text-2xl">Name</h1>
      <DarkMode toggle={toggleDark} />
    </header>
  );
}
