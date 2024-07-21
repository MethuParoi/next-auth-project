import getUserData from "@/actions/getUserData";
import UserCard from "@/components/UseCard";

export default async function Home() {
  const userData = await getUserData();

  if (!userData) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="">
        <UserCard userData={userData} />
      </div>
    </div>
  );
}
