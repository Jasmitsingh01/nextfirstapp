import Headings from "@/components/Headings";
import ReviewOption from "@/components/ReviewOption";
import ReviewStar from "@/components/ReviewStar";
import SelectOption from "@/components/SelectOption";

export default function Home() {
  return (
    <div className=" px-1 py-5">
      <h4 className=" text-3xl font-semibold my-10">Leave a review</h4>
      <form >
        <div className=" mb-5 border-b-2 border-dashed">
          <Headings heading="Safety" subHeading="How Safe did you feel with Trausti?" />
          <ReviewStar/>
        </div>
        <div className=" mb-5 border-b-2 border-dashed">
          <Headings heading="Communication" subHeading="How easy was to communicate with Trausti? " />
          <ReviewStar/>

        </div>
        <div className=" mb-5 border-b-2 border-dashed">
          <Headings heading="Would you recommend Trausti?" subHeading="Your opinion won't be posted publicy" />
              <ReviewOption/>        
                  </div>

        <div className=" mb-5 border-b-2 border-dashed">
          <Headings heading="Praise" subHeading="What traits best describe Trausti?" />
          <div className="flex flex-wrap gap-3">
          <SelectOption text="Adventure"/> 
          <SelectOption text="Clean"/>
          <SelectOption text="Good listerner"/>
          
          </div>

        </div>
        <button type="button" className=" block mx-auto w-1/6 bg-green-500 text-green-950 font-semibold4 p-3">Publish Review</button>
      </form>




    </div>
  );
}
