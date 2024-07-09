import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MyComponent from './MyComponent';
import AnotherComponent from './AnotherComponent';
import TodoList from './TodoList';
import { AppProvider } from './AppContext';
import UsersList from './UsersList';

function App() {
  return (
    <AppProvider>
      <Router>
        <div>
          <h1>Hello, React!</h1>
          <nav>
            <ul>
              <li>
                <Link to="/my-component">My Component</Link>
              </li>
              <li>
                <Link to="/another-component">Another Component</Link>
              </li>
              <li>
                <Link to="/todo-list">Todo List</Link>
              </li>
              <li>
                <Link to="/users-list">Users List</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/my-component" element={<MyComponent message="Welcome to my component!" />} />
            <Route path="/another-component" element={<AnotherComponent />} />
            <Route path="/todo-list" element={<TodoList />} />
            <Route path="/users-list" element={<UsersList />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}
export default App;
