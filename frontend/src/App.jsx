import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route element={<privateRoute allowedRoles={["admin"]}/>}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/manage-users" element={<ManageUsers />} />
          <Route path="/admin/create-task" element={<CreateTask />} />
          <Route path="/admin/manage-tasks" element={<ManageTasks />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<SignUp />} />
          </Route>

          <Route element={<privateRoute allowedRoles={["users"]}/>}></Route>
          <Route path="/user/dashboard" element={<userDashboard/>}/>
          <Route path="/user/tasks" element={<MyTasks/>}/>
          <Route path="/user/task-details/:id" element={<TaskDetails/>}/>

        </Routes>
      </div>
    </Router>
  )
}

export default App