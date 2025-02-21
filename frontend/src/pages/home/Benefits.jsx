import BenefitCard from "./cards/BenefitCard";

export default function Benefits() {
  return (
    <>
    <div className="grid grid-cols-4 max-w-7xl gap-6 items-center justify-center m-auto">
      <BenefitCard image={"money.gif"} title={"Budget-Friendly Prints"} subtitle={"Print More, Spend Less - Every Time!"} />
      <BenefitCard image={"high-quality.gif"} title={"Premium Print Quality"} subtitle={"Prints That Speak Quality!"} />
      <BenefitCard image={"graduation.gif"} title={"Student First Always "} subtitle={"Designed to Fit Your Student Life!"} />
      <BenefitCard image={"rocket.gif"} title={"Fast & Reliable "} subtitle={"Fast Delivery, No Waiting Around!"} />
    </div>
    </>
  )
}
