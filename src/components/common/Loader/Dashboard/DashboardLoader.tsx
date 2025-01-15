const DashboardLoader = () => {
    return (
        <div className="flex flex-col gap-[2rem]">
          {/* Skeleton Loader for My Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="h-4 w-32 bg-gray-300 rounded"></div> {/* Header */}
                <div className="h-4 w-16 bg-gray-300 rounded"></div> {/* "See All" Text */}
              </div>
              <div className="flex overflow-auto gap-[2rem]">
                {/* Bank Card Skeletons */}
                <div className="min-w-[21rem] h-[13rem] md:flex-row md:h-[15rem] rounded-3xl bg-gray-300 animate-pulse"></div>
                <div className="min-w-[21rem] h-[13rem] md:flex-row md:h-[15rem] rounded-3xl bg-gray-300 animate-pulse"></div>
              </div>
            </div>
  
            {/* Skeleton Loader for Recent Transaction */}
            <div className="col-span-1 flex flex-col gap-4">
              <div className="h-4 w-40 bg-gray-300 rounded"></div> {/* Header */}
              <div className="p-6 overflow-auto bg-gray-100 h-[13rem] md:h-[15rem] animate-pulse">
                {/* Placeholder for transactions */}
                <div className="flex flex-col gap-4">
                  <div className="h-10 w-full bg-gray-300 rounded-md"></div>
                  <div className="h-10 w-full bg-gray-300 rounded-md"></div>
                  <div className="h-10 w-full bg-gray-300 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Skeleton Loader for Weekly Activity and Expense Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
              <div className="h-4 w-40 bg-gray-300 rounded"></div> {/* Header */}
              <div className="p-6 overflow-auto bg-gray-100 h-[14rem] md:h-[17rem] animate-pulse"></div> {/* Bar Chart */}
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              <div className="h-4 w-40 bg-gray-300 rounded"></div> {/* Header */}
              <div className="p-6 overflow-auto bg-gray-100 h-[14rem] md:h-[17rem] animate-pulse"></div> {/* Pie Chart */}
            </div>
          </div>
  
          {/* Skeleton Loader for Quick Transfer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 flex flex-col gap-4">
              <div className="h-4 w-40 bg-gray-300 rounded"></div> {/* Header */}
              <div className="p-6 overflow-auto bg-gray-100 h-[14rem] md:h-[17rem] animate-pulse">
                {/* Placeholder for Quick Transfer */}
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 bg-gray-300 rounded-full"></div> {/* Previous Button */}
                  <div className="h-32 w-full bg-gray-300 rounded-md"></div> {/* User List */}
                  <div className="h-10 w-10 bg-gray-300 rounded-full"></div> {/* Next Button */}
                </div>
              </div>
            </div>
  
            {/* Skeleton Loader for Balance History */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
              <div className="h-4 w-40 bg-gray-300 rounded"></div> {/* Header */}
              <div className="p-6 overflow-auto bg-gray-100 h-[14rem] md:h-[17rem] animate-pulse"></div> {/* Line Chart */}
            </div>
          </div>
        </div>
      );
}

export default DashboardLoader;