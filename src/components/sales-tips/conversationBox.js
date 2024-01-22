export default function ConversationBox() {
  return (
    <div className="absolute bg-orange-100 w-11/12 h-3/5 border-8 border-orange-400 border-solid border-b-0 rounded-t-2xl p-5 bottom-0">
      <div className="bg-orange-400 rounded-2xl py-4 pl-3 w-10/12 text-wrap">
        question
      </div>
      <div className="bg-orange-200 rounded-2xl py-4 pl-3 w-10/12 text-wrap mt-5">
        response
      </div>
    </div>
  );
}
