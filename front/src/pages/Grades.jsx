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
import axios from "axios";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";


export const loader = async () => {
  try {
    const data = await axios.get('https://educlass-2024.onrender.com/api/evaluation');
    return data
  } catch (error) {
    return redirect('/')
  }
}
const Grades = () => {
  const { data } = useLoaderData();
  const { document } = data.data

  const matematica = { title: "Matemática", grade: document.filter((item) => item.subject == "Matemática") }
  const cienciasNaturales = { title: "Ciencias Naturales", grade: document.filter((item) => item.subject == "Ciencias Naturales") }
  const lenguaLiteratura = { title: "Lengua y Literatura", grade: document.filter((item) => item.subject == "Lengua y Literatura") }
  const cienciasSociales = { title: "Ciencias Sociales", grade: document.filter((item) => item.subject == "Ciencias Sociales") }
  const educacionFisica = { title: "Educación Fisica", grade: document.filter((item) => item.subject == "Educación física") }
  const tecnologia = { title: "Tecnología", grade: document.filter((item) => item.subject == "Tecnología") }
  const artes = { title: "Artes", grade: document.filter((item) => item.subject == "Artes") }

  const data1 = [matematica, cienciasNaturales, lenguaLiteratura, cienciasSociales, educacionFisica, tecnologia, artes]

  //este array se utiliza para sincronizar las tablas
  const columns1 = [
    {
      key: "testDate",
      label: "Fecha",
    },
    {
      key: "title",
      label: "Tema",
    },
    {
      key: "grade",
      label: "Nota",
    },
  ];
  //obejto para el estilo del acordion
  const itemClasses = {
    base: " mx-2 mb-6  shadow-md shadow-[#7222d366]  rounded-xl border-1 border-[#7222D3] ",
    title: "font-medium	text-lg  text-[#280058]	",
    trigger:
      "px-2 py-0   data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center ",
    indicator: "text-2xl  text-[#280058] ",
    content: "text-small px-2 mx-2 my-3  ",
  };
  return (
    <>
    <Helmet>
        <title>Mi recorrido académico</title>
        <meta name="description" content="Podrás encontrar las materias y sus notas, con la respectiva fecha y tema evaluado." />
      </Helmet>
    <section className=" mt-7  text-[#280058] h-screen">
      <h1 className="mx-4 mb-10 font-bold text-xl 	">
        Sigue mi recorrido académico
      </h1>
      <Accordion showDivider={false} itemClasses={itemClasses} >
        {data1.map((item) => (
          <AccordionItem
            key={item.title}
            aria-label={item.title}
            title={item.title}
          >
            {item.grade && (
              <Table
                hideHeader
                isStriped
                key={item.id}
                removeWrapper
                aria-label={"Notas de la "}
                className="text-[#280058]"
              >
                <TableHeader columns={columns1}>
                  {(column) => (
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                  )}
                </TableHeader>
                <TableBody items={item.grade}>
                  {(item) => (
                    <TableRow key={item._id}>
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
    </>
  );
};

export default Grades;
