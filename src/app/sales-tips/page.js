import ConversationBox from "../components/sales-tips/conversationBox";

export default function SalesTips() {
  return (
    <>
      <h1>Want to know more about sales?</h1>
      <form>
        <input type="text" placeholder="Ask your question in here" />
      </form>
      <ConversationBox />
    </>
  );
}
