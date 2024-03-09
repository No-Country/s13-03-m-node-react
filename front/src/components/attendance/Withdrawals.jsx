import { Button, Input, Textarea } from "@nextui-org/react"
import Swal from "sweetalert2"
import { useFormik } from 'formik';
import { withdrawalSchema } from '../../schemas/withdrawalSchema.js'
import axios from 'axios';
import { getCurrentDateFormatted } from "../../utils/months.js";
import { useAuth } from "../../contexts/authContext.jsx";
import { useNavigate } from "react-router-dom";

const Withdrawals = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const handleAlert = () => {
    Swal.fire({
      icon: 'success',
      title: 'Retiro enviado',
      text: '¡Tu aviso se envió con éxito!',
      timer: 2000
    })
  }

  const initialValues = {
    studentid: user._id,
    date: getCurrentDateFormatted(),
    status: 'retiro',
    name: '',
    document: '',
    message: '',
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validateOnChange: true,
    validationSchema: withdrawalSchema,
    onSubmit: (data) => {
      axios.post('https://educlass-2024.onrender.com/api/attendance/', data)
      handleAlert()
      setTimeout(() => {
        navigate('/asistencias')
      }, 2000)
    }
  });

  return (
    <div className="text-3xl h-screen w-full flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-left mt-10 p-4 text-[#280058]">Formulario de retiro</h1>
      <p className="text-sm p-4 text-[#280058]">Para retirar a tu hijo o hija, por favor completar los siguientes campos.</p>

      <form className="flex flex-col gap-4 justify-center items-center" onSubmit={handleSubmit}>
        <Input variant="bordered" name="name" label="Nombre y apellido del responsable" placeholder="Ingresa tu nombre y apellido" type="text" required className="w-full px-4 py-2 focus:border-violet-500 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40" isRequired onChange={handleChange} value={values.name} isInvalid={errors.name ? true : false} errorMessage={errors.name} />

        <Input variant="bordered" name="document" label="Documento / Pasaporte" placeholder="Ingresa tu documento o pasaporte" type="text" required className="w-full px-4 py-2 focus:border-violet-500 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40" isRequired onChange={handleChange} value={values.document} isInvalid={errors.document ? true : false} errorMessage={errors.document} />

        <Textarea variant="bordered" name="message" label="Mensaje" placeholder="Indicar motivo del retiro" required className="w-full px-4 py-2 focus:border-violet-500 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40" isRequired onChange={handleChange} value={values.message} isInvalid={errors.message ? true : false} errorMessage={errors.message} />

        <Button className="w-[320px]" size="lg" color="secondary" type="submit">Enviar aviso</Button>
      </form>
    </div>
  )
}

export default Withdrawals