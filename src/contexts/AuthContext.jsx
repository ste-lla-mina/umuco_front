import React, { createContext, useState, useEffect, useContext, useMemo, useCallback } from 'react';
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem('token');
    localStorage.clear();
    if (token) {
      localStorage.setItem('token', token);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const token = localStorage.getItem('token');
    if (!token) {
      clearTimeout(timeoutId); 
      setLoading(false);
      return;
    }
    fetch(apiUrl('/auth/profile'), {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => {
        if (r.status === 401) return Promise.reject('unauthorized');
        return r.ok ? r.json() : Promise.reject('server_error');
      })
      .then(data => {
        if (data.user) {
          const avatarUrl = assetUrl(data.user.avatar);
          const merged = { 
            ...data.user, 
            profileImage: avatarUrl || null 
          };
          setUser(merged);
        } else {
          localStorage.removeItem('token');
        }
      })
      .catch((reason) => {
        if (reason === 'unauthorized') {
          localStorage.removeItem('token');
        }
      })
      .finally(() => {
        clearTimeout(timeoutId);
        setLoading(false);
      });
  }, []);

  const updateUser = useCallback((newUser) => {
    setUser(prevUser => {
      const updatedUser = { ...prevUser, ...newUser };
      return updatedUser;
    });
  }, []);

  const getToken = useCallback(() => {
    return localStorage.getItem('token');
  }, []);

  const login = useCallback(async (email, password) => {
    const response = await fetch(apiUrl('/auth/login'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    const avatarUrl = assetUrl(data.user.avatar);
    const mergedUser = {
      ...data.user,
      profileImage: avatarUrl || null
    };

    localStorage.setItem('token', data.token);
    setUser(mergedUser);
    return { success: true, user: mergedUser };
  }, []);

  const register = useCallback(async (name, email, password, explorerType) => {
    const response = await fetch(apiUrl('/auth/register'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, explorerType }),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    return data;
  }, []);

  const googleLogin = useCallback(async (idToken) => {
    const response = await fetch(apiUrl('/auth/google'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Google login failed');
    }
    const avatarUrl = assetUrl(data.user.avatar);
    const mergedUser = {
      ...data.user,
      profileImage: avatarUrl || null
    };

    localStorage.setItem('token', data.token);
    setUser(mergedUser);
    return { success: true, user: mergedUser };
  }, []);

  const logout = useCallback(() => {
    localStorage.clear();
    setUser(null);
  }, []);

  const value = useMemo(() => ({
    user,
    loading,
    login,
    register,
    googleLogin,
    logout,
    updateUser,
    getToken,
  }), [user, loading, login, register, googleLogin, logout, updateUser, getToken]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}
