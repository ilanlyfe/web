import React from "react";
import { ItemData, Guest } from "@/interfaces";
export default function Article(data: ItemData) {
  return (
    <article
      key={data.id}
      className="flex flex-col items-start justify-between"
    >
      <div className="relative w-full">
        <img
          src={data.media[0].srcUri}
          alt=""
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={data.createdAt} className="text-gray-500">
            {data.createdAt}
          </time>
          <a
            href={data.href}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {data.title}
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={data.href}>
              <span className="absolute inset-0" />
              {data.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {data.description}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img
            src={data.media[0].srcUri}
            alt=""
            className="h-10 w-10 rounded-full bg-gray-100"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href={data.href}>
                <span className="absolute inset-0" />
                {(data.creator as Guest).userName}
              </a>
            </p>
            <p className="text-gray-600">{(data.creator as Guest).userName}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
