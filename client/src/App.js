import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';

function App() {
    return (
        <div>
            <BrowserRouter>
                <h1>Favorite authors</h1>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path={'/author/new'} element={<Create />} />
                    <Route path={'/:id/update'} element={<Update />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
