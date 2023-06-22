import { FC } from "react";
import { Guest } from "@/interfaces";
import Icon, { IconVariant } from "@/components/core/icons";

import { ItemData } from "@/interfaces";

export interface GemProps {
  data: ItemData;
  expanded?: boolean;
}
const Gem: FC<GemProps> = ({ data: { id, media, creator, title } }) => {
  return (
    <div className="">
      <div className="flex flex-1 flex-col p-8">
        <img
          className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
          src={media[0].srcUri}
          alt=""
        />
        <h3 className="mt-6 text-sm font-medium text-gray-900">
          {(creator as Guest).userName}
        </h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm text-gray-500">{title}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {title}
            </span>
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1"></div>
          <div className="-ml-px flex w-0 flex-1">
            <a
              href={`tel:${3053334444}`}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <Icon variant={IconVariant.PHONE} />
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gem;
