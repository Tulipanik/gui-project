export default function MostlyViedOptions({ name, picesSold, views }) {
  return (
    <div className="flex bg-orange-100 h-24 mx-auto mx-2 mt-5">
      <div className="w-3/4 h-full">{name}</div>
      <div className="flex flex-col justify-center border-l-4 border-orange-400 my-2 p-2">
        <div>
          Number of pieces sold: <span>{picesSold}</span>
        </div>
        <div>
          Number of views: <span>{views}</span>
        </div>
      </div>
    </div>
  );
}
