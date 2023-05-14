import {Localization} from './localization/Localization'

const ExperienceHistory = ({history}) => {
  const jobTitle = history?.jobTitle ?? ''
  const companyName = history?.companyName ?? ''
  const companyWebsite = history?.companyWebsite ?? ''
  const cityName = history?.cityName ?? ''
  const startDate = history?.startDate ?? ''
  const endDate = history?.endDate ?? ''
  const isPresent = history?.isPresent ?? false
  const details = history?.details ?? []

  return (
    <div className='flex flex-col text-start gap-2 mx-10'>
      <div className='flex gap-5'>
        <div className='font-semibold'>{jobTitle}</div>
        <div>
          {startDate} - {isPresent ? Localization.PRESENT : endDate}
        </div>
      </div>
      <div>
        <button href={companyWebsite}>{companyName}</button>, {cityName}
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

export default ExperienceHistory
