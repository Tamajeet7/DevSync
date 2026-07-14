import { api } from "../../../lib/axios";

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

class AuthService {
  async register(data: RegisterDto) {
    const res = await api.post<AuthResponse>(
      "/auth/register",
      data
    );

    return res.data;
  }

  async login(data: LoginDto) {
    const res = await api.post<AuthResponse>(
      "/auth/login",
      data
    );

    return res.data;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  saveSession(data: AuthResponse) {
    localStorage.setItem("token", data.token);
    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    );
  }

  getUser() {
    const user = localStorage.getItem("user");

    if (!user) return null;

    return JSON.parse(user);
  }

  isAuthenticated() {
    return !!localStorage.getItem("token");
  }
}

export default new AuthService();