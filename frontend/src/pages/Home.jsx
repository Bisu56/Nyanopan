export default function Home({ user, onLogout }) {
  return (
    <div className="home-container">
      <h1>Welcome{user?.name ? `, ${user.name}` : ''}!</h1>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
          You are now logged in to Nyanopan E-Commerce
        </p>
        <button onClick={onLogout} className="btn" style={{ maxWidth: '200px' }}>
          Logout
        </button>
      </div>
    </div>
  );
}
