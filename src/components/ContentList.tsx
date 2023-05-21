import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { contentsRouter } from "~/server/api/routers/contents";
import { api } from "~/utils/api";

const ContentList = () => {


  const contents = api.contents.getAll.useQuery();

  return (
    <>
    <div className="flex flex-wrap justify-center gap-4 items-center">
      {contents &&
        contents.data?.map((content) => (
          <div
            key={content.id}
            className="flex w-56 flex-col items-center gap-3 text-center items-center"
          >
            {
            <Image
              src={content.icon}
              width={50}
              height={50}
              alt="content icon"
              />
            }
            <h3 className="font-bold">{content.title}</h3>
            <p className="text-[12px]">{content.subtitle}</p>
            <button className="w-40 rounded-xl bg-slate-400 px-2 text-[11px] font-semibold text-white">
              DAHA FAZLASINI GÖR
            </button>
          </div>
        ))}
        </div>
    </>
  );
};

export default ContentList;
