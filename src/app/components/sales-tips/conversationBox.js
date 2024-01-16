export default function ConversationBox() {
  return (
    <div className="bg-orange-100 w-11/12 h-4/6 border-8 border-orange-400 border-solid rounded-t-2xl p-5">
      <div className="bg-orange-400 rounded-2xl py-4 pl-3 w-10/12 text-wrap">
        question
      </div>
      <div className="bg-orange-200 rounded-2xl py-4 pl-3 w-10/12 text-wrap mt-5">
        response
      </div>
    </div>
  );
}
