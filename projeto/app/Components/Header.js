import DarkMode from "./DarkMode";

export default function Header({ toggleDark }) {
  return (
    <header className="p-4 flex justify-between shadow-md mb-10">
      <h1 className="text-2xl">JOBz</h1>
      <DarkMode toggle={toggleDark} />
    </header>
  );
}