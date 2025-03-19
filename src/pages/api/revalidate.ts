// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name?: string;
  revalidated?: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await res.revalidate("/");
    return res.json({ revalidated: true });
  } catch (error) {
    return res.status(500).json({ name: (error as Error).message });
  }
}
