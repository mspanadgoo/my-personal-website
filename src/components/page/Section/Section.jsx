const Section = ({title, className, children, innerRef}) => {
  return (
    <div ref={innerRef} className={`flex flex-col gap-5 p-5 ${className ? className : ''}`}>
      <h1 className='text-start text-2xl font-bold'>{title}</h1>
      {children}
    </div>
  )
}

export default Section
