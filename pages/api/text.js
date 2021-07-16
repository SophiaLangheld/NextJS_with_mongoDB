import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    const data = await db.collection("color").find().toArray();
    console.log(data);
    res.json(data);
}

/*export default async (req, res) => {
    const { db } = await connectToDatabase();
    const colors = await db
      .collection("colors")
      .find({})
      .sort({ metacritic: -1 })
      .limit(2)
      .toArray();
    res.json(colors);
  };*/