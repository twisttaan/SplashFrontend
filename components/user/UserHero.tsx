import {
  CalendarIcon,
  ChatAlt2Icon,
  HeartIcon,
  UserGroupIcon,
  UsersIcon
} from "@heroicons/react/solid";
import moment from "moment";
import { APIUser } from "../../types";
import UserMenu from "./UserMenu";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function UserHero(props: { user: APIUser }) {
  return (
    <div className="p-5 bg-zinc-800 my-44 flex flex-col rounded-xl drop-shadow-2xl w-2/3">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
            {props.user.displayName}{" "}
            <span className="text-gray-400 text-sm">
              @{props.user.username}
            </span>
          </h2>
          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <UserGroupIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              {props.user.followers.length} followers
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <UsersIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              {props.user.following.length} following
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Made on the{" "}
              {moment(props.user.createdAt).format("Do of MMMM YYYY")}
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <HeartIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              Follow
            </button>
          </span>

          <span className="hidden sm:block ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ChatAlt2Icon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              Message
            </button>
          </span>

          <span className="sm:ml-3">
            <UserMenu user={props.user} />
          </span>
        </div>
      </div>
    </div>
  );
}
