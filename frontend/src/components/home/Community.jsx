import CardList from "./CardList";
import CommunityFilter from "./CommunityFilter";

export default function Community() {
  return (
    <div className="pt-16">
      <div className="relative flex gap-4 w-[1400px] mt-0.5 overflow-y-hidden m-auto bg-white p-2">
        <CommunityFilter />
        <CardList />
      </div>
    </div>
  );
}

