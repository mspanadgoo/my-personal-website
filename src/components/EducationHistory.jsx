const EducationHistory = ({history}) => {
  const universityTitle = history?.universityTitle
  const degree = history?.degree
  const major = history?.major
  const graduationDate = history?.graduationDate
  const cityName = history?.cityName
  const universityWebsite = history?.universityWebsite
  const details = history?.details

  return (
    <div className='flex flex-col text-start gap-2 mx-10'>
      <div className='flex gap-5'>
        <div className='font-semibold'>
          {degree} - {major}
        </div>
        <div>{graduationDate}</div>
      </div>
      <div>
        <button href={universityWebsite}>{universityTitle}</button>, {cityName}
      </div>

      <ul className='list-disc list-outside px-5'>
        {details &&
          details.map((detail, key) => {
            return <li key={key}>{detail}</li>
          })} 
      </ul>
    </div>
  )
}

export default EducationHistory
