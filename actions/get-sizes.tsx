import { Size } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL, {
    mode: "no-cors",
    cache: "no-store",
});

  return res.json();
};

export default getSizes;