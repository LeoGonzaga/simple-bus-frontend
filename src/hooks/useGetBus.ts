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
          companyName: row.c?.[2]?.v || "",
          price: row.c?.[3]?.f || "",
          time: row.c?.[4]?.f || "",
          daily: row.c?.[5]?.v || "",
          mondayToFriday: row.c?.[6]?.v || "",
          mondayToSaturday: row.c?.[7]?.v || "",
          sundyAndHolidays: row.c?.[8]?.v || "",
          updatedAt: row.c?.[9]?.f || "",
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

  const updatedAt = formattedRows[0]?.updatedAt;

  return { data: formattedRows, isLoading, isError, updatedAt };
};
