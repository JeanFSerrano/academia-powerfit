import { GoLocation } from 'react-icons/go'
import { IoMdTime } from 'react-icons/io'
import { GiSmartphone } from 'react-icons/gi'

const Contact = () => {
  return (
    <section>
      <h2 id='contato' className='text-center text-4xl mt-14 mb-4'>FAÇA CONTATO</h2>
      <p className='text-center'> Veja nossos horários de funcionamento e nossa localização, agende uma visita e venha nos conhecer.
      </p>
      <div className='xs:flex-col items-center md:flex-row md:items-start flex justify-around mt-10'>
        <div >
          <div className='flex items-center mb-2'>
            <IoMdTime size={40} className='text-red-500 mr-2' />
            <h3 className='text-2xl '>Horário de Funcionamento:</h3>
          </div>
            <p>Segunda a sexta de 06:00 às 22:00.</p>
            <p>Sábados de 08:00 às 11:00.</p>
          <div className='xs:mb-8 md:mb-0 flex items-center mt-2'>
            <GiSmartphone size={25} className='text-red-500 mr-2' />
            <p> Ligue agora: (27) 9 9994-2414</p>
          </div>
        </div>
        <div className=''>
          <div className='xs:p-4  md:p-0 flex items-center mb-2'>
            <GoLocation size={40} className='text-red-500 mr-2 xs:ml-6 md:ml-0' />
            <h3 className='text-2xl'>Endereço:</h3>
          </div>
          <div className='xs:text-center px-4 md:text-left md:px-0'>
            <p>Rua dos Motoristas, 525 - Bairro Operário - Cariacica/ES</p>
            <p>CEP: 29147-708</p>
          </div>

          <div className='mt-4 mb-10'>
            <iframe width="450" height="370" src="https://maps.google.com/maps?q=PowerFit%20DDD&t=&z=19&ie=UTF8&iwloc=&output=embed">
            </iframe>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contact