import { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import { authService } from './services/auth';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authMode, setAuthMode] = useState('login');

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const data = await authService.getUser();
        setUser(data.user);
      } catch (err) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch (err) {
      console.error('Logout error:', err);
    }
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setAuthMode('login');
  };

  if (loading) {
    return (
      <div className="auth-container">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {user && (
        <nav className="navbar">
          <a href="/" className="navbar-brand">Nyanopan</a>
          <div className="navbar-menu">
            <span>Welcome, {user.name}</span>
            <a className="nav-link" onClick={handleLogout}>Logout</a>
          </div>
        </nav>
      )}
      
      {user ? (
        <Home user={user} onLogout={handleLogout} />
      ) : authMode === 'login' ? (
        <Login 
          onLoginSuccess={handleLoginSuccess} 
          switchToRegister={() => setAuthMode('register')}
        />
      ) : (
        <Register 
          onLoginSuccess={handleLoginSuccess}
          switchToLogin={() => setAuthMode('login')}
        />
      )}
    </div>
  );
}

export default App;
