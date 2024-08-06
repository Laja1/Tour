import { assetsLinks } from "../../assets/assetsLinks"

type labelProps ={
    labelDescription:string,label:string
}

const Accordion = ({labelDescription,label}:labelProps) => {
  return (
    <div>
      <div className="collapse collapse-plus rounded-none bg-[#0F1012] text-[#EFEFEB]">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-[10px] lg:text-lg poppins-semibold  font-medium flex-row flex items-center gap-3 space-x-3"><img src={assetsLinks.star} className="size-4"/>{label}</div>
        <div className="collapse-content">
          <p className="text-[#FFFFFF]  poppins-medium text-[9px]">{labelDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
