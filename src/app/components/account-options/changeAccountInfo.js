export default function ChangeAccountInfo() {
  return (
    <div className="absolute z-50 w-2/6 h-3/6 bg-orange-200 border-2 border-orange-400 mt-32">
      <h2 className="text-center text-3xl mt-5">Change account information</h2>
      <div className="flex mx-auto border-4 rounded-lg border-orange-400 justify-center w-4/6 mt-7">
        <from className=" [&_*]:block [&_input]:p-3 [&_input]:w-full [&_input]:mt-5 [&_input]:rounded-lg">
          <input placeholder="Name" />
          <input placeholder="E-mail" />
          <input placeholder="Shop URL" />
          <div className="w-full [&_*]:inline-block mt-10 [&_*]:py-3 space-x-2 [&_*]:w-40 [&_*]:rounded-full mb-3">
            <button className="bg-orange-400">Save</button>
            <button className="bg-orange-600">Cancel</button>
          </div>
        </from>
      </div>
    </div>
  );
}
