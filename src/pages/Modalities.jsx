import Card from '../components/Card'
import { modalities } from '../mockIModalities/modalities'

const Modalities = () => {


  return (
    <>
      <div className='text-center text-white'>
        <h2 id='modalidades' className='text-4xl mt-14 mb-4'>Nossas modalidades</h2>
        <p>Trabalhamos para ofercer várias modalidades de treino da maneira mais eficiente possível e que se<br></br> encaixe com as necessidades de nossos clientes.</p>
      </div>

      <section className="xs:flex-col  md:flex-row flex justify-around items-center gap-7 mt-10 p-4 m-auto">
        {modalities.map(modality => (
          <Card
            key={modality.name}
            icon={modality.icon}
            title={modality.name}
            days={modality.days}
            price={modality.price}
            obs={modality.obs}
          />
        ))}
      </section>
    </>

  )
}

export default Modalities