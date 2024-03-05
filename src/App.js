import "./App.css";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sidebar from "./components/Sidebar/Sidebar";
import BookList from "./components/BookList/BookList";

function App() {
  return (
    <div className='App'>
      <Header />

      <div className='content'>
        <sidebar class='sidebar'>
          <Sidebar />
        </sidebar>

        <main class='main'>
          <Categories className='content' />
          <BookList />
        </main>
      </div>
    </div>
  );
}

export default App;
