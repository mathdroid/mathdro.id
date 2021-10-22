import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  console.log(req.headers);
  res.json({
    name: "Placeholder Name!",
    description: "Placeholder Descriptopn - mathdroid",
    image: "https://mathdro.id/profile.png",
  });
};

export default handler;
