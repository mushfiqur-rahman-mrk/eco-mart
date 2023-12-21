import WishRow from "./WishRow";

const WishTable = ({data,refetch}) => {
    // console.log(Object.keys(data).join(','));

  return (
    <>
 
        <div className="flex flex-col justify-center h-full w-full">
          <div className="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
 
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Product</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Price</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Stock Status</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center"></div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {
                        data?.map(item=><WishRow key={item._id} item={item} refetch={refetch}></WishRow>)
                    }
  
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
 
    </>
  );
};

export default WishTable;