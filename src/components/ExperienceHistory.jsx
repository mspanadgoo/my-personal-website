import {Localization} from './localization/Localization'

const ExperienceHistory = ({history, index}) => {
  const jobTitle = history?.jobTitle ?? ''
  const companyName = history?.companyName ?? ''
  const companyWebsite = history?.companyWebsite ?? ''
  const cityName = history?.cityName ?? ''
  const startDate = history?.startDate ?? ''
  const endDate = history?.endDate ?? ''
  const isPresent = history?.isPresent ?? false
  const details = history?.details ?? []

  return (
    <div className='flex flex-col text-start gap-2 mx-10' key={index}>
      <div className='flex gap-5'>
        <div className='font-semibold'>{jobTitle}</div>
        <div>
          {startDate} - {isPresent ? Localization.PRESENET : endDate}
        </div>
      </div>
      <div>
        <button href={companyWebsite}>{companyName}</button>, {cityName}
      </div>
      {details &&
        details.map((detail, key) => {
          return (
            <div className='px-10' key={key}>
              ● {detail}
            </div>
          )
        })}
    </div>
  )
}

export default ExperienceHistory
