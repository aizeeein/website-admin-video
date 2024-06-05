"use client";

import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import { ApiAlert } from "./api-alert";

interface ApiListProps {
  namaIndikator: string;
  idIndikator: string;
}

export const ApiList: React.FC<ApiListProps> = ({
  namaIndikator,
  idIndikator,
}) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${namaIndikator}`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${namaIndikator}/{${idIndikator}}`}
      />
      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${namaIndikator}`}
      />
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${namaIndikator}/{${idIndikator}}`}
      />
      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${namaIndikator}/{${idIndikator}}`}
      />
    </>
  );
};
