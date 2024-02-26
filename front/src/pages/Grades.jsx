import {
    Accordion,
    AccordionItem,
    Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue
} from "@nextui-org/react";

const Grades = () => {
    const data = [
        {
            title: "Materia 1",
            grade: [
                { key: "m1.1", date: "01/01/2022", tema: "??", grade: 10 },
                { key: "m1.2", date: "01/01/2022", tema: "??", grade: 18 },
                { key: "m1.3", date: "01/01/2022", tema: "??", grade: 16 },
                { key: "m1.4", date: "01/01/2022", tema: "??", grade: 15 },
                { key: "m1.5", date: "01/01/2022", tema: "??", grade: 14 },
                { key: "m1.6", date: "01/01/2022", tema: "??", grade: 13 },
            ],
        },
        {
            title: "Materia 2",
            grade: [
                { key: "m2.1",date: "01/01/2022", tema: "??", grade: 12 },
                {  key: "m2.2",date: "01/01/2022", tema: "??", grade: 11 },
                { key: "m2.3",date: "01/01/2022", tema: "??", grade: 9 },
                {  key: "m2.4",date: "01/01/2022", tema: "??", grade: 8 },
                { key: "m2.5",date: "01/01/2022", tema: "??", grade: 4 },
            ],
        },
        {
            title: "Materia 3",
            grade: [
                {key: "m3.1", date: "01/01/2022", tema: "??", grade: 6 },
                { key: "m3.2",date: "01/01/2022", tema: "??", grade: 3 },
                { key: "m3.3",date: "01/01/2022", tema: "??", grade: 1 },
            ],
        },
        {
            title: "Materia 4",
            grade: [{ key: "m4.1",date: "01/01/2022", tema: "??", grade: 7 }],
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
    return (
        <section className=" my-8">
            <h1 className="mx-4 mb-8 font-medium text-2xl text-center	">Sigue mi recorrido académico</h1>

            <Accordion variant="splitted" >
                {data.map((item) => (
                    <AccordionItem
                        key={item.title}
                        aria-label={item.title}
                        title={item.title}
                        className=" font-medium	text-xl mx-2 mb-2"
                    >                       
                        {item.grade &&
                            <Table key={item.title} removeWrapper aria-label={"Notas de la "+item.title} >
                            <TableHeader columns={columns1} >
                                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                            </TableHeader>
                            <TableBody items={item.grade}>
                                {(item) => (
                                    <TableRow key={item.key} >
                                        {(columnKey) => <TableCell className=" font-medium">{getKeyValue(item, columnKey)}</TableCell>}
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>}

                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
};

export default Grades;
