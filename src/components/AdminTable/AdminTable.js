import React from "react";

const AdminTable = ({ data }) => {
  return (
    <div className={`overflow-x-auto w-full px-8`}>
      <table className="table-auto w-full mb-12">
        <thead className="  bg-indigo-300">
          <tr>
            <th className={`md:px-4 py-4 text-indigo-900  text-sm `}>Id</th>
            <th className={`md:px-4 py-4 text-indigo-900  text-sm`}>Name</th>
            <th className={`md:px-4 py-4 text-indigo-900  text-sm`}>Status</th>
            <th className={`md:px-4 py-4 text-indigo-900  text-sm`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <br />

          {data.map((user, index) => (
            <>
              {index !== 0 && <br />}
              <tr key={user.id} className="border border-gray-300 mb-2">
                <td className="text-center text-sm">{user.id}</td>
                <td className="text-center text-sm">{user.name}</td>
                <td className="text-center text-sm">{user.status}</td>
                <td className="text-center text-sm  flex flex-row items-center justify-center">
                  {user.actions.map((action) => action)}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
