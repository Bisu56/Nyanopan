const API_URL = '/api';

class AuthService {
  getToken() {
    return localStorage.getItem('token');
  }

  async register(name, email, password, passwordConfirmation) {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.errors 
        ? Object.values(data.errors).flat().join(', ')
        : (data.message || 'Registration failed');
      throw new Error(errorMessage);
    }

    return data;
  }

  async login(email, password) {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.errors 
        ? Object.values(data.errors).flat().join(', ')
        : (data.message || 'Login failed');
      throw new Error(errorMessage);
    }

    return data;
  }

  async logout() {
    const token = this.getToken();
    const response = await fetch(`${API_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Logout failed');
    }

    return data;
  }

  async getUser() {
    const token = this.getToken();
    const response = await fetch(`${API_URL}/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to get user');
    }

    return data;
  }
}

export const authService = new AuthService();
