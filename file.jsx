import { useState } from 'react';
import { Wallet, LineChart, ShoppingCart, Calendar, PlusCircle, Search, Home, ShoppingBag } from 'lucide-react';

export default function ExpenseTracer() {
  const [activePage, setActivePage] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);
  
  const summaryCards = [
    { 
      icon: <LineChart size={18} />, 
      title: "Total Expenses", 
      value: "$4,285.00", 
      trend: "12.5% from last month", 
      trendUp: true,
      bgClass: "bg-blue-100 text-blue-600"
    },
    { 
      icon: <Wallet size={18} />, 
      title: "Budget Left", 
      value: "$1,715.00", 
      trend: "8.3% from last month", 
      trendUp: false,
      bgClass: "bg-green-100 text-green-600"
    },
    { 
      icon: <ShoppingCart size={18} />, 
      title: "Top Category", 
      value: "Shopping", 
      trend: "32% of total expenses",
      bgClass: "bg-yellow-100 text-yellow-600"
    },
    { 
      icon: <Calendar size={18} />, 
      title: "Pending Bills", 
      value: "3", 
      trend: "Due this week",
      bgClass: "bg-red-100 text-red-600"
    }
  ];

  const transactions = [
    {
      icon: <ShoppingBag size={14} />,
      iconBg: "bg-red-100 text-red-600",
      description: "Online Shopping",
      date: "May 2, 2025",
      amount: "$250.00",
      status: "Completed",
      statusClass: "bg-green-100 text-green-600"
    },
    {
      icon: <Home size={14} />,
      iconBg: "bg-blue-100 text-blue-600",
      description: "Rent Payment",
      date: "May 1, 2025",
      amount: "$1,200.00",
      status: "Completed",
      statusClass: "bg-green-100 text-green-600"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center text-xl font-bold text-blue-500">
              <Wallet className="mr-2" />
              Expense Tracer
            </div>
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#" 
                  className={`font-medium ${activePage === 'dashboard' ? 'text-blue-500' : 'text-gray-700'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage('dashboard');
                  }}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`font-medium ${activePage === 'about' ? 'text-blue-500' : 'text-gray-700'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage('about');
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`font-medium ${activePage === 'settings' ? 'text-blue-500' : 'text-gray-700'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage('settings');
                  }}
                >
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Take Control of Your Finances</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Track expenses, analyze spending patterns, and make informed financial decisions with Expense Tracer.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded transition duration-200 transform hover:-translate-y-1">
            Get Started
          </button>
          <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded ml-4 transition duration-200 transform hover:-translate-y-1 hover:bg-white hover:bg-opacity-10">
            Learn More
          </button>
        </div>
      </section>

      {/* Dashboard */}
      {activePage === 'dashboard' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded flex items-center"
                onClick={() => setShowModal(true)}
              >
                <PlusCircle size={16} className="mr-2" /> Add Expense
              </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {summaryCards.map((card, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-5 transition duration-300 transform hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${card.bgClass}`}>
                      {card.icon}
                    </div>
                    <div className="text-gray-500 text-sm">{card.title}</div>
                  </div>
                  <div className="text-2xl font-bold mb-2">{card.value}</div>
                  <div className="flex items-center text-sm">
                    {card.trendUp !== undefined && (
                      card.trendUp ? 
                        <span className="text-green-500 mr-1">↑</span> : 
                        <span className="text-red-500 mr-1">↓</span>
                    )}
                    <span>{card.trend}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-5">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-800">Monthly Expenses</h3>
                  <div className="flex">
                    <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded mr-2">Week</button>
                    <button className="text-xs px-3 py-1 rounded border border-gray-200">Month</button>
                    <button className="text-xs px-3 py-1 rounded border border-gray-200 ml-2">Year</button>
                  </div>
                </div>
                <div className="h-64 flex items-end space-x-1">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                    const heights = ['h-3/5', 'h-4/5', 'h-2/5', 'h-3/5', 'h-4/5', 'h-3/4', 'h-1/2'];
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div className={`w-full ${heights[i]} bg-blue-400 bg-opacity-70 rounded-t-sm`}></div>
                        <div className="text-xs text-gray-500 mt-2">{day}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-800">Expense Categories</h3>
                  <div className="flex">
                    <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded mr-2">All</button>
                    <button className="text-xs px-3 py-1 rounded border border-gray-200">Top 5</button>
                  </div>
                </div>
                <div className="h-64 flex items-end space-x-1">
                  {[
                    { label: 'Shopping', height: 'h-4/5', color: 'bg-red-400' },
                    { label: 'Food', height: 'h-3/5', color: 'bg-yellow-400' },
                    { label: 'Transport', height: 'h-3/5', color: 'bg-green-400' },
                    { label: 'Bills', height: 'h-2/5', color: 'bg-blue-400' },
                    { label: 'Entertain', height: 'h-1/3', color: 'bg-purple-400' }
                  ].map((cat, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div className={`w-full ${cat.height} ${cat.color} bg-opacity-70 rounded-t-sm`}></div>
                      <div className="text-xs text-gray-500 mt-2">{cat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Transactions */}
            <div className="bg-white rounded-lg shadow-sm p-5">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-lg text-gray-800">Recent Transactions</h3>
                <div className="flex items-center bg-gray-100 rounded px-3 py-2 w-64">
                  <Search size={16} className="text-gray-500 mr-2" />
                  <input 
                    type="text" 
                    placeholder="Search transactions..." 
                    className="bg-transparent border-none w-full text-sm outline-none"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-500">
                      <th className="pb-4">Category</th>
                      <th className="pb-4">Description</th>
                      <th className="pb-4">Date</th>
                      <th className="pb-4">Amount</th>
                      <th className="pb-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction, index) => (
                      <tr key={index} className="border-t border-gray-100">
                        <td className="py-4">
                          <div className={`w-8 h-8 ${transaction.iconBg} flex items-center justify-center rounded`}>
                            {transaction.icon}
                          </div>
                        </td>
                        <td className="py-4">{transaction.description}</td>
                        <td className="py-4">{transaction.date}</td>
                        <td className="py-4">{transaction.amount}</td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${transaction.statusClass}`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Add Expense Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Add New Expense</h3>
              <button 
                className="text-gray-500 hover:text-red-500"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="What did you spend on?"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Amount</label>
              <input 
                type="number" 
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="0.00"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Category</label>
              <select className="w-full p-3 border border-gray-300 rounded">
                <option>Shopping</option>
                <option>Food</option>
                <option>Transport</option>
                <option>Bills</option>
                <option>Entertainment</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Date</label>
              <input 
                type="date" 
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            
            <div className="flex justify-end">
              <button 
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded mr-3"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Save Expense
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}