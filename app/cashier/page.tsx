export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 dark:bg-black flex">
      {/* Sidebar */}
      <aside className="w-64 bg-green-900 dark:bg-zinc-900 shadow-xl p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-white mb-8">ePOS</h1>
        <nav className="flex flex-col gap-4">
          <a className="text-sm font-semibold text-gray-200 hover:text-green-600 transition-colors" href="#">
            Dashboard
          </a>
          <a className="text-sm font-semibold text-gray-200 hover:text-green-600 transition-colors" href="#">
            Sales
          </a>
          <a className="text-sm font-semibold text-gray-200 hover:text-green-600 transition-colors" href="#">
            Inventory
          </a>
          <a className="text-sm font-semibold text-gray-200 hover:text-green-600 transition-colors" href="#">
            Products
          </a>
          <a className="text-sm font-semibold text-gray-200 hover:text-green-600 transition-colors" href="#">
            Reports
          </a>
          <a className="text-sm font-semibold text-gray-200 hover:text-green-600 transition-colors" href="#">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-zinc-800 dark:text-white">Dashboard</h2>
          <button className="px-6 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-transform hover:scale-105">
            New Sale
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
            <p className="text-sm text-gray-500">Total Sales</p>
            <h3 className="text-2xl font-bold mt-2">₱ 125,430</h3>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
            <p className="text-sm text-gray-500">Transactions</p>
            <h3 className="text-2xl font-bold mt-2">328</h3>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
            <p className="text-sm text-gray-500">Low Stock Items</p>
            <h3 className="text-2xl font-bold mt-2">14</h3>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
            <p className="text-sm text-gray-500">Top Product</p>
            <h3 className="text-2xl font-bold mt-2">Milk Tea</h3>
          </div>
        </div>

        {/* Recent Transactions Table */}
        <div className="bg-white dark:bg-zinc-900 shadow-md rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-zinc-700">
                <th className="py-2">Receipt #</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 dark:border-zinc-800">
                <td className="py-2">000123</td>
                <td>2025-12-04</td>
                <td>Juan Dela Cruz</td>
                <td>₱ 350</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-zinc-800">
                <td className="py-2">000122</td>
                <td>2025-12-04</td>
                <td>Ana Santos</td>
                <td>₱ 540</td>
              </tr>
              <tr>
                <td className="py-2">000121</td>
                <td>2025-12-03</td>
                <td>Mark Lopez</td>
                <td>₱ 220</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
