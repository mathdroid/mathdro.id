import { NextApiHandler } from "next";
import fetch from "isomorphic-unfetch";
import Twitter from "twitter-v2";

const handler: NextApiHandler = async (req, res) => {
  const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET,
  });
  const { data } = await client.get("users/28774685/tweets", {
    tweet: {
      fields: ["created_at", "entities", "public_metrics", "author_id"],
    },
  });
  const last: { id: string; text: string; created_at: string } = data[0];
  // return data;
  res.json({
    url: `https://twitter.com/mathdroid/status/${last.id}`,
    text: last.text,
    ts: last.created_at,
  });
};

export default handler;
