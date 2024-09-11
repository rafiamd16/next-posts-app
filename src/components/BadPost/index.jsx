import { formatDate } from "@/lib/utils";

const BadPostList = ({ badPostList }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {badPostList.map((post, i) => {
        return (
          <div
            key={i}
            className="bg-gray-50 border border-gray-200 shadow-lg py-4 p-5 rounded-md relative"
          >
            <h3 className="text-sm font-medium">~ {post.name}</h3>
            <p className="text-xs text-gray-700 py-3">{post.message}</p>
            <p className="text-[10px] text-gray-700 text-right">
              {formatDate(post.createdAt)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BadPostList;
