import { connectToDatabase } from "../util/mongodb";

export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    const data = await db.collection("colors").find().toArray();
    res.json(data);
}
/************************** */
/*export default function Colors({ colors }) {
  return (
    <div>
      <h1>Top 20 Colors of All Time</h1>

      <ul>
        {colors.map((color) => (
          <li>
            <h2>{color.color}</h2>
            <h3>{color.name}</h3>
            <p>{color.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const colors = await db
    .collection("color")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  return {
    props: {
      colors: JSON.parse(JSON.stringify(colors)),
    },
  };
}*/