"use client";
import React, { useEffect, useState } from "react";

async function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

const TestPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await delay(2000);

    setData({
      name: "9jacoder",
      description: "like and subscribe to the channel",
      image:
        "https://yt3.googleusercontent.com/IEj72jXH6CSAR7Io4OFDmBZbd7jpRxTSZWm8W6CIsDs0KyqG5deJlJTop89dQNhFzrOYl6hUxA=s900-c-k-c0x00ffffff-no-rj",
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="mx-auto p-4 max-w-sm">
        <button
          type="button"
          class="bg-indigo-500 flex flex-row rounded-md text-white border border-1 border-black"
          disabled
        >
          <img src="spinner.svg" className="w-8" />
          <span className="my-auto">loading...</span>
        </button>
      </div>
    );
  }

  return (
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
  );
};

export default TestPage;
