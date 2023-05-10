const Section = ({title, children}) => {
  return (
    <div className='flex gap-5 p-5 border'>
      <h1 className='text-start text-2xl font-bold'>{title}</h1>
      {children}
    </div>
  )
}

export default Section
