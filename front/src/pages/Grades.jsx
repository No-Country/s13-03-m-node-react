import {
  Accordion,
  AccordionItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const Grades = () => {
  const data = [
    {
      title: "Materia 1",
      grade: [
        { key: "m1.1", date: "01/01", tema: "??", grade: 10 },
        { key: "m1.2", date: "01/01", tema: "??", grade: 18 },
        { key: "m1.3", date: "01/01", tema: "??", grade: 16 },
        { key: "m1.4", date: "01/01", tema: "??", grade: 15 },
        { key: "m1.5", date: "01/01", tema: "??", grade: 14 },
        { key: "m1.6", date: "01/01", tema: "??", grade: 13 },
      ],
    },
    {
      title: "Materia 2",
      grade: [
        { key: "m2.1", date: "01/01", tema: "??", grade: 12 },
        { key: "m2.2", date: "01/01", tema: "??", grade: 11 },
        { key: "m2.3", date: "01/01", tema: "??", grade: 9 },
        { key: "m2.4", date: "01/01", tema: "??", grade: 8 },
        { key: "m2.5", date: "01/01", tema: "??", grade: 4 },
      ],
    },
    {
      title: "Materia 3",
      grade: [
        { key: "m3.1", date: "01/01", tema: "??", grade: 6 },
        { key: "m3.2", date: "01/01", tema: "??", grade: 3 },
        { key: "m3.3", date: "01/01", tema: "??", grade: 1 },
      ],
    },
    {
      title: "Materia 4",
      grade: [{ key: "m4.1", date: "01/01", tema: "??", grade: 7 }],
    },
  ];
  const columns1 = [
    {
      key: "date",
      label: "Fecha",
    },
    {
      key: "tema",
      label: "Tema",
    },
    {
      key: "grade",
      label: "Nota",
    },
  ];
  const itemClasses = {
    base: " mx-2 mb-6  shadow-md shadow-[#7222d366]  rounded-xl border-1 border-[#7222D3] ",
    title: "font-medium	text-lg  text-[#280058]	",
    trigger:
      "px-2 py-0   data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center ",
    indicator: "text-2xl  text-[#280058] ",
    content: "text-small px-2 mx-2 my-3  ",
  };
  return (
    <section className=" my-8  text-[#280058]">
      <h1 className="mx-4 mb-8 font-bold text-xl 	">
        Sigue mi recorrido académico
      </h1>

      <Accordion showDivider={false} itemClasses={itemClasses}>
        {data.map((item) => (
          <AccordionItem
            key={item.title}
            aria-label={item.title}
            title={item.title}
          >
            {item.grade && (
              <Table
              hideHeader 
              isStriped 
                key={item.title}
                removeWrapper
                aria-label={"Notas de la " + item.title}
                className="text-[#280058]"
              >
                <TableHeader  columns={columns1}>
                  {(column) => (
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                  )}
                </TableHeader>
                <TableBody items={item.grade}>
                  {(item) => (
                    <TableRow key={item.key}>
                      {(columnKey) => (
                        <TableCell className=" font-medium">
                          {getKeyValue(item, columnKey)}
                        </TableCell>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Grades;
