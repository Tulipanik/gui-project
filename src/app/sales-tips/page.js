import ConversationBox from "../components/sales-tips/conversationBox";

export default function SalesTips() {
  return (
    <div className="ml-10 mt-10 w-full h-full text-xl">
      <h1 className="text-3xl mb-10">Want to know more about sales?</h1>
      <form>
        <input
          className="w-11/12 p-2 rounded-lg drop-shadow-md"
          type="text"
          placeholder="Ask your question in here"
        />
      </form>
      <ConversationBox />
    </div>
  );
}
