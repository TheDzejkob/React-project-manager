import './App.css';
import Data from "./data.json"



function App() {
    const handleLogin = () => {
        const user = usersData.users.find(u => u.username === username && u.password === password);
        if (user) {
            setError('');
            onLogin(user.userId);
        } else {
            
        }
    };

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
