import { Services } from "@src/services";
import { IBusList } from "@src/types/bus";
import { useQuery } from "@tanstack/react-query";

export const useGetBus = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["bus-list"],
    queryFn: Services.bus.getAll,
  });

  const handleFormatData = () => {
    if (!data) return [];

    try {
      const json = JSON.parse(data.substring(47, data.length - 2));

      if (!json?.table?.rows) {
        console.error("Não foi possível encontrar os dados na resposta.");
        return [];
      }

      const rows = json.table.rows.map((row: any, index: number) => {
        return {
          id: index + 1,
          start: row.c?.[0]?.v || "",
          ended: row.c?.[1]?.v || "",
          company: row.c?.[2]?.v || "",
          price: row.c?.[3]?.f || "",
          time: row.c?.[4]?.f || "",
          daily: row.c?.[5]?.v || "",
          monday: row.c?.[6]?.v || "",
          tuesday: row.c?.[7]?.v || "",
          wednesday: row.c?.[8]?.v || "",
          thursday: row.c?.[9]?.v || "",
          friday: row.c?.[10]?.v || "",
          saturday: row.c?.[11]?.v || "",
          sunday: row.c?.[12]?.v || "",
          holiday: row.c?.[13]?.v || "",
        };
      });
      const sanitizedRows: IBusList[] = rows.filter(
        (row: any) => row !== undefined,
      );
      return sanitizedRows;
    } catch (error) {
      console.error("Não foi possível converter o retorno.", error);
      return [];
    }
  };

  const formattedRows = handleFormatData();

  return { data: formattedRows, isLoading, isError };
};
