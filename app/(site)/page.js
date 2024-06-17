async function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export default async function Home() {
  const load = await delay(2000);

  const data = {
    name: "9jacoder",
    description: "like and subscribe to the channel",
    image:
      "https://yt3.googleusercontent.com/IEj72jXH6CSAR7Io4OFDmBZbd7jpRxTSZWm8W6CIsDs0KyqG5deJlJTop89dQNhFzrOYl6hUxA=s900-c-k-c0x00ffffff-no-rj",
  };

  return (
    <main className="max-w-xl mx-auto flex justify-center mt-5">
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mt-5">
        <div class={`flex space-x-4`}>
          <img src={data.image} className="h-10 w-10 rounded-full" />

          <div class="flex-1 space-y-6 py-1">
            <div className="h-2">{data.name}</div>

            <div class="space-y-3">
              <div className="">{data.description}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
