import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import Header from "~/components/Header";
import { api } from "~/utils/api";

const Products: NextPage = () => {
  const products = api.products.getAll.useQuery();

  const { data: sessionData } = useSession();

  return (
    <>
      <Header />

      {sessionData && (
        <div className="flex flex-wrap items-center justify-center gap-5">
          {products &&
            products.data?.map((product) => (
              <div key={product.id} className="flex flex-col  gap-3 text-black">
                <Image
                  alt="Product image"
                  width={300}
                  height={100}
                  src={product.image}
                />
                <h3 className="text-[20px] font-extrabold">{product.title}</h3>
                <p className="text-[16px]">{product.description}</p>
                <p className="self-end text-[28px] font-bold text-sky-500">
                  {product.price} TL
                </p>
              </div>
            ))}
        </div>
      )}
      {!sessionData && (
        <div className="flex items-center justify-center h-screen">
          <a>Ürünleri Görmek İçin Giriş Yapınız.</a>
        </div>
      )}
    </>
  );
};

export default Products;
