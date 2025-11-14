import Card from "./Card";

export default function ListaCards() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card />
      </div>
    </div>
  );
}