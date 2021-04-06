import { NextApiRequest, NextApiResponse } from "next";

const getDomainByName = (name: string) =>
  new Promise((resolve) => {
    if (name === "aircampus.co") {
      return resolve(true);
    }
    return resolve(false);
  });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { domain }
  } = req;
  const result = await getDomainByName(domain as string);
  if (!result) {
    return res.status(404).end();
  }
  return res.status(200).end();
};
